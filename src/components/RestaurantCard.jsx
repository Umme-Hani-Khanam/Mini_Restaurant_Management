import { useNavigate } from "react-router-dom";

function RestaurantCard({ restaurant, isAdmin, setRestaurants }) {
   const navigate = useNavigate();

  const handleDelete = () => {
   
    if (!window.confirm("Are you sure you want to delete?")) return;

    const storedData = JSON.parse(localStorage.getItem("evalData")) || [];

    const updatedData = storedData.filter(
      (item) => item.restaurantID !== restaurant.restaurantID
    );

    localStorage.setItem("evalData", JSON.stringify(updatedData));
    setRestaurants(updatedData);

    alert("Deleted successfully");
  };

  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <img src={restaurant.image} width="150" />
      <h3>{restaurant.restaurantName}</h3>
      <p>{restaurant.address}</p>
      <p>Type: {restaurant.type}</p>
      <p>
        Parking: {restaurant.parkingLot ? "Available" : "Not Available"}
      </p>

      {isAdmin && (
  <>
    <button onClick={() => navigate(`/admin/restaurants/update/${restaurant.restaurantID}`)}>
      Update
    </button>

    <button onClick={handleDelete}>Delete</button>
  </>
)}

    </div>
  );
}

export default RestaurantCard;
