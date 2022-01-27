let mainArr = [];

let addProject = (() => {
    
    let pushToMainArr = (project) => {
        mainArr.push(project);
    };

    return {pushToMainArr }
})();

export {addProject, mainArr};