import axios from "axios";
import url from "../../constants/url";

export const TASKS = "TASKS";

export const getTask = () => {
    return dispatch => {
        axios
            .get(`http://localhost:9000/dashboard/getTask`, {
            })
            .then((res) => {
                dispatch({ type: TASKS, data: res.data.data });
                // console.log("Task data :", res)
            })
            .catch((err) => {
                console.log("GetTask Error :", err);
            });
    }
}