import {ApolloProvider, ApolloClient, InMemoryCache, gql} from '@apollo/client'
import Dogs from './Components/Dogs.js'
import DogSelector from './Components/DogSelector.js'
import './App.css';

  // set up apollo client 
// uri specifies the URL of our GraphQL server.
// cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache()
});
// end of apollo clirnt set up
//

// below is a test query(fetching data) using plain JS
client 
.query({
  query: gql`
  query GetDogs {
    dogs{
      id
      breed
    }
  }
  `
})
.then(result => console.log(result));
// end of data fetching
//


function App() {

  return (

    <ApolloProvider client={client}>
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
          <h2>My first Apollo app!!!</h2>
          <hr></hr>
          <h3>Dogs</h3>
          <DogSelector/>
          <Dogs/>
  
        </div>
        
      </header>
    </div>
    </ApolloProvider>
  );
}

export default App;
