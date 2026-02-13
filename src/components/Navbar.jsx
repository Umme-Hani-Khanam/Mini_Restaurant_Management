import { useRef, useEffect } from "react";

function Navbar({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  parkingFilter,
  setParkingFilter
}) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        ref={inputRef}
        placeholder="Search name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
        <option value="">All Types</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>

      <select
        value={parkingFilter}
        onChange={(e) => setParkingFilter(e.target.value)}
      >
        <option value="">Parking: All</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
    </div>
  );
}

export default Navbar;
