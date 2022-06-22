
import './App.css';
import Dog from './components/Dog.js'



import { ApolloClient, InMemoryCache, ApolloProvider,gql} from '@apollo/client' 

function App() {
  // set up apollo client 
// uri specifies the URL of our GraphQL server.
// cache is an instance of InMemoryCache, which Apollo 
//Client uses to cache query results after fetching them.
  // const client = new ApolloClient({
  //   uri: 'https://71z1g.sse.codesandbox.io/',
  //   cache: new InMemoryCache()
  // });
  // end of apollo client set up
  //
  // below is a test query(fetching data) using plain JS
// client 
// .query({
//   query: gql`
//   query GetDogs{
//     query GetDogs {
//       dogs{
//         id
//         breed
//       }
//     }
//   `
// })
// .then(result => console.log(result));
// //------end fetching data using plain JS----



  return (
    
    <div className="App">
      <header className="App-header">
        
      <a
          className="App-link"
          href="https://www.apollographql.com/docs/react/get-started/"
          target="_blank"
          rel="noopener noreferrer"
        >
          This was created from
        </a>
        <div>
          <h2>QUERIES</h2>
        </div>
      </header>
      {/* <Dog/> */}
    </div>
     
  
  );
}

export default App;
