// Named Export Bcoz their can be different different actions

export const saveContacts = (data) =>{
    
    return {
        type: 'Save_Contact',
        payload : data,
    }
}

