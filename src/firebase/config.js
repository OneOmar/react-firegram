// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDC5_8Xy_ljByA7LMon44GNQBaIbOeCJs0",
    authDomain: "firegram-df0e1.firebaseapp.com",
    projectId: "firegram-df0e1",
    storageBucket: "firegram-df0e1.appspot.com",
    messagingSenderId: "851488398283",
    appId: "1:851488398283:web:ebd5dc520480623162f44e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// Initialize Storage (Create a root reference)
const storage = getStorage(app)
// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app)

export { storage, firestore }