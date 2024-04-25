import initialState from "./states"

const contacts = (state = initialState, action)=>{
    // Their can be multiple action that can be triggered
    switch(action.type){
        case 'Save_Contact' : {
          
            return {
                ...state, //if there are muliple states spread and store
                contact :[...action.payload], //returns global updated state using data that we had received

            };  
        }
    default:
        return state // returns initial global state, if not any action triggered
    }
}

export default contacts