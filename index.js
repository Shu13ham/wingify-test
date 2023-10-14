const exit = e => {
    const shouldExit =
        [...e.target.classList].includes('container') || // user clicks on mask
        e.target.className === 'close-btn' || // user clicks on the close icon
        e.keyCode === 27; // user hits escape

    if (shouldExit) {
        document.querySelector('.container').classList.remove('visible');
        setCookie('exitIntentShown', true, 5);
    }
};

const mouseEvent = e => {
    const shouldShowExitIntent = 
        !e.toElement && 
        !e.relatedTarget &&
        e.clientY < 10 &&
        !getCookie('exitIntentShown');
    if (shouldShowExitIntent && screen.width >=481) {
        // document.removeEventListener('mouseout', mouseEvent);
        document.querySelector('.container').classList.add('visible');
    }
};

setTimeout(function myFunc(){
    if(screen.width <= 480 && !getCookie('exitIntentShown')){
        document.querySelector('.container').classList.add('visible');
    }
}, 5000);

 (function checkCookie(){
    if (!getCookie('exitIntentShown')) {
        setTimeout(() => {
            document.addEventListener('mouseout', mouseEvent);
            document.addEventListener('keydown', exit);
            document.querySelector('.container').addEventListener('click', exit);
        }, 0);
    }
 })();

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

    else if (!emailPattern.test(email.value) || email.value == null) {
        name.classList.remove("error");
        name.style.border = "green solid 3px"; 
        email.style.border = "red solid 3px"; 
        email.classList.add("error");
        event.preventDefault(); // Prevent form submission
    }

    else if (!checkbox.checked) {
        email.classList.remove("error");
        email.style.border = "green solid 3px"; 
        checkbox.style.border = "red solid 1px"; 
        document.getElementById("label").classList.add("error");
        event.preventDefault(); // Prevent form submission
    }
    else{
        console.log("s")
        setFormData("Name", name.value, 5);
        setFormData("Email", email.value, 5);
        setCookie('exitIntentShown', true, 5);
    }
});