// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrbMq6afyJG0xxQsGV2CB_9cvDDA7vL2A",
  authDomain: "ntut-web-by-108590004-001.firebaseapp.com",
  databaseURL: "https://ntut-web-by-108590004-001-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ntut-web-by-108590004-001",
  storageBucket: "ntut-web-by-108590004-001.appspot.com",
  messagingSenderId: "910638699225",
  appId: "1:910638699225:web:f2801a40689598d92a24c8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
