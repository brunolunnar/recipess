import { NavContainer } from "@/styles/components/NavBar"

export const NavBar = ()=>{
    return(
        <NavContainer>
            <h1>LOGO</h1>
            <label htmlFor="search">Pesquise:</label>
            <input type="text" placeholder="Busque aqui" id="search"/>
        </NavContainer>
    )
}