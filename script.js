
const secretKeysList = document.getElementById('secretKeys');

function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomIndex = Math.floor(Math.random() * alphabet.length);
    return alphabet[randomIndex];
}

var secretKey = getRandomLetter();

function handleKeyPress(event) {
    const keyPressed = event.key.toLowerCase();
    if (keyPressed === secretKey) {
      
        const secretMessage = document.createElement('h2');
        secretMessage.textContent = 'SECRET KEY PRESSED ' + secretKey;
        document.body.appendChild(secretMessage);

        secretKey = getRandomLetter();
    }
}

document.body.addEventListener('keydown', handleKeyPress);