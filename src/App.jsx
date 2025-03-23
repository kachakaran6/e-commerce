import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import "./index.css";

// Database
import products from "./db/data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // input Filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
  );

  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Buttons
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </div>
  );
}

export default App;
