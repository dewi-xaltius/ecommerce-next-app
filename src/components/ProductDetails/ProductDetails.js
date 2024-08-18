import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import {
  ProductDetailsContainer,
  ImageContainer,
  ProductImage,
  DetailsContainer,
  ProductName,
  ProductDescription,
  ProductPrice,
  ProductStock,
  ProductCategory,
  ButtonGroup,
  Button,
} from './ProductDetails.styles';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`https://demo1-4744.restdb.io/rest/ecommerce/${id}`, {
            headers: {
              'x-apikey': process.env.NEXT_PUBLIC_RESTDB_API_KEY,
              'Content-Type': 'application/json',
            },
          });
          setProduct(response.data);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://demo1-4744.restdb.io/rest/ecommerce/${id}`, {
        headers: {
          'x-apikey': process.env.NEXT_PUBLIC_RESTDB_API_KEY,
          'Content-Type': 'application/json',
        },
      });
      router.push('/');
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <ProductDetailsContainer>
      <ImageContainer>
        <ProductImage src={product.imageURL} alt={product.productName} />
      </ImageContainer>
      <DetailsContainer>
        <ProductName>{product.productName}</ProductName>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
        <ProductStock>Stock: {product.stock}</ProductStock>
        <ProductCategory>Category: {product.category}</ProductCategory>
        <ButtonGroup>
          <Button>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </ButtonGroup>
      </DetailsContainer>
    </ProductDetailsContainer>
  );
};

export default ProductDetails;
