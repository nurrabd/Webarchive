import axios from "axios";


export const FETCH_USER = 'FETCH_USER';



export const getUsersById = () => async dispatch => {

    const res = await axios.get(`http://localhost:8080/api/all`);
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};
export const registerUsers = (newuser, history) => async dispatch => {

    const res = await axios.post(`http://localhost:8080/api/register`, newuser);

   if(res.status==200){
       history.push("/success")
   }

};



