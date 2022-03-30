import { initializeApp } from 'firebase/app';
 
import {
     getAuth ,
    //  signInWithRedirect,
      signInWithPopup , 
      GoogleAuthProvider } 
      from 'firebase/auth';

import  {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'



const firebaseConfig = {
    apiKey: "AIzaSyDp0Jrhdhg5YRQ5_xrO4-Q9roceUdAJXeo",
    authDomain: "moon-clothing-db.firebaseapp.com",
    projectId: "moon-clothing-db",
    storageBucket: "moon-clothing-db.appspot.com",
    messagingSenderId: "1084401389020",
    appId: "1:1084401389020:web:fa0565605137af1f735319"
  };
  
 
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt : "select_account",
  })


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth , provider);

  export const db = getFirestore()

  export const createUserDocumentFromAuth = async (userAuth) => {
      const userDocRef = doc(db, 'users' , userAuth.uid );

      console.log(userDocRef);

      const userSnapshot =await getDoc(userDocRef);
      console.log(userSnapshot);
      console.log(userSnapshot.exists() );

  if(!userSnapshot.exists()) {
      const {displayName , email } = userAuth;
      const createdAt = new Date();
       
      try{
          await setDoc(userDocRef , {

            displayName,
            email,
            createdAt,

          });
        
      }catch (error){
console.log('error created', error.message);
      }
  }

return userDocRef ;

};
