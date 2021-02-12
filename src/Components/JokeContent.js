import styled from "styled-components";
import useFetch from "./useFetch";

// Styling for joke api content on home page
const H3 = styled.h3`
  font-weight: 500;
`;

const Hr = styled.hr`
  border: none;
  height: 1px;
  background-color: black;
`;

const JokeCont = styled.div`
  width: 30rem;
  word-wrap: normal;
  font-size: 1.4rem;

  @media screen and (max-width: 1020px) {
    width: 70%;
    font-size: 1.15rem;
  }

  @media screen and (max-width: 330px) {
    width: 75%;
    font-size: 0.99rem;
  }
`;

const Button = styled.button`
  margin-top: 0.2rem;
  font-size: 1.1rem;
  font-weight: 500;
  background: none;
  padding: 0.25rem;
  border: solid 1.8px black;
  border-radius: 10px;
  cursor: pointer;

  @media screen and (max-width: 330px) {
    font-size: 0.95rem;
  }

  &:hover {
    color: #0c99ba;
    background-color: black;
    transition: 0.2s ease-in-out;
  }
`;

// Fetching joke api data, error if there is one, and loading message from Usefetch.js

const JokeContent = () => {
  const {
    data: joke,
    isLoading,
    setIsLoading,
    error,
    reloadJoke,
    setReloadJoke,
  } = useFetch("https://official-joke-api.appspot.com/random_joke");

  return (
    <JokeCont>
      <H3>Want to hear a joke?</H3>
      <br />
      <div>
        {/* Inserting fetched data from joke api */}
        {error && <p> {error} </p>}
        {isLoading && <p>Loading in joke...</p>}
        {isLoading || joke.setup} <Hr /> {isLoading || joke.punchline}
      </div>
      {/* Button to get a new joke */}
      <Button
        onClick={() => {
          setIsLoading(true);
          setReloadJoke(!reloadJoke);
        }}
      >
        Press here to get a new joke
      </Button>
    </JokeCont>
  );
};

export default JokeContent;
