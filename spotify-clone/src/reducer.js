import defaults from "nodemon/lib/config/defaults";

export const initialState = {
    user: null,
    playlist:[],
    playing: false,
    item: null,
    //Remove after development
    token: "BQAK5Ny1uPNClQE8hkqZ4PFTQ0C7f1pgYivIpDGMT35PlLE5jsm1H0-Wb8FFuckrb-CAqAvKLsrU8rzWJ0AtYCeX_ne9DaKhBSSbHjYPKfx5ioYQsmvs9x63omCQLIHI_mNBp2Yr-tYyKJfKaKk--J21r1MjhsqI42MqPjnfW_c7GFi7Q_7MNd2L2owQVKqnStX4Z_hv5GTrXhkqn7zEIQ"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return{
                state
            }
    }
};

export default reducer;