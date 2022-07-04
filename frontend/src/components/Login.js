import React from 'react';
import {auth,db} from "../firebase";
import { useNavigate } from "react-router-dom";
export const Login = () =>{
    const navigation = useNavigate()
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    return (
        <div>
        <h1>Welcome to the world of Geeks!</h1>
        <form>
            <label>Email:</label>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            <label>Password:</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        </form>
            <button onClick={()=>{
                auth.signInWithEmailAndPassword(email, password)
                .then(()=>{
                    db.collection('userNames').onSnapshot(snapshot=>{
                        snapshot.docs.forEach(doc=>{
                            if(doc.data().correo === email) {
                                console.log(doc.data().userName)
                                navigation('/Home', {userName: doc.data().userName})
                            }
                        })
                    })
                    })
                .catch(error=>{
                    console.log(error);
                    });
                }}>Sign In</button>
        </div>
    )
}


