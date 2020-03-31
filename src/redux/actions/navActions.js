import {
    REDIRECT_DASHBOARD
} from "../types";
// import { store } from "../store";

export const login = (loginObj) => dispatch => {
    console.log(loginObj);
    if (loginObj.username === "admin" && loginObj.password === "admin") {
        dispatch({
            type: REDIRECT_DASHBOARD,
            payload: {
                redirectDashboard: true
            }
        });
    }
};
export const logout = () => dispatch => {
    dispatch({
        type: REDIRECT_DASHBOARD,
        payload: {
            redirectDashboard: false
        }
    });
};
