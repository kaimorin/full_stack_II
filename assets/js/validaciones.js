const gridPro = document.querySelector('.grid-profesionales');
const btnSig = document.getElementById('btn-sig');
const btnAnt = document.getElementById('btn-ant');

if (gridPro && btnSig && btnAnt) {
  btnSig.addEventListener('click', function() {
    gridPro.scrollBy({ left: 300, behavior: 'smooth' });
  });

  btnAnt.addEventListener('click', function() {
    gridPro.scrollBy({ left: -300, behavior: 'smooth' });
  });
}