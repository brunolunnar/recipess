import { NavContainer } from "@/styles/components/NavBar";
import Link from "next/link";

export const Header = () => {
  return (
    <NavContainer>
      <div className="container">
        <h1>LOGO</h1>
        <nav className="sessions-box">
          <div className="button-box">
            <Link href={"/"}>
              <button>Home</button>
            </Link>
            <Link href={"/register"}>
              <button>Cadastre uma receita</button>
            </Link>
          </div>

          <label htmlFor="search">Pesquise:</label>
          <input type="text" placeholder="Busque aqui" id="search" />
        </nav>
      </div>
    </NavContainer>
  );
};
