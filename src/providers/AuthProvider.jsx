// import { createContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import app from "../firebase/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const createUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = (email, password) => {
//     setLoading(true);
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const logOut = () => {
//     setLoading(true);
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("current user", currentUser);
//       setLoading(false);
//     });
//     return () => {
//       return unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     loading,
//     createUser,
//     signIn,
//     logOut,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Creating Context
export const AuthContext = createContext(null);

const auth = getAuth(app);

// Google Provider
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // Declaring the states;
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  /*-----------------------------------------------------------
                Email/Password Authentication Provider
    --------------------------------------------------------------*/
  // Create user with email,password;
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Update user name and image;
  const userUpdate = (currentUser, displayName, photoURL) => {
    return updateProfile(currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  // Signin using Email & Password;
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  /*-----------------------------------------------------------
                End of Email/Password Authentication Provider
    --------------------------------------------------------------*/

  /*-----------------------------------------------------------
                Google Provider
    --------------------------------------------------------------*/
  // SignIn with Google Account
  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Signout for all user;
  const signOutGoogle = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  /*-----------------------------------------------------------
              End of  Google Provider
    --------------------------------------------------------------*/

  // Store the Signin user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  // All the components passed through this;
  const authInfo = {
    googleSignIn,
    signOutGoogle,
    createUser,
    userUpdate,
    userLogin,
    user,
    error,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
