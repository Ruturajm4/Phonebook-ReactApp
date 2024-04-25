import { Box, List, ListItemAvatar, ListItem, Avatar, ListItemText, Typography } from '@mui/material'
import React from 'react'


// Passed property  from parent component i.e ContactApp
const ContactList = ( {contact, selectContact, contactIndex} ) =>{
    // console.log('From ContactList : ',contact)
    return (
    <Box width={'30%'}>
           <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

            {/* List Rendering using map() as each contact is array of items */}
            {/* Contact Users Data(Items) & Index of users */}

        {/* Loop to iterate user details */}
            {contact.map((contact, index)=>{ 
                return (
                    //  To identify each list uniquely 'Key' attribute is used
                <React.Fragment key={contact.id} >
                    <ListItem alignItems="flex-start" 
                    onClick={()=>{selectContact(index)}} //function calls on clicking
                    sx={{backgroundColor: contactIndex === index ? '#E5E7DE' : 'transparent' }}>

                            <ListItemAvatar>
                                <Avatar alt={contact.name} src="No-images in API to fetch" />
                            </ListItemAvatar>

                            <ListItemText
                            primary={contact.name}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {contact.email}
                                    </Typography>
                                    <br/>
                                    {/* I printed by my own */}
                                    {contact.company.catchPhrase}
                                </React.Fragment>
                                }
                            
                            />
                    </ListItem>
                </React.Fragment>
            )})}
  
      </List>
    </Box>)
}

export default ContactList