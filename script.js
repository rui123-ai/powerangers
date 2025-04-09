// Dados dos Rangers
const rangersData = {
    spd: [
        {
            name: "Daniel Delon",
            color: "red",
            age: 23,
            ability: "Liderança e Estratégia",
            zord: "SPD Runner 1",
            curiosity: "Graduado com honras na Academia SPD",
            civilian_photo: "path/to/daniel-civilian.jpg",
            morphed_photo: "path/to/daniel-morphed.jpg"
        },
        {
            name: "Klaus Drakkonov",
            color: "blue",
            age: 25,
            ability: "Análise Tática e Combate",
            zord: "SPD Runner 2",
            curiosity: "Especialista em tecnologia alienígena",
            civilian_photo: "path/to/klaus-civilian.jpg",
            morphed_photo: "path/to/klaus-morphed.jpg"
        },
        {
            name: "Amemiya Taiyou",
            color: "green",
            age: 22,
            ability: "Agilidade e Artes Marciais",
            zord: "SPD Runner 3",
            curiosity: "Campeão de artes marciais intergalácticas",
            civilian_photo: "path/to/amemiya-civilian.jpg",
            morphed_photo: "path/to/amemiya-morphed.jpg"
        },
        {
            name: "Jackie Harllow",
            color: "yellow",
            age: 24,
            ability: "Investigação e Rastreamento",
            zord: "SPD Runner 4",
            curiosity: "Ex-detetive da polícia espacial",
            civilian_photo: "path/to/jackie-civilian.jpg",
            morphed_photo: "path/to/jackie-morphed.jpg"
        },
        {
            name: "Ahri-Anya Lang",
            color: "pink",
            age: 21,
            ability: "Tecnologia e Hacking",
            zord: "SPD Runner 5",
            curiosity: "Prodígio em programação quântica",
            civilian_photo: "path/to/ahri-civilian.jpg",
            morphed_photo: "path/to/ahri-morphed.jpg"
        },
        {
            name: "Anaya Hazel Adebayo",
            color: "gold",
            age: 26,
            ability: "Comando e Operações Especiais",
            zord: "SPD Gold Runner",
            curiosity: "Líder da divisão de operações especiais",
            civilian_photo: "path/to/anaya-civilian.jpg",
            morphed_photo: "path/to/anaya-morphed.jpg"
        }
    ]
};

// Função para criar cards de Rangers
function createRangerCard(ranger) {
    return `
        <div class="ranger-card">
            <div class="card-header">
                <div class="ranger-photo">
                    <div class="photo-split">
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