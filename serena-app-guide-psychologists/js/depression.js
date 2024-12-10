
function saveGratitude() {
    const gratitude = document.getElementById("gratitude-diary").value;
    if (gratitude.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("gratitudeDiary", gratitude);
    document.getElementById("feedback").innerText = "Tu entrada ha sido guardada.";
}

function goBack() {
    window.location.href = "menu.html";
}
