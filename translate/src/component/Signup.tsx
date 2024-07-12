
import * as React from 'react';
// import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  visible: boolean;
  setVisible: (value: boolean) => void;
}

const Signup: React.FC<Props> = ({ visible, setVisible }) => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const confirmPasswordRef = React.useRef<HTMLInputElement>(null);
  const numberRef = React.useRef<HTMLInputElement>(null);

  const submitHandle = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;
    const number = numberRef.current?.value;

    if (!name || !email || !password || !confirmPassword || !number) {
      toast.error('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    console.log(name, email, password, number);
    toast.success('Signup successful');
    setVisible(false);
  };

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={visible}
        PaperProps={{
          component: 'form',
          onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            submitHandle();
          },
        }}
        
      >
        <DialogTitle>Sign up</DialogTitle>
        <DialogContent sx={{ width: '36rem'}} >
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Enter your name ...."
            type="text"
            fullWidth
            variant="standard"
            inputRef={nameRef}
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Enter your email ..."
            type="email"
            fullWidth
            variant="standard"
            inputRef={emailRef}
          />
          <TextField
            required
            margin="dense"
            id="password"
            name="password"
            label="Enter your password ..."
            type="password"
            fullWidth
            variant="standard"
            inputRef={passwordRef}
          />
          <TextField
            required
            margin="dense"
            id="confirm_password"
            name="confirm_password"
            label="Confirm your password ..."
            type="password"
            fullWidth
            variant="standard"
            inputRef={confirmPasswordRef}
          />
          <TextField
            required
            margin="dense"
            id="number"
            name="number"
            label="Enter your phone no ..."
            type="text"
            fullWidth
            variant="standard"
            inputRef={numberRef}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" sx={{ backgroundColor: 'red', color: 'white' ,"&:hover":{backgroundColor:"blue"}}}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <ToastContainer />
    </React.Fragment>
  );
};

export default Signup;
