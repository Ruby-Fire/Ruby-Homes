import styled from "styled-components";

const Steps = () => {

    const Container = styled.div`
        min-height: 70vh;
        text-align: center;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ccc;

        h5 {
            margin-bottom: 1.5rem;
        }
    `
    const Steps = styled.div`
        margin: 1rem;
        gap: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;

        h2 {
            padding: 20px;
            color: white;
            background: orange;
        }

        div {
            text-align: left;

            h3 {
                font-size: 1.5rem;
            }

            p {
                width: 20rem;
                font-size: 12px;
                font-weight: 500;
            }
        }
    `

    return ( 
        <Container>
            <h1>How RubyRealty Works</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, corrupti lupti woopty.</h5>
            <Steps>
            <h2>01</h2>
            <div>
                <h3>Find a perfect bla bla bla bla</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo nostrum commodi unde ipsam fugiat?</p>
            </div>
            </Steps>

            <Steps>
            <h2>02</h2>
            <div>
                <h3>Find a perfect bla bla bla bla</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo nostrum commodi unde ipsam fugiat?</p>
            </div>
            </Steps>

            <Steps>
            <h2>03</h2>
            <div>
                <h3>Find a perfect bla bla bla bla</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium explicabo nostrum commodi unde ipsam fugiat?</p>
            </div>
            </Steps>
        </Container>
     );
}
 
export default Steps;