import styled from "styled-components";

const Reviews = () => {

    const Container = styled.div`
        text-align: center;
        background-color: #0d1723;
        color: white;
        padding: 2rem;
        

        .review-section {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 1rem;
        }
    `

    const Review = styled.div`
        width: 27%;
        display: flex;
        padding: .8rem;
        gap: .7rem;
        margin: 1rem;
        background: white;
        color: black;
        

        img {
            border: 1px solid ;
            width: 15rem;
        }

        div {
            text-align: left;
        }

        p {
            font-size: 10px;
            line-height: 1.2rem;
            margin-top: 13px;
        }
    `

    return ( 
        <Container>
            <h1>RubyRealty has helped thousands of happy people</h1>
            <p>Lorem ipsum dolor sit amet consectetur, elit. Mollitia, delectus error. Libero.</p>
            <div className="review-section">
                <Review>
                    <img src="" alt="" />
                    <div>
                        <h4>Bojack Horseman</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur elit. Consectetur, soluta. Ex asperiores 
                             laudantium illo iure </p>
                    </div>
                </Review>

                <Review>
                    <img src="" alt="" />
                    <div>
                        <h4>Bojack Horseman</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur elit. Consectetur, soluta. Ex asperiores 
                             laudantium illo iure </p>
                    </div>
                </Review>

                <Review>
                    <img src="" alt="" />
                    <div>
                        <h4>Bojack Horseman</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur elit. Consectetur, soluta. Ex asperiores 
                             laudantium illo iure </p>
                    </div>
                </Review>

                <Review>
                    <img src="" alt="" />
                    <div>
                        <h4>Bojack Horseman</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur elit. Consectetur, soluta. Ex asperiores 
                             laudantium illo iure </p>
                    </div>
                </Review>

                <Review>
                    <img src="" alt="" />
                    <div>
                        <h4>Bojack Horseman</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur elit. Consectetur, soluta. Ex asperiores 
                             laudantium illo iure </p>
                    </div>
                </Review>

                <Review>
                    <img src="" alt="" />
                    <div>
                        <h4>Bojack Horseman</h4>
                        <p>Lorem, ipsum dolor sit amet consectetur elit. Consectetur, soluta. Ex asperiores 
                             laudantium illo iure </p>
                    </div>
                </Review>



            </div>
        </Container>
     );
}
 
export default Reviews;