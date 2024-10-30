import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAi65hda7gc2mAem80hfopawJhICtrASJs",
    authDomain: "mymoney-aaf7a.firebaseapp.com",
    projectId: "mymoney-aaf7a",
    storageBucket: "mymoney-aaf7a.appspot.com",
    messagingSenderId: "717409395226",
    appId: "1:717409395226:web:db02831e6c75df856567a3"
  }
// init firebase 

firebase.initializeApp(firebaseConfig)

// init service

const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }