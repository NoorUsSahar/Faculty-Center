import { SET_ALERT, REMOVE_ALERT } from './types';

// Set alert
export const setAlert = (message) => (dispatch) => {
  dispatch({
    type: SET_ALERT,
    payload: message,
  });

  setTimeout(() => {
    dispatch({ type: REMOVE_ALERT,
    payload : message });
  }, 3000);
};

// import uuid from 'uuid/v4'

// //dispatch more than one action type
// export const setAlert = (msg , alertType) => dispatch =>{
//     const id =uuid();

//     dispatch({
//         type: SET_ALERT,
//         payload :{ msg , alertType , id}
//     });

//     //remove alert after certain time
//     setTimeout(() => dispatch({
//         type: REMOVE_ALERT,
//         payload:id
//     }) , 5000);
// };