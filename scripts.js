
const updateBlock = document.getElementById('update-block');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-btn');

updateBlock.addEventListener('click', function() {
  modal.style.display = 'block';
});


closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loading-screen');
  const outerWrapper = document.querySelector('.outer-wrapper');

  setTimeout(() => {
    loadingScreen.style.display = 'none'; 
    outerWrapper.style.display = 'block'; 

    document.body.style.overflow = 'auto'; 
  }, 2000); 
});



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

