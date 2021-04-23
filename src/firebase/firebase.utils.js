import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAGHHwektpBNTSUxc9b7P0IavAdlJrqFU8",
    authDomain: "deenify-store.firebaseapp.com",
    projectId: "deenify-store",
    storageBucket: "deenify-store.appspot.com",
    messagingSenderId: "625620511156",
    appId: "1:625620511156:web:7c53e2076b0ddb91c3eae1",
    measurementId: "G-Q5GWC443BV"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: ' select_account '})
  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase