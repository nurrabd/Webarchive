import axios from "axios";


export const FETCH_USER = 'FETCH_USER';
export const FETCH_SITES = 'FETCH_SITES';




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



export const getSitesById = (id) => async dispatch => {

    const res = await axios.get(`http://localhost:8080/api/user/findUserById/${id}`);
    dispatch({
        type: FETCH_SITES,
        payload: res.data
    });
};

export const updateSite = (siteId, update, history, userId) => async dispatch => {
    await axios.put(`http://localhost:8080/api/site/update/${id}`, update);
    history.push(`/ResumeBoard/${userId}`);


};



