// require('dotenv').config()
// import { dotenv } from "dotenv"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from  'firebase/firestore'

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

export default function fetchDocs() {
  return getDocs(colRef)
    .then((snapshot) => {
      const docs = snapshot.docs
      return docs
    })
}