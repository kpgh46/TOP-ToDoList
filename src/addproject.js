let mainArr = [];

let addProject = (() => {

    let getProjectName = () => {
        console.log("this works")
    }
    
    let pushToMainArr = (project) => {
        mainArr.push(project);
    };

    return {pushToMainArr, getProjectName }
})();

export {addProject, mainArr};