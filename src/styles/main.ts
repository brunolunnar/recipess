import { styled } from ".";

export const MainContainer = styled('main',{
    display:'flex',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center',
    gap:'20px',
    maxWidth:'1200px',
    margin:'0 auto',
    

})

export const DivContainer = styled('div',{
    marginTop:'2rem',
    display:'flex',
    flexDirection:'column',
    gap:'15px',
    h1:{
        fontSize:'2rem'
    },
    p:{
      
        color:'$red',
    }

})