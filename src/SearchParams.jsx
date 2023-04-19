import { useEffect, useState } from "react";
import Results from "./Results";
import SearchForm from "./SearchForm";
import requestPets from "./requestPets";

const SearchParams = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets({ setPets });
  }, []);

  return (
    <div className="search-params">
      <SearchForm setPets={setPets} />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
