
function saveLetter() {
    const letter = document.getElementById("pet-letter").value;
    if (letter.trim() === "") {
        document.getElementById("feedback").innerText = "Por favor, escribe algo antes de guardar.";
        return;
    }
    localStorage.setItem("petLetter", letter);
    document.getElementById("feedback").innerText = "Tu carta ha sido guardada.";
}

function goBack() {
    window.location.href = "grief.html";
}
