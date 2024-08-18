import axios from 'axios';
import { useEffect, useState } from 'react';
import { HomeContainer, Card, CardImage, CardTitle } from './ProductList.styles';
import Link from 'next/link';

const ProductList = () => {        
  const [products, setProducts] = useState([]);
  const URL = 'https://demo1-4744.restdb.io/rest/ecommerce';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            'x-apikey': process.env.NEXT_PUBLIC_RESTDB_API_KEY,
            'Content-Type': 'application/json',
          },
        });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <HomeContainer>
      {products.map((product) => (
        <Link href={`/product/${product._id}`} key={product._id} passHref>
          <Card> 
            <CardImage src={product.imageURL} alt={product.productName} />
            <CardTitle>{product.productName}</CardTitle>
          </Card>
        </Link>
        
      ))}
    </HomeContainer>
  );
};

export default ProductList;
