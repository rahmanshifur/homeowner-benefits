import { Box } from "@mui/material";
import AppRouter from "./router";
import img from "../assets/image/img.jpg"; 

function App() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        position: 'relative',
        padding:'10px 20px'
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          zIndex: 1,
        }}
      ></Box>

      <Box sx={{ position: 'relative', zIndex: 2 }}>
        <AppRouter />
      </Box>
    </Box>
  );
}

export default App;