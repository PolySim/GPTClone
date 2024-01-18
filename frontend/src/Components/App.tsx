import { CategoriesContext } from "../Context.ts";
import { useCategories } from "@/Hook/useCategories.ts";
import { Container } from "@/Components/styled.ts";
import Menu from "@/Components/Menu/Menu.tsx";

function App() {
  const categoriesContext = useCategories();
  return (
    <CategoriesContext.Provider value={categoriesContext}>
      <Container>
        <Menu />
      </Container>
    </CategoriesContext.Provider>
  );
}

export default App;
