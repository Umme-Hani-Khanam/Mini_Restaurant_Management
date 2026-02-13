import { useState } from "react";

function AddRestaurantForm({ restaurants, setRestaurants }) {
  const [restaurantName, setRestaurantName] = useState("");
  const [address, setAddress] = useState("");
  const [type, setType] = useState("Rajasthani");
  const [parkingLot, setParkingLot] = useState("true");
  const [image, setImage] = useState(
    "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
  );

  const handleAdd = (e) => {
    e.preventDefault();

    if (!restaurantName || !address) {
      alert("All fields required");
      return;
    }

    const newRestaurant = {
      restaurantID: Date.now(), // auto-generate ID
      restaurantName,
      address,
      type,
      parkingLot: parkingLot === "true",
      image,
    };

    const updatedRestaurants = [...restaurants, newRestaurant];

    localStorage.setItem("evalData", JSON.stringify(updatedRestaurants));
    setRestaurants(updatedRestaurants);

    alert("Restaurant added successfully");

    // Clear form
    setRestaurantName("");
    setAddress("");
  };

  return (
    <form onSubmit={handleAdd}>
      <input
        type="text"
        placeholder="Restaurant Name"
        value={restaurantName}
        onChange={(e) => setRestaurantName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select value={parkingLot} onChange={(e) => setParkingLot(e.target.value)}>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default AddRestaurantForm;
