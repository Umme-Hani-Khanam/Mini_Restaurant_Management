import { useState } from "react";

export default function AddRestaurantForm({ restaurants, setRestaurants }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const add = (e) => {
    e.preventDefault();
    const newData = [...restaurants, { id: Date.now(), name, address }];
    localStorage.setItem("data", JSON.stringify(newData));
    setRestaurants(newData);
    setName("");
    setAddress("");
  };

  return (
    <form onSubmit={add}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <button>Add</button>
    </form>
  );
}
