import { gql, useQuery } from "@apollo/client";

//query
const GET_DOG_PHOTO = gql`
  query dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;
// ----function to execute the query----
export default function DogPhoto({ breed }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      notifyOnNetworkStatusChange: true,
      // pollInterval: 2000
    }
  );

  if (networkStatus === 4) return <p>Refetching!</p>;
  if (loading) return null;
  if (error) return `Error!: ${error}`;
  // ---- end of function to execute the query----

  return (
    <div>
      <div>
        {!error && (
          <img
            src={data.dog.displayImage}
            style={{ height: 100, width: 100 }}
            alt="no alt"
          />
        )}
      </div>
      <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}
