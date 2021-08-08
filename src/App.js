import React,{useEffect,useState} from "react";
import Recipe from "./recipe";
import './App.css';

function App() {
  // const APP_ID = "e4ba6739";
  // const APP_KEY = "ef5add9c1af6afdbd7191fd1ff8bbd6d";

  // const exampleReq = "https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=e4ba6739&app_key=ef5add9c1af6afdbd7191fd1ff8bbd6d";

  // const [counter,setCounter] = useState(0);
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('chicken');

  useEffect(() => {
      getRecipes();
  },[query]);

    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=e4ba6739&app_key=ef5add9c1af6afdbd7191fd1ff8bbd6d`);

      const data = await response.json();

      setRecipes(data.hits);
      console.log(data.hits);
      
    };

    const updateSearch = e => {
      setSearch(e.target.value);
      // console.log(search);
    };

    const getSearch = e => {
      e.preventDefault();
      setQuery(search);
      setSearch('');
    };

  return (
    <div className="App">
      <form onSubmit = {getSearch} className = "search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className = "recipes">

      {recipes.map(recipe => (
        <Recipe
        key={recipe.recipe.image}
        title= {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients}
        />
        ))}
        </div>
    </div>
  );
}

export default App;
