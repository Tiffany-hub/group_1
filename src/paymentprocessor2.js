// PaymentProcessorPage2.jsx

import React, { useState } from 'react';
import axios from 'axios'; 
import { PaymentProcessorContainer, GrabzzzSubTitle, FormGroup, Label, Input, Select, Button } from './styles';

const PaymentProcessorPage2 = ({ handleBackButtonClick }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [receiveVia, setReceiveVia] = useState('sms');
  const [mpesaPin, setMpesaPin] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/process_payment', {
        name,
        phoneNumber,
        email,
        receiveVia,
        mpesaPin,
      });
  
      alert(response.data.message);
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up the request:', error.message);
      }
    }
  }
  
  return (
    <PaymentProcessorContainer>
      <GrabzzzSubTitle>Grabzzz</GrabzzzSubTitle>
      <form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Phone Number</Label>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>Receive Ticket Via</Label>
          <Select
            value={receiveVia}
            onChange={(e) => setReceiveVia(e.target.value)}
          >
            <option value="sms">SMS</option>
            <option value="email">Email</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Mpesa PIN</Label>
          <Input
            type="password"
            value={mpesaPin}
            onChange={(e) => setMpesaPin(e.target.value)}
          />
        </FormGroup>

        <Button type="submit">Pay via M-Pesa</Button>
      </form>
      <Button type="button" onClick={handleBackButtonClick}>Back</Button>
    </PaymentProcessorContainer>
  );
}

export default PaymentProcessorPage2;