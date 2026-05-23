// Função para carregar os animais na Home (Amigos em Destaque)
function carregarDestaques() {
    const container = document.getElementById('pets-destaque');
    if (!container) return;

    container.innerHTML = ""; // Limpa o container

    pets.forEach(pet => {
        const card = `
            <article class="destaque-card">
                <img src="${pet.foto}" class="destaque-img" onclick="abrirModal(${pet.id})">
                <div class="destaque-info">
                    <h3>${pet.nome.toUpperCase()} ${pet.especie === 'Cachorro' ? '🐶' : '🐱'}</h3>
                    <p style="color: var(--secondary); font-weight: bold; font-size: 0.9rem;">${pet.especie}</p>

                    <div class="pet-details-grid">
                        <p>⚖️ <strong>Peso:</strong> ${pet.peso}</p>
                        <p>🎂 <strong>Idade:</strong> ${pet.idade}</p>
                        <p>🧬 <strong>Raça:</strong> ${pet.raca}</p>
                        <p>✂️ <strong>Castrado:</strong> ${pet.castrado}</p>
                        <p>💉 <strong>Vacinado:</strong> ${pet.vacinado}</p>
                        <p>📍 <strong>Cidade:</strong> ${pet.cidade}</p>
                    </div>

                    <button class="btn-main" onclick="abrirModal(${pet.id})" style="margin-top:10px;">Ver História</button>
                </div>
            </article>
        `;
        container.innerHTML += card;
    });
}

// Funções do Modal
function abrirModal(id) {
    const pet = pets.find(p => p.id === id);
    const modal = document.getElementById('modal-pet');
    const modalBody = modal.querySelector('.modal-content');

    modalBody.innerHTML = `
        <img src="${pet.foto}" class="modal-img-grande" style="width:100%; border-radius:15px;">
        <h3>A História de ${pet.nome}</h3>
        <p style="margin: 20px 0; line-height: 1.6;">${pet.historia}</p>
        <a href="triagem.html" target="_blank" class="btn-main" style="display:block; text-decoration:none;">Quero me inscrever para adoção</a>
        <button onclick="fecharModal()" style="margin-top:15px; background:none; border:none; cursor:pointer; color:red;">Fechar</button>
    `;

    modal.style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal-pet').style.display = 'none';
}

function scrollCarrossel(direcao) {
    const container = document.getElementById('pets-destaque');
    const scrollAmount = 880; // Largura do card (850) + Gap (30)

    if (direcao === 1) {
        container.scrollLeft += scrollAmount;
    } else {
        container.scrollLeft -= scrollAmount;
    }
}

// O GATILHO QUE ESTAVA FALTANDO:
window.onload = carregarDestaques;
