import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user,setUser]=useState(null)
    const provider=new GoogleAuthProvider()

    const handleSignInGoogle=()=>{
         signInWithPopup (auth,provider)
         .then(result =>{
            // console.log(result.user)
            setUser(result.user)
            
         })
         .catch(error =>{
            console.log(error);
            
            setUser(null)
         })
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log('sign out done');
                setUser(null)
            
        })
        .catch(error =>console.log(error))
    }
    return (
        <div>
            
            
            
            {user ?
             <button onClick={handleSignOut}>sign out</button>:    
             <button onClick={handleSignInGoogle}>Sign in google</button>
        }
            {user && <div>
                <h2>name:{user.displayName}</h2>
                <h2>email:{user.email}</h2>
                </div>}
        </div>
    );
};

export default Login;