import { dom } from './dom.js';
import { addProject } from './addproject';

let clickProject = (() => {

    let clickProjectList = (el) => {
        
        if (el.target.classList.contains("project-div")){
            console.log("hello")
        }
    }

    return { clickProjectList }

})();

export {clickProject}