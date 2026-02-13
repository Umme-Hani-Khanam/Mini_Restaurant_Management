import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";
import AddRestaurantForm from "../components/AddRestaurantForm";

export default function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setRestaurants(JSON.parse(localStorage.getItem("data")) || []);
  }, []);

  const filtered = restaurants.filter(
    (r) =>
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <AddRestaurantForm restaurants={restaurants} setRestaurants={setRestaurants} />

      {filtered.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} isAdmin setRestaurants={setRestaurants} />
      ))}
    </div>
  );
}
