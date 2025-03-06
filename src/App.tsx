import Ingredients from "./components/Ingredients";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="flex p-5 gap-3 min-h-screen">
      <Recipes />
      <Ingredients />
    </div>
  );
}

export default App;
