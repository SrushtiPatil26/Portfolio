document.addEventListener("DOMContentLoaded", function() {
    const text = "Srushti Patil";
    let index = 0;
    const speed = 100; // Speed in milliseconds

    function typeWriter() {
        if (index < text.length) {
            document.getElementById("typewriter-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});
