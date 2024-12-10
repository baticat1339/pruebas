
function saveSocialDiary() {
    const diary = document.getElementById("social-diary").value;
    if (diary.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("socialDiary", diary);
    document.getElementById("feedback").innerText = "Tu entrada ha sido guardada.";
}

function goBack() {
    window.location.href = "menu.html";
}
