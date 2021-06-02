import firebase from 'firebase/app'
import "firebase/auth"
import 'firebase/database'
import 'firebase/firestore'
import { ref, onUnmounted } from 'vue'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_FIREBASE_APPID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENTID,
}
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const fs = firebase.firestore();
const todosCollection = fs.collection('todos')

export const chatsRef = db.ref('chats')

export default firebase;

export const createTodo = todo => {
  return todosCollection.add(todo)
}

export const getTodo = async id => {
  const todo = await todosCollection.doc(id).get()
  return todo.exists ? todo.data() : null
}

export const updateTodo = (id, todo) => {
  return todosCollection.doc(id).update(todo)
}

export const deleteTodo = id => {
  return todosCollection.doc(id).delete()
}

export const useLoadTodos = () => {
  const todos = ref([])
  const close = todosCollection.onSnapshot((snapshot) => {
    todos.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close)
  return todos
}
