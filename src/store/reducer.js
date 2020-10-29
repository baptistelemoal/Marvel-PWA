/* eslint-disable import/no-anonymous-default-export */
import initialState from "./state";
import actions from "./action";

export default (state = initialState, action) => {
    const { type, value } = action;
    switch (type) {
        case actions.SET_ACCESS_TOKEN: {
            return { ...state, accessToken: value };
        }

        case actions.SET_THEME: {
            return { ...state, theme: value };
        }

        default:
            return state;
    }
};
