import { Grid, Typography } from '@mui/material';

export const AuthLayout = ({ children, title = '' }) => {
  return (
    
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center" /*añadir theme, y en el main.jsx*/
      sx={{ minHeight: '97vh'}}
    >
      {/* <img src="/react.svg" 
           alt="Login Logo" 
           style={{ width: '100px', height: '100px', marginBottom: '16px', marginTop: '-47px', }} 
      /> */}
     
      <Grid item
       className='box-shadow'
       xs={ 3 }
       sx={{ 
            width: { sm: 450 },
            padding: 3, 
            border: '1px solid black',
            borderRadius: 2 ,
        }}>
          <Typography align='center' 
                variant='h5' 
                sx={{ mb: 1 }}>
                { title }
          </Typography>
            { children }
        </Grid>
    </Grid>
  )
}