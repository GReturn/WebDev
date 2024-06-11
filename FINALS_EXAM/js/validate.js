console.log("Successful connection between JS and HTML");

const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const bday = document.querySelector("#birthday");
const sex = document.getElementsByName("sex");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

const form = document.querySelector("#registrationForm");
form.addEventListener("submit", e => {
    e.preventDefault();

    if (validateInputs()) {
        console.log("Form submitted");
        form.submit(); 
    }
});

const validateInputs = () => {
    let isValidInput = true;

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const bdayValue = bday.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmpasswordValue = confirmpassword.value.trim();
    
    let isSexChecked = false; 
    for (var i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            isSexChecked = true;
            break;
        }
    }

    if(firstnameValue === "") {
        setErrorFor(firstname, "Please enter your first name");
        isValidInput = false;
    } else {
        setSuccessFor(firstname);
    }

    if(lastnameValue === "") {
        setErrorFor(lastname, "Please enter your last name");
        isValidInput = false;
    } else {
        setSuccessFor(lastname);
    }

    if(bdayValue === "") {
        setErrorFor(bday, "Please enter your birthday");
        isValidInput = false;
    } else {
        setSuccessFor(bday);
    }

    if(!isSexChecked) {
        setErrorFor(sex[0].parentElement, "Please select your sex");
        isValidInput = false;
    } else {
        setSuccessFor(sex[0].parentElement);
    }

    if(emailValue === "") {
        setErrorFor(email, "Please enter your email");
        isValidInput = false;
    } else if (!isValidEmail(emailValue)) {
        setErrorFor(email, "Please enter a valid email address");
        isValidInput = false;
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === "") {
        setErrorFor(password, "Please enter your password");
        isValidInput = false;
    } else {
        setSuccessFor(password);
    }
    
    if(confirmpasswordValue === "") {
        setErrorFor(confirmpassword, "Please confirm your password");
        isValidInput = false;
    } else if(confirmpasswordValue !== passwordValue) {
        setErrorFor(confirmpassword, "Passwords do not match");
        isValidInput = false;
    } else {
        setSuccessFor(confirmpassword);
    }

    return isValidInput;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const inputBox = formControl.querySelector("input") || formControl.querySelector("fieldset");

    small.innerHTML = message;
    small.style.color = "#FA7947";
    small.style.fontWeight = "bold";
    if (inputBox) {
        inputBox.style.borderColor = "#FA7947";
    }
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const inputBox = formControl.querySelector("input") || formControl.querySelector("fieldset");

    small.innerHTML = "";
    if (inputBox) {
        inputBox.style.borderColor = "#09c372";
    }
}

function isValidEmail(email) {
    const regex = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\.,;:\s@"]+\.)+[^<>()\[\]\.,;:\s@"]{2,})$/i;
    return regex.test(String(email).toLowerCase());
}