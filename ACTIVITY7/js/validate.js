const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const bday = document.querySelector("#bday");
const gender = document.getElementsByName("gender");

const form = document.querySelector("#userForm");
form.addEventListener("submit", e => {
    e.preventDefault();
    if (validateInputs()) {
        console.log("Form submitted");
    }
});

const validateInputs = () => {
    let isValidInput = true;

    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const bdayValue = bday.value.trim();
    let isGenderChecked = false; 

    var genderIndex;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            isGenderChecked = true;
            genderIndex = i;
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
    if(!isGenderChecked) {
        setErrorFor(gender[0], "Please select your gender");
        isValidInput = false;
    } else {
        setSuccessFor(gender[0]);
    }

    return isValidInput;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const inputBox = formControl.querySelector("input");
    
    small.innerHTML = "<br>" + message;
    small.style.color = "red";
    small.style.fontWeight = "bold";
    inputBox.style.borderColor = "#ff3860";
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const inputBox = formControl.querySelector("input");

    small.innerHTML = "";
    inputBox.style.borderColor = "#09c372"
}