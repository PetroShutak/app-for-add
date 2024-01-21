import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
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