import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <section className="showbtn relative flex items-center justify-center">
      <StyledWrapper>
        <button className="hover:cursor-pointer">
          <Link to={`/underdeveloped`}>
            <span>View more</span>
          </Link>
        </button>
      </StyledWrapper>
    </section>
  );
};

const StyledWrapper = styled.div`
  button {
    --fs: 1.25em;
    --col1: honeydew;
    --col2: rgba(240, 128, 128, 0.603);
    --col3: indianred;
    --col4: maroon;
    --col5: black;
    --pd: 0.5em 0.65em;
    display: grid;
    align-content: baseline;
    appearance: none;
    border: 0;
    grid-template-columns: min-content 1fr;
    padding: var(--pd);
    font-size: var(--fs);
    color: var(--col1);
    background-color: var(--col3);
    border-radius: 6px;
    text-shadow: 1px 1px var(--col4);
    box-shadow: inset -2px 1px 1px var(--col2), inset 2px 1px 1px var(--col2);
    position: relative;
    transition: all 0.75s ease-out;
    transform-origin: center;
  }

  button:hover {
    color: var(--col4);
    box-shadow: inset -2px 1px 1px var(--col2), inset 2px 1px 1px var(--col2),
      inset 0px -2px 20px var(--col4), 0px 20px 30px var(--col3),
      0px -20px 30px var(--col2), 1px 2px 20px var(--col4);
    text-shadow: 1px 1px var(--col2);
  }

  button:active {
    animation: offset 1s ease-in-out infinite;
    outline: 2px solid var(--col2);
    outline-offset: 0;
  }

  button::after,
  button::before {
    content: "";
    align-self: center;
    justify-self: center;
    height: 0.5em;
    margin: 0 0.5em;
    grid-column: 1;
    grid-row: 1;
    opacity: 1;
  }

  button::after {
    position: relative;
    border: 2px solid var(--col5);
    border-radius: 50%;
    transition: all 0.5s ease-out;
    height: 0.1em;
    width: 0.1em;
  }

  button:hover::after {
    border: 2px solid var(--col3);
    transform: rotate(-120deg) translate(10%, 140%);
  }

  button::before {
    border-radius: 50% 0%;
    border: 4px solid var(--col4);
    box-shadow: inset 1px 1px var(--col2);
    transition: all 1s ease-out;
    transform: rotate(45deg);
    height: 0.45em;
    width: 0.45em;
  }

  button:hover::before {
    border-radius: 50%;
    border: 4px solid var(--col1);
    transform: scale(1.25) rotate(0deg);
    animation: blink 1.5s ease-out 1s infinite alternate;
  }

  button:hover > span {
    filter: contrast(150%);
  }

  @keyframes blink {
    0% {
      transform: scale(1, 1) skewX(0deg);
      opacity: 1;
    }

    5% {
      transform: scale(1.5, 0.1) skewX(10deg);
      opacity: 0.5;
    }

    10%,
    35% {
      transform: scale(1, 1) skewX(0deg);
      opacity: 1;
    }

    40% {
      transform: scale(1.5, 0.1) skewX(10deg);
      opacity: 0.25;
    }

    45%,
    100% {
      transform: scale(1, 1) skewX(0deg);
      opacity: 1;
    }
  }

  @keyframes offset {
    50% {
      outline-offset: 0.15em;
      outline-color: var(--col1);
    }

    55% {
      outline-offset: 0.1em;
      transform: translateY(1px);
    }

    80%,
    100% {
      outline-offset: 0;
    }
  }
`;

export default Button;
