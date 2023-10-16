import { styled } from ".";

export const MainRecipeIdContainer = styled("main", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth:'1200px',
  margin:'0 auto',
  marginTop:'3rem',
      '.title': {
      fontFamily: "Just Another Hand",
      fontSize: "4.4rem",
      fontWeight: "500",
      padding:'10px'
    },
  '.recipe-box': {
    padding: "0px 13px",
    background: "bisque",
    display: "flex",
    alignItems: "center",

    flexDirection: "column",
  },
  h2:{
    fontSize:'1.7rem'
  },

  img: {
    width: "55%",
    borderRadius: "0 0 27rem 29rem",
  },

'.information-box':{
    display:"flex",
    flexDirection:'row',
  marginTop:'1.3rem',
    width:'100%',
    justifyContent:'space-between',
    gap:'10px',
    padding:"10px",
    background:'$brown100'
    
},
'.prep':{
    borderRight:'5px solid black',
    width:'50%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    gap:'18px',
},
'.ingri':{
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
    gap:'17px',
    borderRadius:'5px',
    width:'44%' 
},
'.buttons-box':{
    display:'flex',
    flexDirection:'unset',
    gap:'15px',
  

},
'@media(max-width:680px)':{
  img:{
    width:'80%',
    height: '30%',
  },
  '.information-box':{
    flexDirection:'column-reverse',
    width:-1,
    padding:'14px 0' 
  }, 
   '.prep':{
    width:'100%',

    borderRight:'none',
  },
  '.ingri':{
    width:'100%',
  },
}

});
