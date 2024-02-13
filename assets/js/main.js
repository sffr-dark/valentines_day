const yesBtn = document.getElementsByClassName('yes')[0];
const noBtn = document.getElementsByClassName('no')[0];
const askImg = document.getElementById('ask-img');

noBtn.addEventListener('mouseover', function () {
  this.style.top = Math.random() * 90 + '%';
  this.style.left = Math.random() * 90 + '%';
});

yesBtn.addEventListener('mouseover', function () {
  askImg.src = 'assets/img/capoo-excited.gif';
});

yesBtn.addEventListener('mouseout', function () {
  askImg.src = 'assets/img/capoo-flowers.gif';
});
