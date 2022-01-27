

let addProject = () => {
    let element = document.createElement("div");

    element.textContent = "new test commit";
    element.classList.add("hi");

    document.body.appendChild(element);
};

export default addProject