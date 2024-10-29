// Typing effect function
const typingText = document.getElementById("typingText");
const text = "I am Adarsh - Web Developer | Software Developer | UI/UX Designer.";
let index = 0;

function type() {
    if (index < text.length) {
        typingText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust the speed (100ms per character)
    }
}

// Start typing effect on page load
window.onload = type;
