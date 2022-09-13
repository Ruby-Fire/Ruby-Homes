import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

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
    return ( 
        <Fade direction="left">
        <Container>
            <form action="post">
                <h1>Sign Up</h1>
                <label>First Name</label>
                <input type="text" />

                <label>Last Name</label>
                <input type="text" />

                <label>Username</label>
                <input type="text" />

                <label>Gender</label>
                <input type="text" />

                <label>Phone No.</label>
                <input type="text" />

                <button>Sign Up</button>
            </form>
        </Container>
        </Fade>
     );
}
 
export default Register;