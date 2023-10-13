import { styled } from "..";

export const FormContainer = styled('form',{
    display:"flex",
    flexDirection:'column',
    gap:'14px',
    marginTop:'2.5rem',
    input:{
        padding:'10px',
        borderRadius:'8px',
        fontSize:22
    },
    button:{
        padding:'10px',
        borderRadius:'8px',
        background:'$green200',
        color:'$white',
        fontSize:'29px',
        cursor:'pointer'
    },
    label:{
        fontSize:'1.6rem',
        color:'$brown100'
    }

})