import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAnX5SXT4zQpX2syXTpZQRPJBV_0-N9TbI",
  authDomain: "boukh-portfolio.firebaseapp.com",
  projectId: "boukh-portfolio",
  storageBucket: "boukh-portfolio.appspot.com",
  messagingSenderId: "933805845890",
  appId: "1:933805845890:web:f9a5914ab1abed4c44b39b"
};
initializeApp(firebaseConfig);

const db = getFirestore()

const colRef = collection(db, 'messages')

const contactForm = document.querySelector(".contact__form")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const submitBtn = document.querySelector(".contact__btn")
  const btnOriginalColor = submitBtn.style.backgroundColor

  submitBtn.style.backgroundColor = "gray"
  submitBtn.disabled = true
  submitBtn.textContent = "Submitting..."
  contactForm.name.disabled = true
  contactForm.email.disabled = true
  contactForm.message.disabled = true

  addDoc(colRef, {
    name: contactForm.name.value,
    email: contactForm.email.value,
    message: contactForm.message.value,
    createdAt: serverTimestamp()
  })
  .then(() => {
    contactForm.reset()
    contactForm.name.disabled = false
    contactForm.email.disabled = false
    contactForm.message.disabled = false
    submitBtn.style.backgroundColor = btnOriginalColor
    submitBtn.disabled = false
    submitBtn.textContent = "Submit"
    location.href = "./#open-modal"
   })
})

export default function fetchDocs() {
  return getDocs(colRef)
    .then((snapshot) => {
      const docs = snapshot.docs
      return docs
    })
}