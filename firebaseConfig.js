// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBBXTIXGe2EdrXe52J5OKPs2WCOB4Q5M5o",
    authDomain: "tryout4-5c1cd.firebaseapp.com",
    projectId: "tryout4-5c1cd",
    storageBucket: "tryout4-5c1cd.appspot.com",
    messagingSenderId: "744418089665",
    appId: "1:744418089665:web:cf66e02ac00ad47f659240",
    measurementId: "G-MBQTJPX2YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);