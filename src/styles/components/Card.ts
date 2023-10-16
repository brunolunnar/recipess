import { styled } from "..";

export const CardContainer = styled("div", {
  color: "black",
  backgroundColor: "$white",
  fontWeight: "bold",
  fontSize: "1.3rem",
  display: "flex",
  alignItems: "center",
  gap: "2.8rem",
  flexDirection: "column",
  height: "300px",
  width: "250px",
  position: "relative",
  borderRadius: "5px",
  marginTop: "30px",

  transition: 'transform 100ms linear, 200ms ease-in-out',
  transform: 'ranslate(-2px, 0px)',
    '&:hover':{
        transform: 'scale(1.08)',
        boxShadow: "3px 33px 39px -7px rgba(0, 0, 0, 0.75)",
    },
  img: {
    width: "100%",
  },
  ".time-box": {
    background: "$red",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    borderRadius: "50%",
    position: "absolute",
    top: "40%",
    border:'2px solid '
  },
  ".box": {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
  },
  h2: {
    fontFamily: "Just Another Hand",
    fontSize: "2.4rem",
    fontWeight: "500",
  },
  p: {
    fontFamily: "Jua",
    color:'$white'
  },
  a: {
    fontFamily: "Just Another Hand",
    color: "$green200",
    fontSize: "2.4rem",
    fontWeight: "500",
  },
  span:{
   fontSize:'1rem',
   color:'black'
  }

});
