import { Router } from './router.js'

const buttonHome = document.querySelector('#btnHome');
const buttonUniverse = document.querySelector('#btnUniverse');
const buttonExploration = document.querySelector('#btnExploration');


export function home(){
  
  document.documentElement.classList.remove("universe");
  document.documentElement.classList.remove("exploration");


  buttonHome.classList.add("active");
  buttonUniverse.classList.remove("active");
  buttonExploration.classList.remove("active");
}
export function universe(){

  document.documentElement.classList.add("universe");
  document.documentElement.classList.add("exploration");

  buttonHome.classList.remove("active");
  buttonUniverse.classList.add("active");
  buttonExploration.classList.remove("active");
}
export function exploration(){

  document.documentElement.classList.remove("universe");
  document.documentElement.classList.add("exploration");

  buttonHome.classList.remove("active");
  buttonUniverse.classList.remove("active");
  buttonExploration.classList.add("active");
}

export function about() {
const router = new Router();
router.add('/universe', '/pages/universe.html')
universe();
}