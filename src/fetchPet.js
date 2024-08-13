const fetchPet = async ({ queryKey }) => {
  const id = queryKey[1];

  const apiRes = await fetch(`https://pets-v2.dev-apis.com/pets?id=${id}`);

  // if its an unsucessful request, React Router wants you to throw an error
  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json(); // no need to await as it only adds a delay here (this is an async func after all)
};

export default fetchPet;
