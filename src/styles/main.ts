import { styled } from ".";

export const MainContainer = styled('main',{
    display:'flex',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent:'center',
    gap:'20px',
    maxWidth:'1200px',
    flexDirection:'column',
    margin:'0 auto',
    '.box':{
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'center',
        gap:'20px',
        maxWidth:'1200px',
      
        margin:'0 auto',

    },
    '.search':{
        padding:'1rem',
        marginTop:'4rem',
        borderRadius:'8px'
    },
    '@media(max-width:680px)':{
        padding:'10px'
    }
    

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