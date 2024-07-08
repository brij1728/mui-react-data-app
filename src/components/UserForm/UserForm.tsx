import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export const UserForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('userDetails', JSON.stringify({ name, phone, email }));
    window.location.href = '/data';
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>Enter Your Details</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Phone Number"
          fullWidth
          margin="normal"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Container>
  );
};

