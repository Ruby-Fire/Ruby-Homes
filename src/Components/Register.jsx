import styled from "styled-components";
import { useState } from "react";
import { initializeApp } from "@firebase/app";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { toast } from 'react-toastify';
import { Fade } from "react-awesome-reveal";
import 'react-toastify/dist/ReactToastify.css';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    form {
        // border: 2px solid orange;
        display: flex;
        flex-direction: column;
        width: 30vw;
        margin: auto;
        padding: 2rem;

        label {
            font-weight: 600;
            font-size: 1.1rem;
            margin-top: 2rem;
            
        }

        input {
            border: none;
            border-bottom: 1px solid;
            // margin-top: 1rem;
            padding: 10px;
            outline: none;
        }

        button {
            width: 25%;
            padding: 7px;
            margin: auto;
            margin-top: 1.5rem;
            font-weight: 600;
            background: none;
            cursor: pointer;
        }
    }
`

const Register = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyA3BCnL7a3LyvMnwnjI3Bzigx9VGAkVHG0",
        authDomain: "ruby-homes.firebaseapp.com",
        databaseURL:'https://ruby-homes-default-rtdb.firebaseio.com',
        projectId: "ruby-homes",
        storageBucket: "ruby-homes.appspot.com",
        messagingSenderId: "34198362160",
        appId: "1:34198362160:web:d34b554e6b7ebda675b5f5",
        measurementId: "G-WG63H1601B"
      };

      const navigate = useNavigate()
   const [formData, setFormData]= useState({
    fullName:'',
    Email:'',
    Username:'',
    Telephone: '',
    Password:''
   })
   const{fullName, Email, Username, Telephone, Password} = formData

   const onChange = (e)=>{
    setFormData((prevState)=>({
        ...prevState,
        [e.target.id]: e.target.value
    }))
   }
 
   const app = initializeApp(firebaseConfig)

   const onSubmit = async (e)=>{
    e.preventDefault()
    try {
        const auth = getAuth(app)
        const userCredential = await createUserWithEmailAndPassword(auth, Email, Password)
        const user = userCredential.user

        await fetch('https://ruby-homes-default-rtdb.firebaseio.com/user.json', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                user, fullName, Telephone
            })
        })
        toast('successful')
        navigate('/landlord')
    } catch (error) {
        console.log(error.message)
        toast.error(error.message)
        
    }
   }
    return ( 
        <Fade direction="right">
        <Container>
            <form action="post" onSubmit={onSubmit} >
                <h1>Sign Up</h1>

                <label>Full Name</label>
                <input type="text" id="fullName" value={fullName} onChange={onChange}/>
                <label>Email</label>
                <input type="text" id="Email" value={Email} onChange={onChange} />
                <label>Username</label>
                <input type="text"id="Username" value={Username} onChange={onChange} />
                <label>Password</label>
                <input type="password"id="Password" value={Password} onChange={onChange} />
                <label>Telephone</label>
                <input type="text" placeholder="+234" id="Telephone" value={Telephone} onChange={onChange} />

               
                <button>Sign Up</button>
            </form>
        </Container>
        </Fade>
     );
}
 
export default Register;