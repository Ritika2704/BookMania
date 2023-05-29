import AboutHeroSection from "./components/AboutHeroSection";
import { useProductContext } from "./context/productcontex";
import styled from "styled-components";
const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "from BookMania",
  };
  const Wrapper = styled.section`
  .bookh {
    padding-top:5%;
    text-align: center;
    padding-bottom:4%;
    font-weight: bold;
  }
  .bookpa {
    padding-left:5%;
    padding-right:5%;
    text-align: center;
    justify-content:center;
    line-height: 3rem;
    padding-bottom:10%;
  }
  
  .wrapper {
    margin-left: 10%;
    margin-right:10%;
    justify-content: center;
    font-family: "Arimo";
    background-color:#D9D7F1;
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

  `;
  return (
    <Wrapper>
    <>
      {myName}
      <AboutHeroSection myData={data} />
    </>
    <div class="wrapper">
    <h2 class="bookh"> About </h2>
 
    <p class="bookpa">
    Welcome to BookMania, a haven for book enthusiasts everywhere! Our mission is to provide readers with an exceptional experience by offering a diverse selection of books across various genres.

At BookMania, we believe that every reader deserves to find their perfect book match. That's why we offer insights and recommendations about different genres to help readers explore new and exciting books. 

We are passionate about books and are committed to promoting a love of reading. We want to create a community where readers can come together to share their thoughts and recommendations, and discover new and exciting books together.

So, whether you're a seasoned reader or just starting your reading journey, BookMania has something for everyone. We hope to inspire and ignite your passion for books with our exceptional selection of titles, knowledgeable staff, and unparalleled customer service.

<br></br>This website, your ultimate destination to discover and explore different book genres. Here, we provide valuable insights and recommendations about various genres to help you find your next favorite read.

Our experts have curated a diverse selection of books, ranging from mystery and romance to science fiction and historical fiction. Whether you're a fan of classic literature or new releases, our Explore section has something for everyone.

In this section, you'll find detailed information about different genres and Our aim is to help you navigate the vast world of books and find titles that align with your reading interests.

So, if you're looking to expand your reading horizons or just want to explore different genres, the Explore section of our website is the perfect place to start. Start browsing today and let us help you discover your next great read.
<br></br> BookMania is a website, where every book lover is in for a treat! We offer a never-ending collection of books across multiple genres, providing you with endless opportunities to discover your next favorite read.

Whether you're into thrillers, romance, sci-fi, or non-fiction, we have something for everyone. Our explore section provide valuable insights and recommendations to help you explore new genres and find your perfect book match.

So, join us on this literary journey and embark on a reading adventure that will take you to new worlds and unimaginable heights. Start browsing now and let the magic of books ignite your imagination!
</p>

</div>
    </Wrapper>
  );
};

export default About;
