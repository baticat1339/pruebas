
function saveDiary() {
    const diary = document.getElementById("tag-diary").value;
    if (diary.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("tagDiary", diary);
    document.getElementById("feedback").innerText = "Tu entrada ha sido guardada.";
}

function goBack() {
    window.location.href = "menu.html";
}
