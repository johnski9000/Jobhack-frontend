import { OuterModalDiv, ModalCont, ModalWrapper, TitleContainer, DescriptionContainer, ButtonContainer } from "../styles/modal.styled";
// import { description, title } from "../Card/Card";
import { MdClose } from "react-icons/md";

export const Modal1 = ({title, description, modalIsOpen, setModalIsOpen}) => {
    
      const closeModal = () => {
        setModalIsOpen(false);
      };
    return (
        <OuterModalDiv>
           <ModalCont  isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalWrapper>
          <TitleContainer>
            <label>{title}</label>
          </TitleContainer>
          <DescriptionContainer>
            <p>{description}</p>
          </DescriptionContainer>
          <ButtonContainer>
          <MdClose className="close-icon" onClick={closeModal} />
          </ButtonContainer>
        </ModalWrapper>
      </ModalCont> 

        </OuterModalDiv>
    )
}


  
