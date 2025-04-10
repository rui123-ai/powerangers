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
            civilian_photo: "./images/rangers/ninja-storm/rosa/rosa-civilian-1.png",
            morphed_photo: "./images/rangers/ninja-storm/rosa/rosa-morphed-1.jpg"
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
        },
        {
            name: "Rafael Soares",
            color: "yellow",
            age: "20 anos",
            ability: "Manipulação do Trovão",
            zord: "Thunder Zord",
            curiosity: "Praticante de parkour e especialista em combate acrobático",
            civilian_photo: "images/rangers/ninja-storm/rafael/rafael-civilian-1.jpg",
            morphed_photo: "images/rangers/ninja-storm/rafael/rafael-morphed-1.jpg"
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

// Audio Player Functionality
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('theme-song');
    const playPauseButton = document.getElementById('play-pause');
    const volumeSlider = document.getElementById('volume-slider');

    // Play/Pause functionality
    playPauseButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playPauseButton.classList.add('playing');
            playPauseButton.querySelector('i').classList.remove('fa-play');
            playPauseButton.querySelector('i').classList.add('fa-pause');
        } else {
            audio.pause();
            playPauseButton.classList.remove('playing');
            playPauseButton.querySelector('i').classList.remove('fa-pause');
            playPauseButton.querySelector('i').classList.add('fa-play');
        }
    });

    // Volume control
    volumeSlider.addEventListener('input', (e) => {
        const volume = e.target.value / 100;
        audio.volume = volume;
        
        // Update volume icon based on level
        const volumeIcon = document.querySelector('.volume-control i');
        volumeIcon.className = 'fas';
        
        if (volume === 0) {
            volumeIcon.classList.add('fa-volume-mute');
        } else if (volume < 0.5) {
            volumeIcon.classList.add('fa-volume-down');
        } else {
            volumeIcon.classList.add('fa-volume-up');
        }
    });

    // Click on volume icon to mute/unmute
    const volumeIcon = document.querySelector('.volume-control i');
    let lastVolume = audio.volume;

    volumeIcon.addEventListener('click', () => {
        if (audio.volume > 0) {
            lastVolume = audio.volume;
            audio.volume = 0;
            volumeSlider.value = 0;
            volumeIcon.className = 'fas fa-volume-mute';
        } else {
            audio.volume = lastVolume;
            volumeSlider.value = lastVolume * 100;
            volumeIcon.className = lastVolume < 0.5 ? 'fas fa-volume-down' : 'fas fa-volume-up';
        }
    });
});

// Remove unused filter functions
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