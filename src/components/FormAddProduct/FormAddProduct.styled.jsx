import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const FormTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 6px;
`;
export const FormInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
`;
export const FormInputDescription = styled.textarea`
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 4px;
  resize: none;
  height: 150px;
`;
export const FormButton = styled.button`
  width: 300px;
  margin: 0 auto;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background-color: #ff6b09;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all 250ms ease-in-out;
  &:hover {
    background-color: #ff8124;
  }
`;
