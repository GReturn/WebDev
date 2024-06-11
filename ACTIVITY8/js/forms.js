document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const closeButton = document.getElementsByClassName("close")[0];
    const form = document.getElementById("userForm");

    function showModal() {
        modal.style.display = "block";
    }

    function hideModal() {
        modal.style.display = "none";
    }

    closeButton.onclick = function() {
        hideModal();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }

    form.onsubmit = function(event) {
        event.preventDefault();
        showModal();
    }
});

console.log("forms.js has successfully connected to index.html");