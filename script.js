// Dados dos Rangers
const rangersData = {
    spd: [
        {
            name: "Daniel Delon",
            color: "red",
            age: "27 anos",
            ability: "Pré e Pós-cognição",
            zord: "SPD Runner 1",
            curiosity: "Ex-piloto de corrida, aprendeu a confiar na velocidade, no instinto e no limite",
            civilian_photo: "images/rangers/spd/daniel/daniel-civilian-1.jpg",
            morphed_photo: "images/rangers/spd/daniel/daniel-morphed-1.jpg"
        },
        {
            name: "Klaus Drakkonov",
            color: "blue",
            age: "27 anos",
            ability: "Manipulação Psíquica",
            zord: "SPD Runner 2",
            curiosity: "Leva o trabalho com extrema seriedade e dedicação inabalável",
            civilian_photo: "images/rangers/spd/klaus/klaus-civilian-1.jpg",
            morphed_photo: "images/rangers/spd/klaus/klaus-morphed-1.jpg"
        },
        {
            name: "Amemiya Taiyou",
            color: "green",
            age: 22,
            ability: "Agilidade e Artes Marciais",
            zord: "SPD Runner 3",
            curiosity: "Campeão de artes marciais intergalácticas",
            civilian_photo: "images/rangers/spd/amemiya/amemiya-civilian-1.jpg",
            morphed_photo: "images/rangers/spd/amemiya/amemiya-morphed-1.jpg"
        },
        {
            name: "Jackie Harllow",
            color: "yellow",
            age: "26 anos",
            ability: "Supervelocidade e Teletransporte",
            zord: "SPD Runner 4",
            curiosity: "Toca guitarra com maestria, sonha em ser a melhor guitarrista do mundo",
            civilian_photo: "images/rangers/spd/jackie/jackie-civilian-1.jpg",
            morphed_photo: "images/rangers/spd/jackie/jackie-morphed-1.jpg"
        },
        {
            name: "Ahri-Anya Lang",
            color: "pink",
            age: 21,
            ability: "Tecnologia e Hacking",
            zord: "SPD Runner 5",
            curiosity: "Prodígio em programação quântica",
            civilian_photo: "images/rangers/spd/ahri/ahri-civilian-1.jpg",
            morphed_photo: "images/rangers/spd/ahri/ahri-morphed-1.jpg"
        },
        {
            name: "Anaya Hazel Adebayo",
            color: "gold",
            age: "24 anos",
            ability: "Manipulação do Tempo",
            zord: "SPD Gold Runner",
            curiosity: "Mantém uma padaria como refúgio entre missões",
            civilian_photo: "images/rangers/spd/anaya/anaya-civilian-1.jpg",
            morphed_photo: "images/rangers/spd/anaya/anaya-morphed-1.jpg"
        }
    ],
    ninjaStorm: [
        {
            name: "Ryuki Azashiro",
            color: "red",
            age: "19 anos",
            ability: "Manipulação do Fogo",
            zord: "Hawk Zord",
            curiosity: "Descendente de uma antiga linhagem de ninjas japoneses",
            civilian_photo: "images/rangers/ninja-storm/ryuki/ryuki-civilian-1.jpg",
            morphed_photo: "images/rangers/ninja-storm/ryuki/ryuki-morphed-1.jpg"
        },
        {
            name: "Rosa Guaita",
            color: "blue",
            age: "20 anos",
            ability: "Controle da Água",
            zord: "Dolphin Zord",
            curiosity: "Campeã de natação e mergulho livre",
            civilian_photo: "images/rangers/ninja-storm/rosa/rosa-civilian-1.jpg",
            morphed_photo: "images/rangers/ninja-storm/rosa/rosa-morphed-1.jpg"
        },
        {
            name: "Zul",
            color: "pink",
            age: "18 anos",
            ability: "Telecinese",
            zord: "Phoenix Zord",
            curiosity: "Possui origem alienígena misteriosa",
            civilian_photo: "images/rangers/ninja-storm/zul/zul-civilian-1.jpg",
            morphed_photo: "images/rangers/ninja-storm/zul/zul-morphed-1.jpg"
        },
        {
            name: "Olga Balmaceda",
            color: "green",
            age: "21 anos",
            ability: "Controle da Terra",
            zord: "Lion Zord",
            curiosity: "Especialista em artes marciais e geologia",
            civilian_photo: "images/rangers/ninja-storm/olga/olga-civilian-1.jpg",
            morphed_photo: "images/rangers/ninja-storm/olga/olga-morphed-1.jpg"
        }
    ]
};

// Função para criar cards de Rangers
function createRangerCard(ranger) {
    return `
        <div class="ranger-card">
            <div class="card-header">
                <div class="ranger-photo">
                    <div class="photo-container">
                        <div class="photo-civilian" style="background-image: url('${ranger.civilian_photo}')"></div>
                        <div class="photo-morphed" style="background-image: url('${ranger.morphed_photo}')"></div>
                    </div>
                </div>
                <h4>${ranger.name}</h4>
                <span class="ranger-color ${ranger.color}">Ranger ${ranger.color}</span>
            </div>
            <div class="card-content">
                <ul>
                    <li><strong>Idade:</strong> ${ranger.age}</li>
                    <li><strong>Habilidade:</strong> ${ranger.ability}</li>
                    <li><strong>Zord:</strong> ${ranger.zord}</li>
                    <li><strong>Curiosidade:</strong> ${ranger.curiosity}</li>
                </ul>
            </div>
        </div>
    `;
}

// Função para filtrar Rangers
function filterRangers(searchTerm, era) {
    const rangerCards = document.querySelectorAll('.ranger-card');
    rangerCards.forEach(card => {
        const rangerName = card.querySelector('h4').textContent.toLowerCase();
        const cardEra = card.closest('.ranger-group').getAttribute('data-era');
        
        const matchesSearch = rangerName.includes(searchTerm.toLowerCase());
        const matchesEra = era === 'all' || cardEra === era;
        
        card.style.display = matchesSearch && matchesEra ? 'block' : 'none';
    });
}

// Efeito de parallax para as estrelas
function handleParallax() {
    const stars = document.querySelector('.stars');
    const twinkling = document.querySelector('.twinkling');
    let scrolled = window.pageYOffset;
    
    // Usando requestAnimationFrame para melhor performance
    requestAnimationFrame(() => {
        stars.style.transform = `translateY(${scrolled * 0.2}px)`;
        twinkling.style.transform = `translateY(${scrolled * 0.1}px)`;
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Busca de Rangers
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            filterRangers(e.target.value, 'all');
        });
    }

    // Filtros por era
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const era = button.getAttribute('data-era');
            filterRangers('', era);
            
            // Atualiza botão ativo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Adiciona o evento de scroll para o efeito parallax
    window.addEventListener('scroll', handleParallax, { passive: true });

    // Animação de entrada para cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.ranger-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
});

// Adiciona efeito de hover nos cards
document.querySelectorAll('.ranger-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 0 20px rgba(0, 168, 255, 0.5)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
}); 