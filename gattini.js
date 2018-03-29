var button = document.getElementById('foto');
button.addEventListener('click',changeimg)

function changeimg () {
  var cats = document.getElementById('vuoto');
  cats.className = cats.classList + "cani";
}
