// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCrLO4hwIXQxSBFcaXzuLmUL5Uan9Sfe0",
  authDomain: "usiu-africa-vms.firebaseapp.com",
  projectId: "usiu-africa-vms",
  storageBucket: "usiu-africa-vms.firebasestorage.app",
  messagingSenderId: "93395905403",
  appId: "1:93395905403:web:d4ef99b98294aed7dbebde",
  measurementId: "G-SJE3FB1ZW6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Step 2: Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Step 3: Reference the database
const db = firebase.database();

// Step 4: Function to register a new visitor
function registerVisitor() {
  const name = document.getElementById("visitorName").value;
  const phone = document.getElementById("visitorPhone").value;
  const purpose = document.getElementById("visitorPurpose").value;
  const timeIn = new Date().toLocaleString();

  if (name === "" || phone === "" || purpose === "") {
    alert("Please fill all fields!");
    return;
  }

  // Create a unique ID for each visitor
  const newVisitorRef = db.ref("visitors").push();

  newVisitorRef.set({
    name: name,
    phone: phone,
    purpose: purpose,
    timeIn: timeIn
  })
  .then(() => {
    alert("Visitor registered successfully!");
    document.getElementById("visitorForm").reset();
  })
  .catch((error) => {
    console.error("Error saving data: ", error);
  });
}

// Step 5: Function to fetch visitor records
function loadVisitors() {
  const visitorsTable = document.getElementById("visitorsTable");
  db.ref("visitors").on("value", (snapshot) => {
    visitorsTable.innerHTML = "";
    snapshot.forEach((childSnapshot) => {
      const visitor = childSnapshot.val();
      const row = `
        <tr>
          <td>${visitor.name}</td>
          <td>${visitor.phone}</td>
          <td>${visitor.purpose}</td>
          <td>${visitor.timeIn}</td>
        </tr>
      `;
      visitorsTable.innerHTML += row;
    });
  });
}

// Load data when the page starts
window.onload = loadVisitors;

