import { CategoriesContext } from "../../Context.ts";
import { useCategories } from "@/Hook/useCategories.ts";

function App() {
  const categoriesContext = useCategories();
  return (
    <CategoriesContext.Provider
      value={categoriesContext}
    ></CategoriesContext.Provider>
  );
}

export default App;
