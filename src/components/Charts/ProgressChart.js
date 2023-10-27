import React from 'react';
import { CircularProgress } from '@mui/material';

const ProgressChart = () => {
  // Calculate the progress percentage based on your data
  const finishedOrders = 75;
  const pendingOrders = 25;
  const totalOrders = finishedOrders + pendingOrders;
  const progressPercentage = (finishedOrders / totalOrders) * 100;

  return (
    <div>
      <h2>Order Progress</h2>
      <CircularProgress variant="determinate" value={progressPercentage} />
      <p>Finished Orders: {finishedOrders}</p>
      <p>Pending Orders: {pendingOrders}</p>
    </div>
  );
};

export default ProgressChart;
