import { useRouter } from 'next/router';
import axios from 'axios';
import { Button } from './DeleteButton.styles';

const DeleteButton = ({ productId }) => {
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axios.delete(`https://demo1-4744.restdb.io/rest/ecommerce/${productId}`, {
        headers: {
          'x-apikey': process.env.NEXT_PUBLIC_RESTDB_API_KEY,
          'Content-Type': 'application/json',
        },
      });
      router.push('/'); // Redirect to the homepage after deletion
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return <Button onClick={handleDelete}>Delete</Button>;
};

export default DeleteButton;
