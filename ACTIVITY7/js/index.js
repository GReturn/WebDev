// this is to test if the external js file has been successfully connected to index.html
console.log("Successfully connection between JS and HTML");
// var rowCounter = 0;

// function used to submit the form values
function submitForm(event) {
    event.preventDefault();

    if (validateInputs()) {
        console.log("Form submitted!");
        var userData = {
            firstName: document.getElementById("firstname").value,
            lastName: document.getElementById("lastname").value,
            gender: (function() {
                var genderInputs = document.getElementsByName("gender");
                
                for (var i = 0; i < genderInputs.length; i++) {
                    if (genderInputs[i].checked) {
                        return genderInputs[i].value;
                    }
                }
            })(),
            bday: document.getElementById("bday").value
        }
        addRowToTable(userData);
    }

}

// Function to reset form values
function resetForm(event) {
    event.preventDefault();
    console.log("Form cancelled!");
    document.getElementById("userForm").reset();

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const bday = document.querySelector("#bday");
    const genderInputs = document.querySelectorAll('input[name="gender"]');

    resetFormComponent(firstname);
    resetFormComponent(lastname);
    resetFormComponent(bday);
    genderInputs.forEach(input => {
        resetFormComponent(input);
    });

}
function resetFormComponent(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    const inputBox = formControl.querySelector("input");

    small.innerHTML = "";
    inputBox.style.borderColor = null;
}

// function to dynamically add table rows
function addRowToTable(userData) {
    var table = document.getElementById("userTable");
    var tbody = table.querySelector("tbody");
    var row = tbody.insertRow();

    var cellFirstName = row.insertCell(0);
    var cellLastName = row.insertCell(1);
    var cellGender = row.insertCell(2);
    var cellBday = row.insertCell(3);

    cellFirstName.innerHTML = userData.firstName;
    cellLastName.innerHTML = userData.lastName;
    cellGender.innerHTML = userData.gender;
    cellBday.innerHTML = userData.bday;

    // if (rowCounter % 2 === 0) {
    //     row.style.backgroundColor = "#FE5D26";
    // } else {
    //     row.style.backgroundColor = "#F2C078";
    // }

    // rowCounter++;
}
