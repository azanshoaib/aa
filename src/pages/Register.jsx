import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Register = () => {
  const [err, setErr] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = async (e) => {
    console.log("called",e.target)
    
    e.preventDefault();
    setLoading(true);
    //  const displayName = e.target[0].value;
    // const email = e.target[1].value;
    // const password = e.target[2].value;
    //  const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      // const storageRef = ref(storage, `${name + date}`);

      // await uploadBytesResumable(storageRef, file).then(() => {
      //   getDownloadURL(storageRef).then(async (downloadURL) => {
      //     try {
      //       //Update profile


      //       //create empty user chats on firestore
      //       await setDoc(doc(db, "userChats", res.user.uid), {});
      //     } catch (err) {
      //       console.log(err);
      //       setErr(true);
      //       setLoading(false);
      //     }
      //   });
      // });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Product Hunting</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
          <input required type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input required type="password" placeholder="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
         
          <button >Sign up</button>
          
          {loading}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
