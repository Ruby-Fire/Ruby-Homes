import React from 'react';
import styled from 'styled-components';
import { signInWithEmailAndPassword, getAuth, } from 'firebase/auth';
import { initializeApp } from '@firebase/app';
import {toast} from  'react-toastify'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Illustration from "../Assets/login-illu.png";
import { Fade } from 'react-awesome-reveal';

const Container = styled.div`
    display: flex;
    height: 90vh;

form {
    display: flex;
    flex-direction: column;
    width: 70%;
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
`

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width : 400px;
    }
`

const FormContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData]= useState({
     Email:'',
     Password:''
    })
    const{Email,Password} = formData
 
    const onChange = (e)=>{
     setFormData((prevState)=>({
         ...prevState,
         [e.target.id]: e.target.value
     }))
    }
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
      const app = initializeApp(firebaseConfig)
    const onSubmit = async (e)=>{
        e.preventDefault();
        const auth = getAuth(app)
        try {
            await signInWithEmailAndPassword(auth, Email, Password)
            toast('Successful')
            navigate('/landlord')
        } catch (error) {
            toast.error(error.message)
        }
    }
  
  return (
    <Fade>
    <Container>
        <ImageContainer>
            <img src={Illustration} alt="" />
        </ImageContainer>
        <FormContainer>
        <form action=""  onSubmit={onSubmit}>
                <label>Email</label>
                <input type="text" id='Email' value={Email} onChange={onChange} />
                <label>Password</label>
                <input type="password" id='Password' value={Password} onChange={onChange} />
                <button>Sign In</button>
        </form>
        </FormContainer>
    </Container>
    </Fade>
  )
}

export default Login;