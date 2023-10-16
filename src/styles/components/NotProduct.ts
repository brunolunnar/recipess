import { styled } from "..";

export const NotProductContainer = styled('div',{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    fontSize:'3rem',
    maxWidth:'1200px',
    margin:'0 auto',
    height:'36rem',
    textAlign:"center",
    lineHeight:'5rem',

 '@media(max-width:640px)':{
   
        fontSize:'2rem'
 }
})
