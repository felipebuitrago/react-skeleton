import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CircularProgress } from '@mui/material';

import { AuthRouter } from '../app/auth/routes/AuthRouter';
import { ModuleRouter } from "../app/module/routes/ModuleRouter";
import { useAuthStore } from "../hooks";
  
export const AppRouter = () => {
    
    const { status, checkAuthToken } = useAuthStore();

     useEffect(() => {
         checkAuthToken();
    }, [])
    
    if ( status === 'checking' ) {
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <CircularProgress />
            </div>
        )
    }

    else if( status === 'not-authenticated'){
        return ( 
            <Routes>
                <Route path="/app/*" element= { <AuthRouter /> } /> 
                <Route path="/*" element={ <Navigate to="/app" /> }  />
            </Routes>
        )
    }else{
        return ( 
            <Routes>
                <Route path="/app/*" element= { <ModuleRouter /> } />
                <Route path="/*" element={ <Navigate to="/app" /> }  />
            </Routes>
        )
    }    
}
