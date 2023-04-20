import { useState } from "react";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchForm = ({ setRequestParams }) => {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const obj = {
          animal: formData.get("animal") ?? "",
          breed: formData.get("breed") ?? "",
          location: formData.get("location") ?? "",
        };
        setRequestParams(obj);
      }}
    >
      <label htmlFor="location">
        Location
        <input
          name="location"
          type="text"
          id="location"
          placeholder="Location"
        />
      </label>
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          name="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option value="" />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
      </label>
      <label htmlFor="breed">
        Breed
        <select id="breed" name="breed" disabled={breeds.length === 0}>
          <option value="" />
          {breeds.map((breed) => (
            <option key={breed}>{breed}</option>
          ))}
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
};

export default SearchForm;
