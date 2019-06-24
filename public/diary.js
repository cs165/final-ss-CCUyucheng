

botton = document.querySelector('#create-button');
botton.addEventListener('click' , create);

function create() {
  homeview = document.querySelector('#home-view');
  homeview.classList.add('hidden');
  journalview = document.querySelector('#journal-view');
  journalview.classList.remove('hidden');


  date = new Date().toLocaleDateString('en-US');
  document.querySelector('#date').innerHTML = date;
}
