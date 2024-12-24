// Анимация снежинок
document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snowflakes');
    const snowflakeCount = 50; 

    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄'; 
      snowflake.style.left = Math.random() * 200 + 'vw';
      snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'em';
      snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
      snowflake.style.animationDelay = Math.random() * 5 + 's';
      snowflake.style.setProperty('--horizontal-shift', Math.random() * 2 - 1); 

      snowContainer.appendChild(snowflake);
    }

  });
  
// Гирлянда
const numberOfLights = 40; // Количество лампочек 

const lightrope = document.getElementById('lightrope');

for (let i = 0; i < numberOfLights; i++) {
  const light = document.createElement('li');
  lightrope.appendChild(light);
}

// Получаем элементы
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeBtn = document.querySelector(".close");

// Данные проектов
const projectDetails = {
};

// Обработчик открытия модального окна
document.querySelectorAll(".project-item").forEach(item => {
    item.addEventListener("click", () => {
        const projectKey = item.getAttribute("data-project");
        modalBody.innerHTML = projectDetails[projectKey];
        modal.style.display = "flex"; // Показываем модальное окно
    });
});

// Обработчик закрытия модального окна
closeBtn.addEventListener("click", () => {
    modal.style.display = "none"; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне контента
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
