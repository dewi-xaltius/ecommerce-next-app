import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

export const ImageContainer = styled.div`
  flex: 1;
  max-width: 300px;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const DetailsContainer = styled.div`
  flex: 2;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.p`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const ProductStock = styled.p`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProductCategory = styled.p`
  font-size: 1rem;
  margin-bottom: 20px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  background-color: #fb8500;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #ff9800;
  }
`;
