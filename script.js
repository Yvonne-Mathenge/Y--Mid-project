// Import Firebase SDKs (v10+ modular)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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
const db = getFirestore(app);

// Firestore collections
const visitorsCol = collection(db, "visitors");

// Elements
const form = document.getElementById("checkin-form");
const visitorList = document.getElementById("visitor-list");

// Function to render visitor rows
function renderVisitor(id, data) {
  const tr = document.createElement("tr");
  const checkedOut = data.checkedOutAt ? data.checkedOutAt : "—";

  tr.innerHTML = `
    <td>${data.fullName}</td>
    <td>${data.host}</td>
    <td>${data.purpose}</td>
    <td>${data.checkedInAt}</td>
    <td>
      ${
        data.checkedOutAt
          ? checkedOut
          : `<button onclick="checkOutVisitor('${id}')">Check Out</button>`
      }
    </td>
  `;
  return tr;
}

// Real-time listener (auto-updates the table)
onSnapshot(visitorsCol, (snapshot) => {
  visitorList.innerHTML = "";
  snapshot.forEach((docSnap) => {
    const data = docSnap.data();
    visitorList.appendChild(renderVisitor(docSnap.id, data));
  });
});

// Add new visitor
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const visitor = {
    fullName: document.getElementById("fullname").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    company: document.getElementById("company").value,
    host: document.getElementById("host").value,
    purpose: document.getElementById("purpose").value,
    checkedInAt: new Date().toLocaleString(),
    checkedOutAt: null
  };

  await addDoc(visitorsCol, visitor);
  form.reset();
});

// Check out a visitor
window.checkOutVisitor = async function (id) {
  const ref = doc(db, "visitors", id);
  await updateDoc(ref, { checkedOutAt: new Date().toLocaleString() });
  alert("Visitor checked out successfully!");
};
