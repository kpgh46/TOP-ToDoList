import './style.css';

let testFunction = () => {
    let el = document.createElement("div");

    el.textContent = "sup";
    el.classList.add("hi");

    document.body.appendChild(el);
};

testFunction();

