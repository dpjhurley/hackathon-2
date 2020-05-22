'use strict';

document.addEventListener('click', () => {
  const pacFace = document.querySelector('.pacboy-active-dark');
  if (pacFace.style.backgroundPositionX === 'right') {
    pacFace.style.backgroundPositionX = 'left';
  } else if (pacFace.style.backgroundPositionX === 'left' || pacFace.style.backgroundPositionX === '') {
    pacFace.style.backgroundPositionX = 'right';
  }
  });
