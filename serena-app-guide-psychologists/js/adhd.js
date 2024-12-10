
function saveTasks() {
    const tasks = document.getElementById("adhd-tasks").value;
    if (tasks.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("adhdTasks", tasks);
    document.getElementById("feedback").innerText = "Tu lista de tareas ha sido guardada.";
}

function goBack() {
    window.location.href = "menu.html";
}
