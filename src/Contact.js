import styled from "styled-components";

// Styling for Contact page and its content

const H2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-top: 3rem;
`;

const Section = styled.section`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0rem 15rem;
  align-items: center;

  @media screen and (max-width: 1020px) {
    flex-direction: column;
    padding: 0rem 0rem;
  }
`;

const P = styled.p`
  color: black;
  font-size: 1.5rem;

  @media screen and (max-width: 1020px) {
    font-size: 1.35rem;
  }

  @media screen and (max-width: 360px) {
    font-size: 1.1rem;
    word-break: break-word;
    width: 80%;
  }

  > a {
    color: black;

    :hover {
      transition: 0.3s ease-in-out;
      color: #0c99ba;
    }
  }
`;

const GithubLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.4em;
  border: solid 2.1px black;
  padding: 0.5rem;
  border-radius: 20px;
  :hover {
    transition: 0.3s ease-in-out;
    background-color: black;
    color: #0c99ba;
  }

  @media screen and (max-width: 1020px) {
    font-size: 1.5rem;
  }
`;

// Contact page content, link to github
const Contact = () => {
  return (
    <>
      <H2>Email And Github</H2>
      <Section>
        <P>
          <a href="mailto:ege.ozakdemir@student.kyh.se">
            ege.ozakdemir@student.kyh.se
          </a>
        </P>
        <GithubLink href="https://github.com/Egeeoz" target="_blank">
          Github
        </GithubLink>
      </Section>
    </>
  );
};

export default Contact;
