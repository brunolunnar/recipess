import { styled } from ".";

export const MainRecipeIdContainer = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop:'3rem',
  div: {
    padding: "0px 13px",
    background: "bisque",
    display: "flex",
    alignItems: "center",
    h1: {
      fontFamily: "Just Another Hand",
      fontSize: "4.4rem",
      fontWeight: "500",
    },
    flexDirection: "column",
  },
  h2:{
    fontSize:'1.7rem'
  },

  img: {
    width: "100%",
    borderRadius: "0 0 27rem 29rem",
  },

'.information-box':{
    display:"flex",
    flexDirection:'row',
  marginTop:'1.3rem',
    width:'100%',
    justifyContent:'space-between',
    gap:'10px',
    padding:"10px"
    
},
'.prep':{
    borderRight:'5px solid black',
    width:300,
    gap:'18px'
},
'.ingri':{

    
    borderRadius:'5px',
    width:'44%' 
},
'.buttons-box':{
    display:'flex',
    flexDirection:'unset',
    gap:'15px'

}

});
