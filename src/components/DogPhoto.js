import {useQuery, gql} from '@apollo/client'



const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
//------start of components that execute our fetches---------
// then we have to define a component that executes our query(GetDogs)
// this function will then be added to our component tree(the function was exported to App.js)
export function DogPhoto({breed}){
    const {loading, error, data, refetch, networkStatus} = useQuery(
      GET_DOG_PHOTO,
      {
        variables: {breed}, 
        notifyOnNetworkStatusChange: true
        // pollInterval: 500
      }
    );
    if (networkStatus === 4) return <p>Refetching!</p>
    if (loading) return null;
    if (error) return `Error!: ${error}`;
    return(
      <div>
        <div>
          <img src={data.dog.displayImage} style={{height:100, width:100}} alt="go away alt"/>
        </div>
        <button onClick={()=> refetch()}>Refetch!</button>
      </div>
    );
  }
  //------end of components that execute our fetches---------