import { Ceil } from "faunadb";
import { styled } from "..";

export const HeaderContainer = styled("header", {
  background: "$brown100",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding:'10px',


  input:{
    padding:'10px',
    borderRadius:'8px'
  },
    '@media(max-width:680px)':{
    flexDirection:'column'
  }
});

export const Container = styled("section", {
  maxWidth: "1200px",
  padding: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  div:{
      display: "flex",
  alignItems: "center",
  },
  h1:{
    fontSize:'4rem',
    fontFamily:'Jua',
    cursor:'pointer',
  },
  '@media(max-width:680px)':{
    display:'flex',
    flexDirection:'column',
    width:'0',
    input:{
      marginTop:'1rem'
    },
    h1:{
      textAlign:'center',
      fontSize: '3rem',
      padding:'10px'
    },

    div:{
  
      flexDirection:'column'
    }
  }
});
export const ButtonContainer = styled('div',{

  display:"flex",
  alignItems:'center',
  justifyContent:"center",
  gap:'1.6rem'
})