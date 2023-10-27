import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

const orders = [
  { orderNumber: '12345', details: 'Product A - Qty: 5', date: '2023-01-15' },
  { orderNumber: '67890', details: 'Product B - Qty: 3', date: '2023-01-16' },
  // Add more order items as needed
];

const OrderList = () => {
  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6">Order List</Typography>
      <List>
        {orders.map((order, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`Order #${order.orderNumber}`}
              secondary={`Details: ${order.details} | Date: ${order.date}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default OrderList;
