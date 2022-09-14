window.onload = function() {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function() {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
}

const closebtn = document.querySelector('.closebtn'),
    openbtn = document.querySelector('#openbtn');

const btn = document.querySelector('.container');

btn.addEventListener('click', (e) => {
    if (!btn.classList.contains('change')) {
        document.getElementById("myleftsidemenu").style.width = "420px";
        document.getElementById("main").style.marginLeft = "420px";
        btn.classList.add('change');
    } else {
        document.getElementById("myleftsidemenu").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        btn.classList.remove('change');
    }
});
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

let dropdown = document.getElementsByClassName("dropdown-btn");
let i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}