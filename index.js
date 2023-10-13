const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('main') || // user clicks on mask
        e.target.className === 'close-btn' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('.container').classList.remove('visible');
    }
};
const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10;

    if (shouldShowExitIntent && screen.width >=481) {
        document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('.container').classList.add('visible');
        CookieService.setCookie('exitIntentShown', true, 30);
    }
};

const myTimeout = setTimeout(myFunc, 5000);
function myFunc(){
    if(screen.width <= 480){
        document.querySelector('.container').classList.add('visible');
        CookieService.setCookie('exitIntentShown', true, 30);
    }
}

if (!CookieService.getCookie('exitIntentShown')) {
    setTimeout(() => {
        document.addEventListener('mouseout', mouseEvent);
        document.addEventListener('keydown', exit);
        document.querySelector('.container').addEventListener('click', exit);
    }, 0);
}

document.getElementById("form").addEventListener("submit", function(event) {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var checkbox = document.getElementById("checkbox");

    var namePattern = /^[A-Za-z\s]+$/; // Only alphabets and spaces allowed
    var emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!namePattern.test(name.value) || name.value == null) {
        name.style.border = "red solid 3px"; 
        name.classList.add("error");
        event.preventDefault(); // Prevent form submission
    }

    if (!emailPattern.test(email.value) || email.value == null) {
        email.style.border = "red solid 3px"; 
        email.classList.add("error");
        event.preventDefault(); // Prevent form submission
    }

    if (!checkbox.checked) {
        checkbox.style.border = "red solid 1px"; 
        document.getElementById("label").classList.add("error");
        event.preventDefault(); // Prevent form submission
    }
});
(function validateName(){
    var nameValue = document.querySelector(".name").value; 
    var name = document.querySelector(".name"); 
    var namePattern = /^[A-Za-z\s]+$/;
    if (namePattern.test(nameValue)) { 
        name.style.border = "green solid 3px"; 
        alert("sdfsd") 
    } 
    else { 
        name.style.border = "red solid 3px"; 
        return false; 
    } 
})

