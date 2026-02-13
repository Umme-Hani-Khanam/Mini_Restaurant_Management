import { useState, useEffect } from "react";
import RestaurantCard from "../components/RestaurantCard";
import Navbar from "../components/Navbar";

function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [parkingFilter, setParkingFilter] = useState("");

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
    <div>
      <h2>Customer Dashboard</h2>

      <Navbar
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        parkingFilter={parkingFilter}
        setParkingFilter={setParkingFilter}
      />

      {filteredRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.restaurantID} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default CustomerDashboard;
