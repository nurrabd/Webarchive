import axios from "axios";


export const FETCH_USER = 'FETCH_USER';



export const getUsersById = (id) => async dispatch => {

    const res = await axios.get(`http://localhost:8080/api/user/findUserById/${id}`);
    dispatch({
        type: FETCH_USER,
        payload: res.data
    });
};

export const registerUsers = (newuser, history) => async dispatch => {
    const res = await axios.post(`http://localhost:8080/api/user/register`, newuser);
   if(res.status===200){
       history.push("/success")
   }
};

export const login = (theUser, history) => async dispatch => {
    const res = await axios.post(`http://localhost:8080/api/user/login`, theUser);
    if(res.status===200){

        history.push(`/success/${res.data.userId}`)
    }
};

export const AddNewSite = (theUser, history, id) => async dispatch => {
    const res = await axios.post(`http://localhost:8080/api/site/register`, theUser);
    history.push(`/success/${id}`)

};





