import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql
  
} from '@apollo/client'


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// set up apollo client 
// uri specifies the URL of our GraphQL server.
// cache is an instance of InMemoryCache, which Apollo Client uses to cache query results after fetching them.
const client = new ApolloClient({
  uri: 'https://71z1g.sse.codesandbox.io/',
  cache: new InMemoryCache()
});
// end of apollo clirnt set up
//
// below is a test query(fetching data) using plain JS
client 
.query({
  query: gql`
  query GetRates{
    rates(currency: "USD"){
      currency
    }
  }
  `
})
.then(result => console.log(result));
// end of data fetching
//
// ------fetching data using useQuery----
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
//end of query set up
//
// then we have to define a component that executes our query(GetDogs)
// this function will then be added to our component tree(the function was exported to App.js)
export default function Dogs(){
  const {loading,error, data} = useQuery(GET_DOGS);
  // note that the line below differs from main
  if (loading) return 'Loading...';
  if (error) return `error! ${error.message}`;
  //When the result of your query comes back, it's attached to the data property
  // rates comes from the query 
  return (
    <select name='dog' onChange={onDogSelected}>
{data.dogs.map((dog)=> (
  <option key={dog.id} value={dog.breed}>
    {/* displays dog breed */}
    {dog.breed} 
  </option>
))}
</select>
); 
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
