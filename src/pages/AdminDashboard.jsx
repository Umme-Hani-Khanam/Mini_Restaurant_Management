import Navbar from "../components/Navbar";
import AddRestaurantForm from "../components/AddRestaurantForm";
import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";

function AdminDashboard() {
  const [restaurants, setRestaurants] = useState([]);
const [search, setSearch] = useState("");
const [typeFilter, setTypeFilter] = useState("");
const [parkingFilter, setParkingFilter] = useState("");
  // Load from localStorage
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("evalData")) || [];
    setRestaurants(storedData);
  }, []);
const filteredRestaurants = restaurants.filter((r) => {
  const matchesSearch =
    r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
    r.address.toLowerCase().includes(search.toLowerCase());

  const matchesType = typeFilter ? r.type === typeFilter : true;

  const matchesParking =
    parkingFilter === ""
      ? true
      : r.parkingLot === (parkingFilter === "true");

  return matchesSearch && matchesType && matchesParking;
});

  return (
    <>
    <Navbar
  search={search}
  setSearch={setSearch}
  typeFilter={typeFilter}
  setTypeFilter={setTypeFilter}
  parkingFilter={parkingFilter}
  setParkingFilter={setParkingFilter}
/>

<AddRestaurantForm restaurants={restaurants} setRestaurants={setRestaurants} />

{filteredRestaurants.map((restaurant) => (
  <RestaurantCard
    key={restaurant.restaurantID}
    restaurant={restaurant}
    isAdmin={true}
    setRestaurants={setRestaurants}
  />
))}

    </>
  );
}

export default AdminDashboard;
