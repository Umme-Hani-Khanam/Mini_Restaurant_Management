import { useNavigate } from "react-router-dom";

export default function RestaurantCard({ restaurant, isAdmin, setRestaurants }) {
  const navigate = useNavigate();

  const del = () => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    const updated = data.filter((r) => r.id !== restaurant.id);
    localStorage.setItem("data", JSON.stringify(updated));
    setRestaurants(updated);
  };

  return (
    <div>
      <h3>{restaurant.name}</h3>
      <p>{restaurant.address}</p>

      {isAdmin && (
        <>
          <button onClick={() => navigate(`/admin/update/${restaurant.id}`)}>Update</button>
          <button onClick={del}>Delete</button>
        </>
      )}
    </div>
  );
}
