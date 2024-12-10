
function saveOcpdDiary() {
    const diary = document.getElementById("ocpd-diary").value;
    if (diary.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("ocpdDiary", diary);
    document.getElementById("feedback").innerText = "Tu reflexión ha sido guardada.";
}

function goBack() {
    window.location.href = "menu.html";
}
