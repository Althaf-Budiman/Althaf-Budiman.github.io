const texts = ["Hello!", "مرحبا", "Hola!", "Bounjour!", "こんにちは!", "你好!", "안녕하세요!", "Привет!"];
const typingSpeed = 100; // Kecepatan mengetik dalam milidetik
let textIndex = 0;
let charIndex = 0;
const typingTextElement = document.getElementById("hello");

function typeText() {
    if (charIndex < texts[textIndex].length) {
        typingTextElement.textContent += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, 1500); // Waktu jeda setelah selesai mengetik
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingTextElement.textContent = texts[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, typingSpeed / 2);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500); // Waktu jeda sebelum memulai mengetik teks berikutnya
    }
}

typeText(); // Memulai proses mengetik
