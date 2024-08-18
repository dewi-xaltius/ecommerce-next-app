import { useState } from 'react';
import axios from 'axios';
import {
  AddProductContainer,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Message
} from './AddProduct.styles';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        productName,
        price: parseFloat(price),
        description,
        imageURL,
        stock: parseInt(stock),
        category,
      };
      const response = await axios.post(
        'https://demo1-4744.restdb.io/rest/ecommerce',
        newProduct,
        {
          headers: {
            'x-apikey': process.env.NEXT_PUBLIC_RESTDB_API_KEY,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Product added successfully!');
      // Clear form fields
      setProductName('');
      setPrice('');
      setDescription('');
      setImageURL('');
      setStock('');
      setCategory('');
    } catch (error) {
      console.error('Error adding product:', error);
      setMessage('Failed to add product. Please try again.');
    }
  };

  return (
    <AddProductContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Product Name:</Label>
          <Input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Price:</Label>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Description:</Label>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Image URL:</Label>
          <Input
            type="text"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Stock:</Label>
          <Input
            type="number"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Category:</Label>
          <Input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Add Product</Button>
        {message && <Message>{message}</Message>}
      </Form>
    </AddProductContainer>
  );
};

export default AddProduct;
