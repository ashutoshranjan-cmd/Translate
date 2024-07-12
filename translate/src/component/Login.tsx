import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Signup from './Signup';

interface Props {
  open : boolean;
  setOpen: (value:boolean)=>void
}

const  Login:React.FC<Props> = ({open,setOpen})=>{
     const [visible,setVisible] = React.useState<boolean>(false);
    const handleClose = () => {
    setOpen(false);
  };
const signupHandler = ()=>{
  setOpen(false);
  setVisible(true);
}
  

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
      <Signup visible={visible} setVisible={setVisible}/>
      <Dialog
        open = {open}
        // onClose={handleClose}
     
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries((formData as any).entries());
            const email = formJson.email;
            console.log(email);
            // handleClose();
          },
        }}
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent    sx={{
          width:"36rem",


        }}>
          {/* <DialogContentText>
            Email
          </DialogContentText> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Enter your email address here ...."
            type="email"
            fullWidth
            variant="standard"
          />
          {/* <DialogContentText>
            Password
          </DialogContentText> */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="passowrd"
            name="password"
            label="Enter your password here ..."
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <p style={{marginRight:"10rem"}}>New user click <Button onClick={signupHandler}>Sign Up</Button></p>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" sx={{backgroundColor:"red", color:"white" , "&:hover":{backgroundColor:"blue"}}} >Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Login;