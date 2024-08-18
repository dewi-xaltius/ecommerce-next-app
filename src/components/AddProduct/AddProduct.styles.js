import styled from 'styled-components';

export const AddProductContainer = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background-color: #fb8500;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #ff9800;
  }
`;

export const Message = styled.p`
  margin-top: 15px;
  font-weight: bold;
  color: green;
`;
