import styled from "styled-components";
import JokeContent from "./Components/JokeContent";

// Styling for home page content besides the joke api
const Section = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: left;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const P = styled.p`
  width: 30rem;
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px black solid;
  border-width: 50%;
  word-spacing: 2px;

  @media screen and (max-width: 1023px) {
    width: 70%;
    font-size: 1.1rem;
  }

  @media screen and (max-width: 360px) {
    width: 75%;
    font-size: 0.99rem;
  }
`;

const Home = () => {
  return (
    <Section>
      <P>
        About me - Hello my name Is Ege and this is my portfolio website. I am a
        19 years old student living in sweden. I like to code in different
        languages and framework, but I am still fairly new to some of them like
        javascript and react. This portfolio site is still work in progress.
      </P>
      <JokeContent />
    </Section>
  );
};

export default Home;
