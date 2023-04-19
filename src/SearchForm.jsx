import { useState } from "react";
import useBreedList from "./useBreedList";
import requestPets from "./requestPets";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchForm = ({ setPets }) => {
  const [location, setLocation] = useState(""); // the mock API works with strings, try: "Seattle, WA"
  const [animal, setAnimal] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        requestPets({ animal, breed, location, setPets });
      }}
    >
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
      <label htmlFor="animal">
        Animal
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
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
        <select
          id="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          disabled={breeds.length === 0}
        >
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
