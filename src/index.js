import addProject from './addproject.js'
import './style.css';


let testFunction = () => {
    let el = document.createElement("div");

    el.textContent = "hola";
    el.classList.add("hi");

    document.body.appendChild(el);
};

testFunction();

addProject();

