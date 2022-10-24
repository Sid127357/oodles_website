

const firebaseConfig = {
  apiKey: "AIzaSyBrObgBmiD7yvkyaDJ90lhvVeOJewht1s4",
  authDomain: "oodles-website-598a5.firebaseapp.com",
  databaseURL: "https://oodles-website-598a5-default-rtdb.firebaseio.com",
  projectId: "oodles-website-598a5",
  storageBucket: "oodles-website-598a5.appspot.com",
  messagingSenderId: "883622850964",
  appId: "1:883622850964:web:746df6e9a00f914b5f9f81",
  measurementId: "G-TMP1KK9EPN"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Reference emailInfo collection
let emailInfo = firebase.database().ref("emails")
// import { collection } from "./firebase/firestore";
// const emailInfo = collection(db, 'emails');

// After clicking on subscribe
document.querySelector(".form-main-clss").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get input Values
  let email = document.querySelector(".email").value;
  console.log(email);

  saveEmailInfo(email);
  document.querySelector(".form-main-clss").reset();
}

// Save infos to Firebase
function saveEmailInfo(email) {
  let newEmailInfo = emailInfo.push();
  newEmailInfo.set({
    email: email
  });
}