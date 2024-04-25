import { AppBar, Typography, Toolbar } from '@mui/material'


const ContactHeader =  ({name}) =>{
    return (
    <div>
        <AppBar sx={{
            backgroundColor: '#0a578b' 
        }} 
        position="static" >
            <Toolbar variant="dense">
        
            <Typography variant="h6" color="inherit" component="div">
                {name}
            </Typography>
            </Toolbar>
        </AppBar>
    </div>
    )
}

export default ContactHeader;