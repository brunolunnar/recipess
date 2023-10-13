import { Ceil } from "faunadb";
import { styled } from "..";

export const HeaderContainer = styled("header", {
  background: "$brown100",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "100vw",
  input:{
    padding:'10px',
    borderRadius:'8px'
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
    fontFamily:'Jua'
  }
});
export const ButtonContainer = styled('div',{
  background:'$brown100',
  display:"flex",
  alignItems:'center',
  justifyContent:"center",
  gap:'1.6rem'
})