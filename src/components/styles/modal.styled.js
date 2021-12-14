import styled from "styled-components";
import Modal from "react-modal"



export const ModalCont = styled(Modal)`
display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25%;
`

export const ModalWrapper = styled.div`
background-color: white;
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
 border-radius: 7px;
 padding: 10px;
 filter: drop-shadow(11px 10px 5px grey);

`

export const OuterModalDiv = styled.div`
position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;



`

export const CurrentDataContainer = styled.div`

`

export const TitleContainer = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: bold;
margin: 5px;

`

export const DescriptionContainer = styled.div`
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-weight: lighter;
`

export const ButtonContainer = styled.div`


`

export const StyledButton = styled.button`

background: #ff914d;
  border-radius: 5px;

  color: white;
  border: none;
  margin: 15px;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  padding: 15px;
  
`







