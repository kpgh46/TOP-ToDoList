

let addProject = () => {
    let element = document.createElement("div");

    element.textContent = "first commit";
    element.classList.add("hi");

    document.body.appendChild(element);
};

export default addProject