import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVyca1Tlh9XV6BpEMyZXO0psgh4VFEpzM",
  authDomain: "labor-staffer.firebaseapp.com",
  projectId: "labor-staffer",
  storageBucket: "labor-staffer.appspot.com",
  messagingSenderId: "425064411960",
  appId: "1:425064411960:web:bbb65ea1ced20017a247cd",
  measurementId: "G-NVJCB40Q1G"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig)





export const loginWithGoogle = () => {
  
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

export const onAuthStateChanged = (onChange) => {
  
  return firebase
    .auth()
    .onAuthStateChanged(user => {
      const normalizedUser = mapUserFromFirebaseAuthToUser(user)
      onChange(normalizedUser)
      }) 
   
}

const mapUserFromFirebaseAuthToUser = (user) => {
  if(user!=null){
    const {displayName, email, photoURL } = user
    setPeople(displayName, email, photoURL)
     return {
    avatar: photoURL,
    username: displayName,
    email
  }

}}

export const logoutGoogle = ()=>{

 return firebase.auth().signOut()
  
}

const setPeople = (displayName, email, photoURL)=>{
  
  fetch(`${publicRuntimeConfig.API_URL}/candidates?email=${email}`)
  .then(response => response.json())
  .then(data =>{
    if (data.lenght=0){
      formData = new FormData()
      formData.append('name',displayName)
      formData.append('email',email)
      console.log(FormData)
      fetch(`${publicRuntimeConfig.API_URL}/candidates`,{
        method: 'POST',
        body:JSON.stringify(FormData)
      }).then(response =>response.json())
        .then(data =>console.log(data))       
    }
  } );
 
}

