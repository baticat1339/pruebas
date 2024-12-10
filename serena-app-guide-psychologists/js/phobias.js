
function savePhobiaPlan() {
    const plan = document.getElementById("phobia-plan").value;
    if (plan.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("phobiaPlan", plan);
    document.getElementById("feedback").innerText = "Tu plan ha sido guardado.";
}

function goBack() {
    window.location.href = "menu.html";
}
