// Initialize Firebase
var config = {
apiKey: "AIzaSyAAj37ve6pSzUlp9Nxy9fACcqhr_4Qsqkk",
authDomain: "contactform-a6e51.firebaseapp.com",
databaseURL: "https://contactform-a6e51.firebaseio.com",
projectId: "contactform-a6e51",
storageBucket: "",
messagingSenderId: "176147172593"
};
firebase.initializeApp(config);

// Referance messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);      

// submit form
function submitForm(e){
    e.preventDefault();

// Get values
var name = getInputVal('contactName');
var subject = getInputVal('contactSubject');
var phone = getInputVal('contactPhone');
var email = getInputVal('contactEmail');
var message = getInputVal('contactMessage');

// save message
saveMessage(name, subject, phone, email, message);


// Show alert
document.querySelector('.alert').style.display = 'block';

// Hide alert after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000)

// Clear form entries
return document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
 }

// Save message to firebase
function saveMessage(name, subject, phone, email, message){
var newMessageRef = messagesRef.push();
newMessageRef.set({
    name: name,
    subject: subject,
    phone: phone,
    email: email,
    message: message,
});
}