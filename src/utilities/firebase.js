import firebase from 'firebase/app'
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyB2Y9lVC6bKV1oZq-QDqNQApUQrJvgQsEI",
  authDomain: "vue-crud-56d9f.firebaseapp.com",
  databaseURL: "https://vue-crud-56d9f.firebaseio.com",
  projectId: "vue-crud-56d9f",
  storageBucket: "vue-crud-56d9f.appspot.com",
  messagingSenderId: "210763051175",
  appId: "1:210763051175:web:7e079d0b64ed9a88f9ab82",
  measurementId: "G-2HCF4WG0MG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
