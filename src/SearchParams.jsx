import { useState } from "react";

const SearchParams = () => {
  const [location, setLocation] = useState(""); // the mock API works with strings, try: "Seattle, WA"

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
