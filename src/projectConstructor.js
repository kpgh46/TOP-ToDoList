let projectConstructor = (title, description, dueDate, priority, id, tasks) => {
    tasks = [];
    return {title, description,dueDate,priority, id:Date.now(), tasks}
}

export {projectConstructor};