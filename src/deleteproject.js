import { addProject } from "./addProject";

let deleteProject = (() => {

    let deleteProjectDiv = (el) => {
        el.target.parentElement.remove();
    }
    
    //string
    let getDataIDDelete = (el) => {
        return Number(el.target.getAttribute("data-id"));
    };

    //identification will be passed as a string
    let getIndexOfDeletedProject = (identification) => {
        
        for (let i = 0; i < addProject.mainArr.length; i++){
            if(addProject.mainArr[i].id === identification){
                return i;
            }
        }
    };
    
    let deleteFromMainArr = (index) => {
        
        addProject.mainArr.splice(index,1);
        
    };

    let removeProject = (el) => {
        deleteProjectDiv(el);
        let t = getIndexOfDeletedProject(getDataIDDelete(el));
        deleteFromMainArr(t);
    }
    

    return {getDataIDDelete, deleteProjectDiv, removeProject};

})();

export {deleteProject};