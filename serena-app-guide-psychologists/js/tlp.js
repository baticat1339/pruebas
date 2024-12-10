
function saveEmotionDiary() {
    const diary = document.getElementById("emotions-diary").value;
    if (diary.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("emotionsDiary", diary);
    document.getElementById("feedback").innerText = "Tu registro ha sido guardado.";
}

function goBack() {
    window.location.href = "menu.html";
}
