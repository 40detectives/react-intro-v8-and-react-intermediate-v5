export default async function requestPets({
  animal = "",
  breed = "",
  location = "",
  setPets,
}) {
  const res = await fetch(
    `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();

  setPets(json.pets);
}
