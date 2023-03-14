import React from "react";

import styled from "styled-components";

export const Login = () => {
  return (
    <DIV>
      <h2>User Login</h2>
      <form className="formLogin">
        <input type="email" placeholder="email" className="inputs"></input>
        <input
          type="password"
          placeholder="password"
          className="inputs"
        ></input>
        <button type="submit">Log in</button>
      </form>
    </DIV>
  );
};
const DIV = styled.div`
  border: 1px solid;
  width: 25vw;
  height: 40vh;
  margin: auto;
  text-align: center;
  margin-top: 2%;
  .formLogin {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: space-evenly;
    align-items: center;
  }
  .inputs {
    margin: 4%;
  }

  button {
    background-color: rgba(255, 255, 255);
    &:hover {
      background-color: #549ede;
      cursor: pointer;
    }
  }
`;
