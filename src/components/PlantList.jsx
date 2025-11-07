import { useState } from "react";
import PlantCard from "./PlantCard";

export default function PlantList({ plants, addToCart }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedPlants = [...plants].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "type") return a.type.localeCompare(b.type);
    return 0;
  });

  return (
    <section className="plant-list">
      <h2>Available Plants</h2>

      <div className="sort-controls">
        <label htmlFor="sort">Sort by: </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="name">Name (A–Z)</option>
          <option value="type">Type</option>
        </select>
      </div>

      <div className="grid">
        {sortedPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}
