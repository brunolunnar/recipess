import { styled } from "..";

export const CardContainer = styled('div',{
    color:'black',
    backgroundColor:'$brown100',
    fontWeight:'bold',
    fontSize:'1.3rem',
    display:'flex',
    alignItems:'center',
gap:'2.8rem',
    flexDirection:'column',
    height:'300px',
    width:'200px',
    position:'relative',
    borderRadius: '50px',
    marginTop:'30px',
    boxShadow: '3px 33px 39px -7px rgba(0, 0, 0, 0.75)',

    img:{
        width:'100%' 
    },
    '.time-box':{
        background:'$red',
        width:'50px',
        height:'50px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        padding:'10px',
        borderRadius:'50%',
        position:'absolute',
        top:'40%',
    },
    '.box':{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        gap:'10px',
    },
    h2:{
        fontFamily:'Just Another Hand',
        fontSize:'2.4rem',
        fontWeight: '500',
    },
    p:{
        fontFamily:'Jua',
  
    },
    a:{
        fontFamily:'Just Another Hand',
        color:'$green200',
        fontSize:'2.4rem',
        fontWeight: '500',
    }


})

