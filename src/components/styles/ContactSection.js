import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  margin-top: 10rem;
  margin-bottom: 15rem;
`;

export const Heading = styled.h2`
  text-align: center;
  font-size: 6rem;
  font-weight: 600;
  margin: 3rem auto;
  margin-bottom: 0rem;
`;

export const ContactFormConatiner = styled.div`
  width: 90%;
  margin: 1rem auto;
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 35px;
  padding: 3rem 3rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const ContactForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`;

export const InputContainer = styled.div``;

export const InputLabel = styled.p`
  font-weight: 600;
  font-size: 2.5rem;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 3rem;
  border: none;
  outline: none;
  padding: 0.5rem;
`;

export const MessageContainer = styled(InputContainer)`
  grid-column: span 2;
`;

export const MessageBox = styled(Input).attrs({
  as: "textarea",
})`
  height: 20vh;
`;

export const Select = styled(Input).attrs({
  as: "select",
})``;

export const SubmutButton = styled.button`
  width: 100%;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 3rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin: 3rem auto;
  transition: opacity 150ms ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;
