import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuthStore } from '../../../hooks';
import { ModuleView } from '../views/ModuleView';
import { 
	HomePage,
	} from '../pages';

export const ModuleRouter = () => {
  const { user } = useAuthStore();

	return (
		<Routes>
			<Route path='/' element={ <ModuleView /> } >
	
				<Route path='' element={ <HomePage /> } /> 
				
			</Route>
			<Route path='/*' element={ <Navigate to="/" /> } />
		</Routes>
	)
    
}