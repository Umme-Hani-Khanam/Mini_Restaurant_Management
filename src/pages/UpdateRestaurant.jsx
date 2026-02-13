import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function UpdateRestaurant() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("evalData")) || [];

    const found = storedData.find(
      (item) => item.restaurantID === Number(id)
    );

    setRestaurant(found);
  }, [id]);
    if (!restaurant) return <h2>Restaurant not found</h2>;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRestaurant((prev) => ({
      ...prev,
      [name]: name === "parkingLot" ? value === "true" : value,
    }));
  };
  const handleUpdate = (e) => {
    e.preventDefault();

    if (!window.confirm("Update restaurant?")) return;

    const storedData = JSON.parse(localStorage.getItem("evalData")) || [];

    const updatedData = storedData.map((item) =>
      item.restaurantID === Number(id) ? restaurant : item
    );

    localStorage.setItem("evalData", JSON.stringify(updatedData));

    alert("Updated successfully");

    navigate("/admin/dashboard");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Update Restaurant</h2>

      <input
        name="restaurantName"
        value={restaurant.restaurantName}
        onChange={handleChange}
      />

      <input
        name="address"
        value={restaurant.address}
        onChange={handleChange}
      />

      <select name="type" value={restaurant.type} onChange={handleChange}>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select
        name="parkingLot"
        value={restaurant.parkingLot.toString()}
        onChange={handleChange}
      >
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>

      <button type="submit">Update</button>
    </form>
  );
}

export default UpdateRestaurant;
