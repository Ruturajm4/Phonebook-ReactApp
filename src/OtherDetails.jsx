import {Box, Typography} from '@mui/material'
import { useSelector } from 'react-redux'

const OtherDetails = () =>{
    //useSelector accepts callback function
    //(state) -  final state
    // contact - state followed by reducer name
    //contact - state followed by states variable name

    const contacts = useSelector((state)=> state.contact.contact)

    console.log('Other Details Component: ',contacts)

    return <Box>
        <Typography variant='p' component='p'>
            Accessing Contact Details from global state

            {
                contacts.map((contact)=>{
                    return <p key={contact.id}>{contact.name}</p>
                })
            }
        </Typography>
    </Box>
}

export default OtherDetails