const registerBlocks = document.querySelectorAll(".register-block");
const registerButtons = document.querySelectorAll(".register-button");

registerButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        registerBlocks.forEach((content) => {
            content.style.display = "none";
        });
        registerBlocks[index].style.display = "block";
    });
});


const form = document.getElementById('register-form');
const input = form.querySelectorAll('input');
let width = 4;
input.forEach((input) => {
    input.addEventListener("focusout", () => {
        width += 12;
        if (width <= 100) {
            document.getElementById('progress-bar').style.width = width + "%";
        }
    });
});


function zatwierdz() {
    let dataArray = [];
    input.forEach(input => {
        (input.type === 'checkbox') ? dataArray.push(input.checked) : dataArray.push(input.value);
    });

    console.log(dataArray.join(', '));
}
