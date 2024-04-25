import { Box, Typography, List, ListItem, ListItemIcon, ListItemText} from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';    
import ApartmentIcon from '@mui/icons-material/Apartment';

const ContactDetails = ({details}) =>{
    
    

     const { name, username, email, phone, website, company }=details 


    return (
        <Box width='80%' sx={{padding: '20px 30px'}}>
            <center>
                <Avatar alt={name} src="/static/images/avatar/1.jpg" sx={{width: '100px', height:'100px'}}/>
            </center>
            <Box display={'flex'} alignItems={'flex-start'} marginTop={'30px'} marginLeft={'230px'}>
                <Box>
                <section>
                    <Typography variant='h6' component='p'>
                        Basic Information
                    </Typography>
                </section>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary={name}  secondary={username}/>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={email}  />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <PhoneIcon/>
                        </ListItemIcon>
                        <ListItemText primary={phone} />
                    </ListItem>
                </List> 
                
                {/* Company Info */}
                <Box>
                    <section>
                        <Typography variant='h6' component='p'>
                            Company Information
                        </Typography>
                        </section>
                    <List>
                            <ListItem>
                                <ListItemIcon>
                                    <LanguageIcon/>
                                </ListItemIcon>
                                <ListItemText primary={website} />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <ApartmentIcon/>
                                </ListItemIcon>
                                <ListItemText primary={company.name} />
                            </ListItem>
                    </List>
                </Box>
                </Box>

             {/* Address Info */}
            <Box>
            <section>
                <Typography variant='h6' component='p'>
                    Address Information
                </Typography>
            </section>
            <ListItem>
                    <ListItemIcon>
                        <LanguageIcon/>
                    </ListItemIcon>
                    <ListItemText primary={website} />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <ApartmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary={company.name} />
                </ListItem>
            </Box>
            
        </Box>
        </Box>
        
    )
}

export default ContactDetails