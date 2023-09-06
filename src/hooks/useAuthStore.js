import { useDispatch, useSelector } from 'react-redux';
import { api } from '../config'
import { 
        checking, 
        login, 
        logout, 
        clearErrorMessage,
     } from '../store/reducers';

export const useAuthStore = () => {
  
    const dispatch = useDispatch();
    const { status, user, errorMessage } = useSelector(state => state.auth);

    const startLogin = async({email,password}) => {
        
        dispatch(checking())

        try {
            const {data} = await api.post('/auth',{email,password});
            
            localStorage.setItem('token', data.token );
            dispatch( login({ name: data.name, uid: data.uid, role: data.role }) );

        } catch (error) {
            dispatch( logout('Credenciales incorrectas') );
            setTimeout(() => {
                dispatch( clearErrorMessage() );
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( logout() );

        try {
            const { data } = await api.get('auth/renew');
            localStorage.setItem('token', data.token );
            dispatch( login({ name: data.name, uid: data.uid, role: data.role }) );
        } catch (error) {
            localStorage.clear();
            dispatch( logout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();

        dispatch(logout());
    }

    return {
        //propiedades
        status,
        user,
        errorMessage,

        //metodos
        startLogin,
        checkAuthToken,
        startLogout,
    }
}

