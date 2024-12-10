
function savePlan() {
    const plan = document.getElementById("burnout-plan").value;
    if (plan.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("burnoutPlan", plan);
    document.getElementById("feedback").innerText = "Tu plan ha sido guardado.";
}

function goBack() {
    window.location.href = "menu.html";
}
