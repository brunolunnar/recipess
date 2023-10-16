import { useState, useEffect } from "react";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NotProduct } from "@/components/NotProduct";
import { Loading } from "@/components/loading/index";
import { globalStyle } from "@/styles/global";
import { MainContainer } from "@/styles/main";

globalStyle();

function Home() {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/getRecipe");
        const data = await response.json();
        setRecipes(data.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = recipes.filter((recipe) =>
      recipe.data.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRecipes(filtered);
  }, [searchQuery, recipes]);

  return (
    <>
      <Header />
      <MainContainer>
        {loading ? (
          <Loading />
        ) : recipes.length === 0 ? (
          <NotProduct />
        ) : (
          <>
            <form>
              <input
              className="search"
                type="text"
                placeholder="Busque aqui uma receita"
                id="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <div className="box">
              {filteredRecipes.map((recipe) => (
                <Card key={recipe.id} recipe={recipe} />
              ))}
            </div>
          </>
        )}
      </MainContainer>
      <Footer />
    </>
  );
}

export default Home;
