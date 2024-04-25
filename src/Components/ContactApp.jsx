import ContactDetails from "./ContactDetails";
import ContactHeader from "./ContactHeader";
import ContactList from "./ContactList";
import CircularProgress from '@mui/material/CircularProgress';
import { HeaderName } from './constants';
import { useState, useEffect } from 'react'
import { Box } from '@mui/material';
import { useDispatch } from "react-redux";
import { saveContacts } from "./Store/action";

const ContactApp = () =>{
    const dispatch = useDispatch();
    const [contacts, setContacts]=useState([]);
    const [contactIndex, setContactIndex]=useState(0);
    const[loading, setLoading]=useState(true)

    const fetchContacts = async () =>{
        try{
            setLoading(true)
            const resp= await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await resp.json();
            
            setContacts(data)
            dispatch(saveContacts(data))
            // console.log('From ContactApp : ', contacts)

            setLoading(false)
        }catch(error){
            setLoading(false)
            console.log(`Error :: ${error}`);
        }
    } 

    const selectContact = (contactIndex) =>{
        setContactIndex(contactIndex);
    }

    useEffect(()=>{
        fetchContacts()
    }, [])
 
    return (
        <div>

            {/* name is propertyName  & HeaderName is value i.e coming from constants.js file */}
            <ContactHeader name={HeaderName}/>

            {loading?
            <CircularProgress sx={{margin: '50px 50px'}}/>:(
            <Box display={'flex'} alignItems={'flex-start'}>
                <ContactList contact={contacts} selectContact={selectContact} contactIndex={contactIndex}/>

                {/* contacts?.[contactIndex] :- We will get one specific selected contact & will be passed */}
                <ContactDetails details={contacts?.[contactIndex]}/> 
            </Box>)}
           
        </div>
    )
}

export default ContactApp;