import {gql, useQuery} from '@apollo/client'


// ------fetching data using useQuery----
//set up the query:
export const GET_DOGS = gql`
query GetDogs {
  dogs{
    id
    breed
  }
}
`;
//end of query set up
//
// then we have to define a component that executes our query(GetExchangeRates)
// this function will then be added to our component tree(the function was exported to App.js)
export default function Dogs(){
    const {loading,error, data} = useQuery(GET_DOGS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error:</p>;
    //When the result of your query comes back, it's attached to the data property
    // rates comes from the query 
    return data.dogs.map(({breed, id})=> (
      <div key={id}>
        <p>
          {breed}: {id}
        </p>
      </div>
   
    ));
  }
  