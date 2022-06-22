import {useQuery, gql} from '@apollo/client'
import {useState} from 'react'
import { DogPhoto } from './DogPhoto';

//set up the query:
const GET_DOGS = gql`
query GetDogs {
  query GetDogs{
    dogs{
      id
      breed
    }
  }  
`;
//

//------start of components that execute our fetches---------
// then we have to define a component that executes our query(GetDogs)
// this function will then be added to our component tree(the function was exported to App.js)
export default function Dog(){
    const {loading,error, data} = useQuery(GET_DOGS);
// this holds the state of the selected dog
    const [selectedDog, setSelectedDog] = useState(null)

// this saves the selected dog in drop down menu
  function onDogSelected({target}){
    setSelectedDog(target.value);
  };

// note that the line below differs from main
    if (loading) return 'Loading...';
// error will come from useQuery
    if (error) return `error! ${error.message}`;
//When the result of your query comes back, it's attached to the data property
    return (
        <>
        <h3>Choose your dog</h3>
      <select name='dog' onChange={onDogSelected}>
  {data.dogs.map((dog)=> (
    <option key={dog.id} value={dog.breed}>
      {/* displays dog breed */}
      {dog.breed} 
    </option>
  ))}
  </select>
  <div>
      {selectedDog && <DogPhoto breed={selectedDog}/>}
      <Dog onDogSelected={onDogSelected} />
</div>
</>
  ); 
  }

