import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Results from "./Results";
import SearchForm from "./SearchForm";
import fetchSearch from "./fetchSearch";

const SearchParams = () => {
  const [requestParams, setRequestParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const results = useQuery(["search", requestParams], fetchSearch);

  const pets = results?.data?.pets ?? [];

  return (
    <div className="search-params">
      <SearchForm
        /* requestParams={requestParams} */
        setRequestParams={setRequestParams}
      />
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
