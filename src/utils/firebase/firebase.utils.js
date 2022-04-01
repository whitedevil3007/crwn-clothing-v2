import { initializeApp } from 'firebase/app';
 
import {
     getAuth ,
     signInWithRedirect,
      signInWithPopup , 
      GoogleAuthProvider,
    createUserWithEmailAndPassword } 
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
  export const signInWithGooglePopup = () => signInWithPopup
  (auth , provider);
  export const signInWithGoogleRedirect = () => signInWithRedirect
  (auth , provider)
  
  export const db = getFirestore();

  export const createUserDocumentFromAuth = async ( userAuth , additionalInformation = {displayName : "mike"} ) => { 

      if (!userAuth) return 
    
    const userDocRef = doc(db, 'users' , userAuth.uid );

      const userSnapshot =await getDoc(userDocRef);
  
  if(!userSnapshot.exists()) {
      const {displayName , email } = userAuth;
      const createdAt = new Date();
       
      try{
          await setDoc(userDocRef , {

            displayName,
            email,
            createdAt,
            ...additionalInformation

          });
        
      }catch (error){
console.log('error created', error.message);
      }
  }

return userDocRef ;

};

export const createAuthUserWithEmailAndPassword = async (email , password) =>{

  if (!email || !password) return ;


    createUserWithEmailAndPassword( auth , email , password)
};