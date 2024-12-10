
function saveRelationshipDiary() {
    const diary = document.getElementById("relationship-diary").value;
    if (diary.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("relationshipDiary", diary);
    document.getElementById("feedback").innerText = "Tu reflexión ha sido guardada.";
}

function goBack() {
    window.location.href = "menu.html";
}
