import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .form-button {
    height: 40px;
    width: 80%;
    border: none;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 20px auto;
  }

  .link-item {
    background: none;
    border: none;
    color: #ff914d;
    cursor: pointer;
    font-size: 1rem;
    color: black;
    margin-top:10px;
  }

  .login-title {
    font-size:4em;
    margin-left:70px;
    margin-top:-50px;
    margin-bottom: 50px;
    font-weight: bold;
  }

  .login-span {
    color: #ff914d;
  }
`;

export const Right = styled.div`
  width: 50%;
  background-image: linear-gradient(#ff914d, #ef5c1b);
  display: flex;
  justify-content: center;
`;

export const StyledInput = styled.input`
  border: none;
  background: rgba(196, 196, 196, 0.36);
  border-radius: 5px;
  display: block;
  height: 40px;
  width: 80%;
  margin: 8px auto;
`;

export const StyledButton = styled.button`
  background: #ff914d;
  border-radius: 5px;
  display: block;
  height: 50px;
  width: 80%;
  color: white;
  border: none;
  margin: 20px auto 0 auto;
  font-size: 1.4rem;
  font-weight: bold;
  cursor:pointer;
`;

export const StyledLabel = styled.label`
  display: flex;
  font-size: 1.2rem;
  color: #ff914d;
  margin-left: 65px;
`;
