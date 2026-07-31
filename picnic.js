const hoverBox = document.getElementById('hover-info');
const hoverImg = document.getElementById('hover-img');
const hoverText = document.getElementById('hover-text');
const gameItems = document.querySelectorAll('.game-list li');

gameItems.forEach(item => {
    
    item.addEventListener('mouseenter', () => {
        hoverImg.src = item.getAttribute('data-img');
        hoverText.innerText = item.getAttribute('data-detail');
        hoverBox.style.display = 'flex';
    });

    item.addEventListener('mousemove', (e) => {
        hoverBox.style.left = e.pageX + 20 + 'px'; 
        hoverBox.style.top = e.pageY + 20 + 'px';
    });

    item.addEventListener('mouseleave', () => {
        hoverBox.style.display = 'none';
    });
});

const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", function () {

    if (password.type === "password") {
        password.type = "text";
        this.classList.remove("bi-eye-slash-fill");
        this.classList.add("bi-eye-fill");
    } else {
        password.type = "password";
        this.classList.remove("bi-eye-fill");
        this.classList.add("bi-eye-slash-fill");
    }

});
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()