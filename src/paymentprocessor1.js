import React, { useState } from 'react';
import { PaymentProcessorContainer, GrabzzzSubTitle, FormGroup, Label, Input, Select, Button } from './styles';

const PaymentProcessorPage = ({ handleNextButtonClick }) => {
  const [ticketType, setTicketType] = useState('Regular');
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate ticket type
    if (ticketType === '') {
      alert('Please select a ticket type.');
      return;
    }

    // Validate ticket quantity
    if (ticketQuantity <= 0) {
      alert('Please enter a valid ticket quantity.');
      return;
    }

    // Proceed to the next page
    handleNextButtonClick();
  }

  return (
    <PaymentProcessorContainer>
      <GrabzzzSubTitle>Grabzzz</GrabzzzSubTitle>
      <form onSubmit={handleFormSubmit}>
        <FormGroup>
          <Label>Ticket Type</Label>
          <Select
            value={ticketType}
            onChange={(e) => setTicketType(e.target.value)}
          >
            <option value="Regular">Regular Ticket</option>
            <option value="VIP">VIP Ticket</option>
            <option value="Kid">Kid Ticket</option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label>Quantity</Label>
          <Input
            type="number"
            value={ticketQuantity}
            onChange={(e) => setTicketQuantity(e.target.value)}
          />
        </FormGroup>
        <Button type="submit">Next</Button>
      </form>
    </PaymentProcessorContainer>
  );
}

export default PaymentProcessorPage;
