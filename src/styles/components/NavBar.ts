import { styled } from "..";

export const NavContainer = styled("header", {
  background: "$brown100",
  textAlign: "center",
  width: "100%",
  alignItems:'center',
  justifyContent:'center',
  position: "relative",
  overflow: "hidden",
  borderRadius: "0 0 85% 85% / 30%",
  display:'flex',

  '.container':{
    display:"flex",
    maxWidth:'1200px',
    justifyContent:'space-between',
    width:'100%',
    alignItems:'center',

  },

  
 
  '.sessions-box':{
    display:'flex',
  
    alignItems:'center',
  },
  '.button-box':{
    display:'flex',
    gap:'15px',
    alignItems:'center',
    justifyContent:'center',
  },
  h1: {
    fontFamily: "Dancing Script, cursive",
    fontSize: "40px",
    marginBottom: "30px",
  },

  "h3, p, label": {
    fontFamily: "Open Sans, sans-serif",
    marginBottom: "30px",
  },

  'button, input': {
    width :'190px',
    border: "none",
    outline: "none",
    padding: "10px 20px",
    borderRadius: "50px",
    color: "#333",
    background: "#fff",
    marginBottom: "50px",
    boxShadow: "0 3px 20px 0 #0000003b",
    cursor: "pointer",
  },
  a:{
    display:'flex',
    alignItems:'center',

  }
});
