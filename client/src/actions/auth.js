import axios from 'axios';
import { setAlert} from './alert';
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR ,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_PROFILE 
} from '../actions/types';
import setAuthToken from '../utils/setAuthToken';

//load Users
export const loadFaculty =() => async dispatch => {
 //tokens are set in src/utility/setAuthToken
 if(localStorage.token){
    setAuthToken(localStorage.token);
 }

 try {
    const res = await axios.get('/api/auth/' , 
    {
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
        }
    });
    
    dispatch({ 
        type : USER_LOADED,
        payload : res.data
    });

 } catch (err) {
     console.log(err.message);
     dispatch({
         type : AUTH_ERROR,
         payload :  err.message
     });
 }
};



//Register User
export const register =({ name, email, password}) => async (dispatch) =>{
           const config ={
            headers:{
                'Content-Type': 'application/json'
            }
        };

        const body = JSON.stringify({name  , email , password});

        try {
            const res = await axios.post('http://localhost:5000/api/faculty' , body, config);

            dispatch({ 
                type : REGISTER_SUCCESS,
                payload : res.data //token
            });

            dispatch(loadFaculty());
        } catch (err) {
            const errors = err.response

            if(errors){
                const err = errors.data.errors;
                err.forEach(error => dispatch(setAlert(error.msg , 'danger')))
            }
            else if(err.request){
                dispatch(setAlert(err.message , 'danger'));
            }
            dispatch({ 
                type : REGISTER_FAIL
            });

        }
    };

    //Login user
    export const login =(email, password) => async (dispatch) =>{
        const config ={
         headers:{
             'Content-Type': 'application/json'
         }
     };

     const body = JSON.stringify({ email , password});

     try {
         const res = await axios.post('/api/auth/' , body, config);

         dispatch({ 
             type : LOGIN_SUCCESS,
             payload : res.data //token
         });

        dispatch(loadFaculty());
     } catch (err) {
         const errors = err.response

         if(errors){
             const err = errors.data.errors;
            // err.forEach(error => dispatch(setAlert(error.msg , 'danger')))
            dispatch(setAlert(errors.message , 'danger'));
         }
         else if(err.request){
             dispatch(setAlert(errors.message , 'danger'));
         }
         dispatch({ 
             type : LOGIN_FAIL,
             payload : err.message
         });

     }
 };

 //Logout / Clear Profile 
 export const logout =() => dispatch =>{
     dispatch({
         type : CLEAR_PROFILE
     });
     dispatch({
        type : LOGOUT
    });
 }