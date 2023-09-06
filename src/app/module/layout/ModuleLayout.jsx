  import { Box } from '@mui/system';

  export const ModuleLayout = ({ children }) => {
    return (
      <Box sx={{ display: 'flex' }} className='animate__animated animate__fadeIn animate__faster'>
        { children }
      </Box>
    )
  }