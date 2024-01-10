import { GET_DATA } from "./actiontype";
import axios from 'axios';

export const getSuccess = (payload)=>{
    return {
        type : GET_DATA,
        payload : payload
    }
}

export const gettingDataSuccess = () => async (dispatch) => {
    try {
        const res = await axios.get(`https://render-json-zr3u.onrender.com/data`);
        dispatch(getSuccess(res.data));
        console.log(res.data);
    } catch (error) {
        console.log(error);
    }
};
gettingDataSuccess();
