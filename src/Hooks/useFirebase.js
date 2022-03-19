import initializeAuthentication from "../Firebase/firebase.initialize";
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const auth=getAuth();
const googleProvider=new GoogleAuthProvider();
const facebookProvider=new FacebookAuthProvider();

const useFirebase=()=>{
    const [user,setUser]=useState(null);

    const signInUsingGoogle=()=>{

        signInWithPopup(auth,googleProvider)
        

    }

    const signInUsingFacebook=()=>{
    
        signInWithPopup(auth,facebookProvider)
        .then(result=>{
            const loggedInUser=result.user;
            console.log(loggedInUser);
            setUser(loggedInUser);
        }).catch(error=>{
            console.log(error.message);
        })

    }

    const registerUsingPassword=(email,password)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user=result.user;
            setUser(user);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user);
            }else{
                setUser(null);
            }
            return () => unsubscribe;
        })
    },[])

   const logOut=()=>{
    signOut(auth).then(() => {
        setUser(null)
      }).catch((error) => {
        console.log(error.message);
      });
   }

   return {signInUsingGoogle,user,setUser,signInUsingFacebook,logOut,registerUsingPassword};

}

export default useFirebase;