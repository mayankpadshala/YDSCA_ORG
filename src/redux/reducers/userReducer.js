import { SET_EMAIL, SET_PASSWORD, REDIRECT_DASHBOARD } from "../types";

const initialState = {
	userId: "",
	userToken: "",
	email: "",
    password: "",
    redirectDashboard: false
};
export default function(state = initialState, action) {
	switch (action.type) {
		case SET_EMAIL:
			return {
				...state,
				email: action.payload.email,
            };
        case SET_PASSWORD:
            return {
				...state,
				password: action.payload.password,
			};
		case REDIRECT_DASHBOARD:
            return {
				...state,
				redirectDashboard: action.payload.redirectDashboard,
            };
		default:
			return state;
	}
}
