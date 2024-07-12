import { Container, Typography,Stack, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Tooltip from '@mui/material/Tooltip';
import coffee from '../assets/coffee.png'
import { useStripe } from '@stripe/react-stripe-js';
const languages = [
  {
    name:"Japanese",
    code:"ja",
  },
  {
    name:"Hindi",
    code:"hi",
  },
  {
    name:"Spanish",
    code:"es",
  },
  {
    name:"French",
    code:"fr",
  },
  {
    name:"Arabic",
    code:"ar",
  }
]
const Home = () => {
  const stripe:any = useStripe();

  const stripeClick = async () => {
      const { error } = await stripe.redirectToCheckout({
          lineItems: [
              {
                  price: 'price_1PbSRE2NvV01L85tWpYv78Qk', // Replace with the ID of your price object
                  quantity: 1,
              },
          ],
          mode: 'payment',
          successUrl: 'https://yourdomain.com/success', // Replace with your success URL
          cancelUrl: 'https://yourdomain.com/cancel',  // Replace with your cancel URL
      });

      if (error) {
          console.error('Error:', error);
      }
  };
  const navigate = useNavigate();
  const languageSelectHandler = (language:string):void =>{
    navigate(`/learn?language=${language}`);
  }
  return (
    <Container maxWidth={"sm"} sx={{marginTop:"10rem"}}>
      <Typography variant="h3" p={"2rem"} textAlign={"center"}>
        Welcome, Begin your journey of learning
      </Typography>
      <Stack direction={"row"} spacing={"2rem"} p={"2rem"} alignItems={"center"} justifyContent={"center"}>
        {
          languages.map(i=>(
            <Button onClick={()=>languageSelectHandler(i.code)} key={i.code} variant="contained">{i.name}</Button>
          ))
        }
      </Stack>
      <Typography textAlign={"center"}>Choose one language from above</Typography>
      <Tooltip title="Buy me a coffee" arrow>
      <Button role="link" onClick={stripeClick} sx={{height:"5rem",width:"5rem",borderRadius:"2rem", marginLeft:"60rem", marginTop:"15rem"}}><img style={{height:"5rem",width:"10rem"}} src={coffee} alt="" /></Button>
      </Tooltip>
    </Container>
  )
}

export default Home
