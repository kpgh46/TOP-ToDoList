import './style.css';
import { projectConstructor } from './projectConstructor';
import { dom } from './dom.js';
import { addProject, mainArr} from './addProject';


//Default Project
let defaultProject = projectConstructor("Default");
addProject.pushToMainArr(defaultProject);
dom.render();
//Default Project
