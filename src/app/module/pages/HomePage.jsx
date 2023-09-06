import React, { useState, useEffect } from 'react';
import { Grid, Box} from '@mui/material';
import { DateRange, AccessTime } from '@mui/icons-material';
import { useAuthStore } from '../../../hooks';

export const HomePage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const { user } = useAuthStore();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      
      {/* Main Grid */}
      <Grid container justifyContent="center" alignItems="center" sx={{height:'65vh'}}>
        <Grid item xs={12} >
          <Box display="flex" justifyContent="center" alignItems="center" >
            <DateRange fontSize="large" />
            <h3 style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              {currentTime.toLocaleDateString()}
            </h3>
            <AccessTime fontSize="large" />
            <h3 style={{ marginLeft: '0.5rem' }}>
              {currentTime.toLocaleTimeString()}
            </h3>
            <h3 style={{ marginLeft: '0.5rem' }}>
              {user.name}
            </h3>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};