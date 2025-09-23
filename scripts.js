function openLink(id) {
    window.open(`https://fribbels.github.io/hsr-optimizer#showcase?id=${id}`, '_blank');
}

fetch('promocodes.json')
  .then(async response => {
    const text = await response.text();
    if (!text) return [];
    try {
      return JSON.parse(text);
    } catch (e) {
      console.error('Ошибка парсинга JSON:', e);
      return [];
    }
  })
  .then(data => {
    const container = document.getElementById('promocodes-container');
    if (!data.length) {
      container.innerHTML = '<p>Пока нет активных промокодов.</p>';
      return;
    }
    data.forEach(item => {
      const codeElement = document.createElement('ul');
      codeElement.innerHTML = `<li><a href="https://hsr.hoyoverse.com/gift?code=${item}" target="_blank">${item}</a></li>`;
      container.appendChild(codeElement);
    });
  })
  .catch(error => {
    console.error('Ошибка загрузки промокодов:', error);
    const container = document.getElementById('promocodes-container');
    container.innerHTML = '<p>Не удалось загрузить промокоды.</p>';
  });

