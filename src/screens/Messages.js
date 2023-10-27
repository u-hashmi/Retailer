import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Under Construction
      </Typography>
      <Typography variant="h5" component="div">
        Messages Screen will be avialable soon!
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Messages = () => {
  return (
  <Box component="main" sx={{ flexGrow: 1, width: '100%', bgcolor: 'background.default', p: 3 }}>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  </Box>);
};

export default Messages;