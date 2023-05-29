import { useAuth0 } from "@auth0/auth0-react";

import styled from "styled-components";

const Thankyou = () =>{
    const { isAuthenticated, user } = useAuth0();

    const Wrapper = styled.section`
     
      .wrapper {
    margin-left: 10%;
    margin-right:10%;
    justify-content: center;
    font-family: "Arimo";
    background-color:#F9F5F6;
    -webkit-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    -moz-box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    box-shadow: 9px 13px 25px 0px rgba(0, 0, 0, 0.18);
    animation: slideUp 1000ms ease;
}

@keyframes slideUp {
    0% {
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        visibility: visible;
    }

    100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);

    }
}
.bookh {
    padding-top:5%;
    text-align: center;
    padding-bottom:2%;
    font-weight: bold;
  }
  .bookho{
   
    text-align: center;
    padding-bottom:4%;
    font-weight: bold;
  }
      
      
    `;
  
    return (
      <Wrapper>
       <div class="wrapper">
        <h2 class="bookh">Thankyou for Shopping with Us!!!
       </h2>
       <h3 class="bookho">{isAuthenticated ? user.name : ""}</h3>
        <img
          src="https://content.wepik.com/statics/1453850/thank-you-label-10330820page1.jpg"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></img>
  
        </div>
      </Wrapper>
    );
  };
  
export default Thankyou;
