const keys = document.querySelectorAll('.key');
let notesPlayed = [];

keys.forEach((key, index) => {
    key.addEventListener('click', () => {
        const note = index + 1;
        notesPlayed.push(note);
        playSound(note);
    });
});

document.addEventListener('keydown', e => {
    const keyIndex = parseInt(e.key);
    if (keyIndex >= 1 && keyIndex <= 8) {
        notesPlayed.push(keyIndex);
        playSound(keyIndex);
    }
});

function playSound(noteIndex) {
    const audio = new Audio(`${noteIndex}.mp3`);
    audio.play();
}

function playStoredNotes() {
    let i = 0;
    const interval = setInterval(() => {
        if (i < notesPlayed.length) {
            playSound(notesPlayed[i]);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 500); // Adjust this value to control the playback speed
}

function clearNotes() {
    notesPlayed = [];
}