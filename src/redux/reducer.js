const initialState = {
    admin: {}
}

const GET_ADMIN = 'GET_ADMIN'

export function getAdmin(adminObj){
    return{
        type: GET_ADMIN,
        payload: adminObj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ADMIN:
            return {...state, admin: payload};
        default:
            return state;
    }


}