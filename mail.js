const firebaseConfig = {
  apiKey: "AIzaSyCipT4pKgQcVTWjYCNQcYJhO4TBg6Lag-I",
  authDomain: "contact-form-using-fireb-98f64.firebaseapp.com",
  databaseURL: "https://contact-form-using-fireb-98f64-default-rtdb.firebaseio.com",
  projectId: "contact-form-using-fireb-98f64",
  storageBucket: "contact-form-using-fireb-98f64.appspot.com",
  messagingSenderId: "266693872034",
  appId: "1:266693872034:web:bfbfb66e6b88b342dd8afb",
  measurementId: "G-04SDTE7F47"
};
// initialize firebase copied from the firebase
firebase.initializeApp(firebaseConfig);  //initializing the firebase cofiguration

// reference your database  
// giving the reference to the database so that it will connect to DB
var contactFormDB = firebase.database().ref("Contact-Form-Using-Firebase"); // it will create the database as it is showing null in realtime database
// if database is not available it will create it
document.getElementById("contactForm").addEventListener("submit", submitForm);  //add event listener for performing action on clicking the button

function submitForm(e) {   //e for preventing the default event in the input sections
  e.preventDefault();  //default state maintain karasathi which is empty initially

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  // console.log(name,emailid,msgContent);
  saveMessages(name, emailid, msgContent);
// pushing values into the database
  //enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
