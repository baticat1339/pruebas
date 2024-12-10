
function saveTeptTriggers() {
    const triggers = document.getElementById("tept-triggers").value;
    if (triggers.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("teptTriggers", triggers);
    document.getElementById("feedback").innerText = "Tu registro ha sido guardado.";
}

function goBack() {
    window.location.href = "menu.html";
}
