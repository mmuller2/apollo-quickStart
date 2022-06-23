import { useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_DOGS } from "./Dogs";
import DogPhoto from "./DogPhoto";

export default function DogSelector() {
  const [selectedDog, setSelectedDog] = useState(null);
  // const [getDog, { loading, error, data }] = useLazyQuery(GET_DOGS);
  const { loading, error, data } = useQuery(GET_DOGS);

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <select name="dog" onChange={onDogSelected}>
        {data?.dogs.map((dog) => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
      {/*Only render <DogPhoto/> only if selectedDog is truthy. Initial state of selectedDog is null! */}
      {selectedDog && <DogPhoto breed={selectedDog} />}
    </>
  );
}
