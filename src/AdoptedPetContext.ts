import { createContext } from "react";
import { Pet } from "./APIResponsesTypes";

const AdoptedPetContext = createContext<[Pet | null, (adoptedPet: Pet) => void]>([
  {
    id: 1337,
    name: "Fido",
    animal: "dog",
    description: "Lorem ipsum",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

// ☝️ The parameters passed in createContext() are the default value, and would only be used in case this context is used
// in the absence of a provider upper in the component tree. This might be usefull during testing too, so you can test
// the createContext without having to setup a Context Provider.
// An alternative to this would be:
// const AdoptedPetContext = createContext<[Pet, (adoptedPet: Pet) => void] | null>(null)
// But you would have to check against null value everywhere else that AdoptedPetContext might be used. So this has its trade offs.

export default AdoptedPetContext;
