
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
