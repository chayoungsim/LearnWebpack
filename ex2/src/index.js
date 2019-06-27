
import './css/style.css';

const mbMenu = document.querySelector('.mb');
const mbNav = document.querySelector('nav');
function toggleAction(){
  this.classList.toggle('active');
  if(this.classList.contains('active')){
    mbNav.style.display='block';
  } else{
    mbNav.style.display='none';
  } 
}    
mbMenu.addEventListener('click',toggleAction);