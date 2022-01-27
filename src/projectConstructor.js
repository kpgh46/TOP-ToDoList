let projectConstructor = (title, description, dueDate, priority, id, tasks) => {
    tasks = [];
    return {title, description,dueDate,priority, id, tasks}
}

export {projectConstructor};