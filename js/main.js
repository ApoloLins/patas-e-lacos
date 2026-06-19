// Função para carregar os animais na Home (Amigos em Destaque)
function carregarDestaques() {
    const container = document.getElementById('pets-destaque');
    if (!container) return;
    container.innerHTML = "";
    pets.forEach(pet => {
        const card = `
            <article class="destaque-card">
                <img src="${pet.foto}" class="destaque-img" onclick="abrirModal(${pet.id})" style="cursor:pointer;">
                <div class="destaque-info">
                    <h3>${pet.nome.toUpperCase()} ${pet.especie === 'Cachorro' ? '🐶' : '🐱'}</h3>
                    <p style="color: var(--secondary); font-weight: bold; font-size: 0.9rem;">${pet.especie}</p>
                    <div class="pet-details-grid">
                        <p><strong>Peso:</strong> ${pet.peso}</p>
                        <p><strong>Idade:</strong> ${pet.idade}</p>
                        <p><strong>Raça:</strong> ${pet.raca}</p>
                        <p><strong>Castrado:</strong> ${pet.castrado}</p>
                        <p><strong>Vacinado:</strong> ${pet.vacinado}</p>
                        <p><strong>Cidade:</strong> ${pet.cidade}</p>
                    </div>
                    <button class="btn-main" onclick="abrirModal(${pet.id})" style="margin-top:10px; cursor:pointer;">Ver História</button>
                </div>
            </article>
        `;
        container.innerHTML += card;
    });
} // <--- Corrigido: Fechamento da função carregarDestaques

// Funções do Modal com Trava de Segurança
function abrirModal(id) {
    const pet = pets.find(p => p.id === id);
    const modal = document.getElementById('modal-pet');
    const modalBody = modal.querySelector('.modal-content');
    modalBody.innerHTML = `
        <img src="${pet.foto}" class="modal-img-grande" style="width:100%; border-radius:15px; max-height:400px; object-fit:cover;">
        <h3>A História de ${pet.nome}</h3>
        <p style="margin: 20px 0; line-height: 1.6;">${pet.historia}</p>
        
        <button onclick="verificarLoginAntesDeAdotar()" class="btn-main" style="display:block; width:100%; border:none; padding:14px; font-size:1rem; cursor:pointer; text-align:center;">
            Quero me inscrever para adoção
        </button>
        
        <button onclick="fecharModal()" style="margin-top:15px; background:none; border:none; cursor:pointer; color:red; font-weight:bold;">Fechar</button>
    `;
    modal.style.display = 'block';
} // <--- Corrigido: Fechamento da função abrirModal

function fecharModal() {
    document.getElementById('modal-pet').style.display = 'none';
} // <--- Corrigido: Fechamento da função fecharModal

// Função de segurança que barra usuários sem cadastro ativo
function verificarLoginAntesDeAdotar() {
    const tutorLogado = localStorage.getItem('dadosTutor');
    if (!tutorLogado) {
        alert("Ação necessária!\n\nPara preencher o questionário de triagem de adoção, você precisa fazer login ou criar sua Conta de Tutor primeiro.");
        window.location.href = "login-tutor.html";
    } else {
        window.location.href = "triagem.html";
    }
} // <--- Corrigido: Fechamento da função verificarLoginAntesDeAdotar

function scrollCarrossel(direcao) {
    const container = document.getElementById('pets-destaque');
    const scrollAmount = 880;
    if (direcao === 1) {
        container.scrollLeft += scrollAmount;
    } else {
        container.scrollLeft -= scrollAmount;
    }
} // <--- Corrigido: Fechamento da função scrollCarrossel

window.onload = carregarDestaques;
