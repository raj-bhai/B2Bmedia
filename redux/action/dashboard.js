import axios from "axios";
import url from "../../constants/url";

export const TASKS = "TASKS";
export const CLIENTTYPE = "CLIENTTYPE";

export const getTask = () => {
    return dispatch => {
        axios
            .get(`${url.apiRoot}/dashboard/getTask`, {
            })
            .then((res) => {
                dispatch({ type: TASKS, data: res.data.data });
            })
            .catch((err) => {
                console.log("GetTask Error :", err);
            });
    }
}

export const getClientType = () => {
    return dispatch => {
        axios
            .get(`${url.apiRoot}/dashboard/getClientType`, {
            })
            .then((res) => {
                dispatch({ type: CLIENTTYPE, data: res.data.data });
            })
            .catch((err) => {
                console.log("GetTask Error :", err);
            });
    }
}