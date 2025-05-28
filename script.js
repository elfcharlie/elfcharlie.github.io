// script.js

  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav a');
  
    function showSection(id) {
      sections.forEach(sec => {
        sec.style.display = sec.id === id ? 'block' : 'none';
      });
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        showSection(sectionId);
      });
    });
  
    showSection('welcome'); // Visa startsidan
  
    // Hämta data och bygg kort
    fetch('employees.json')
      .then(response => response.json())
      .then(data => {
        // Spara datan globalt
        window._employeeData = data;
        buildCards();
      })
      .catch(error => console.error("Fel vid hämtning av persondata:", error));
  });
  
  // Bygger om alla kort utifrån aktuell fönsterstorlek
  function buildCards() {
    const container = document.getElementById('person-cards');
    const isMobile = window.innerWidth < 600;
    const data = window._employeeData;
  
    // Fånga gamla kort och lägg till fade-out
    const oldCards = container.querySelectorAll('.person-card');
    oldCards.forEach(card => {
      card.classList.add('fade-out');
    });
  
    // Vänta på animation (300ms) innan vi byter ut innehållet
    setTimeout(() => {
      container.innerHTML = ''; // Töm gamla kort
  
      data.forEach(person => {
        const card = document.createElement('div');
        card.className = 'person-card' + (isMobile ? ' card-flip' : ' card-static');
  
        if (isMobile) {
          card.innerHTML = `
            <div class="card-inner">
              <div class="card-front">
                <img src="${person.image}" alt="${person.name}" />
                <div class="person-info">
                  <h3>${person.name}</h3>
                  <p class="title">${person.title}</p>
                </div>
              </div>
              <div class="card-back">
                <p class="description">${person.description}</p>
              </div>
            </div>
          `;
          card.addEventListener('click', () => {
            card.classList.toggle('flipped');
          });
        } else {
          card.innerHTML = `
            <img src="${person.image}" alt="${person.name}" />
            <div class="person-info">
              <h3>${person.name}</h3>
              <p class="title">${person.title}</p>
              <p class="description">${person.description}</p>
            </div>
          `;
        }
  
        // Lägg till fade-in effekt
        card.classList.add('fade-in');
        container.appendChild(card);
      });
    }, 300); // matchar transition-tiden från CSS
  }
  
  
  // Lyssna på fönsterstorlek och uppdatera kort vid behov
  window.addEventListener('resize', () => {
    // Bygg bara om om flip/statiskt ändrats
    const nowMobile = window.innerWidth < 600;
    const currentlyMobile = document.querySelector('.card-flip') !== null;
    if (nowMobile !== currentlyMobile) {
      buildCards();
    }
  });
  