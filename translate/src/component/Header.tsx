import { AppBar, Toolbar, Typography,Button } from "@mui/material"
import { Link } from "react-router-dom"
import { useState ,useRef} from "react"
import LoadingBar from 'react-top-loading-bar'
// import { Login } from "@mui/icons-material"
import DarkModeSwitch from "./DarkModeSwitch"
import Login from "./Login"

const styles = {
  color:"white",
  margin:"0.5rem",
  textDecoration:"none",
  fontWeight:"bolder",
  fontSize:"1rem"
}
const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef(null);
  //  useEffect(()=>{
  //   const load = ()=>{
  //     ref.current.continuousStart();
  //   }
  //   load();
  //  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };


  return (
    <div>

      <AppBar>
        <Toolbar>
        <Typography variant="h5" mr={"auto"} textTransform={"uppercase"}>Learningo</Typography>
        <Link style={styles} to={"/"} >HOME</Link>
        <Login open = {open} setOpen = {setOpen}/>
        <Button  sx={{color:'white',fontWeight:"bolder",fontSize:"1rem"}} onClick={handleClickOpen} >Log In</Button>
        <DarkModeSwitch/>
        </Toolbar>
      </AppBar>
      <LoadingBar color='red' ref={ref} />
    </div>
  )
}

export default Header
