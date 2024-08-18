import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DeleteButton from './DeleteButton';
import axios from 'axios';
import { useRouter } from 'next/router';

jest.mock('axios');
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mocking the environment variable
process.env.NEXT_PUBLIC_RESTDB_API_KEY = 'your-mocked-api-key';

describe('DeleteButton', () => {
  it('calls the delete API and redirects after successful deletion', async () => {
    const mockPush = jest.fn();
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    axios.delete.mockResolvedValueOnce({});

    render(<DeleteButton productId="123" />);

    const deleteButton = screen.getByText(/delete/i);
    fireEvent.click(deleteButton);

    expect(axios.delete).toHaveBeenCalledWith('https://demo1-4744.restdb.io/rest/ecommerce/123', {
      headers: {
        'x-apikey': 'your-mocked-api-key', // This should match the mocked value
        'Content-Type': 'application/json',
      },
    });

    await screen.findByText(/delete/i);

    expect(mockPush).toHaveBeenCalledWith('/');
  });
});
