import { styled } from "..";

export const FooterContainer = styled('footer',{

    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'$brown100',
    marginTop:'7.6rem',
    height:'6rem',
    span:{
        fontSize:'2rem'
    }, 
     '@media(max-width:680px)':{
        marginTop:'40px'
    }
}) 