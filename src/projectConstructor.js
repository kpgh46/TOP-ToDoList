let projectConstructor = (title, id, tasks) => {
    tasks = [];
    return {title, id:Date.now(), tasks}
}

export {projectConstructor};