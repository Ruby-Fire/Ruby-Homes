import styled from "styled-components";

const Footer = () => {

    const Container = styled.div`
        background-color: #0d1723;
        color : white;
        display: flex;
        padding: 3rem;
    `
    const About = styled.div`
        flex: 3;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1rem;

        p {
            font-size: 13px;
            line-height: 1.5rem;
        }
    `

    const List = styled.ul`
        margin: 1rem;
        flex: 1;

        .head {
            font-weight: 700;
            font-size: 15px;
        }

        li {
            margin: 1rem;
            list-style: none;
            font-size: 12px;
        }
    `

    return ( 
        <Container>

            <About>
                <h1>RubyRealty.</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, tenetur nam explicabo similique necessitatibus maiores.</p>
            </About>
            
            <List>
                <li className="head">Explore</li>
                <li>Buy a Home</li>
                <li>Sell a Home</li>
                <li>Rent a Home</li>
            </List>

            <List>
                <li className="head">Resources</li>
                <li>About Us</li>
                <li>FAQs</li>
                <li>Blog</li>
            </List>

            <List>
                <li className="head">Contact</li>
                <li>26-78-3456</li>
                <li>hello@rubyrealty.com</li>
            </List>
        </Container>
     );
}
 
export default Footer;