// Listen for form submit
document.getElementById('contat_form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefult();

    console.log(123);


// Get values
var name = getInputVal('contactName');
var reason = getInputVal('contactReason');
var email = getInputVal('contactEmail');
var message = getInputVal('contactMessage');

console.log(name, reason, email, message)
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}