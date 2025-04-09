// Dados dos Rangers (exemplo)
const rangersData = {
    mightyMorphin: [
        {
            name: "Jason Lee Scott",
            color: "red",
            age: 17,
            ability: "Liderança Tática",
            zord: "Tyrannosaurus Dinozord",
            curiosity: "Pratica artes marciais desde os 12 anos"
        },
        {
            name: "Kimberly Hart",
            color: "pink",
            age: 16,
            ability: "Acrobacia e precisão com arco",
            zord: "Pterodactyl Dinozord",
            curiosity: "Ex-ginasta olímpica"
        }
        // Adicione mais Rangers aqui
    ]
};

// Função para criar cards de Rangers
function createRangerCard(ranger) {
    return `
        <div class="ranger-card">
            <div class="card-header">
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