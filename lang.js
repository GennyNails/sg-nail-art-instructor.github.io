const translations = {
  it: {
    'About Us': 'Chi siamo',
    'Our Services': 'I nostri servizi',
    'Contact': 'Contatti',
    'Where We Are': 'Dove siamo',
    'My Work': 'I miei lavori',
    'My Salon': 'Il mio salone',
    'Courses': 'Corsi',
    'Gallery': 'Galleria'
  },
  en: {
    'Chi siamo': 'About Us',
    'I nostri servizi': 'Our Services',
    'Contatti': 'Contact',
    'Dove siamo': 'Where We Are',
    'I miei lavori': 'My Work',
    'Il mio salone': 'My Salon',
    'Corsi': 'Courses',
    'Galleria': 'Gallery'
  }
};

function switchLang(lang) {
  const textElements = document.querySelectorAll('a, h2, li');
  textElements.forEach(el => {
    const original = el.textContent.trim();
    if (translations[lang][original]) {
      el.innerHTML = el.innerHTML.replace(original, translations[lang][original]);
    }
  });
}
