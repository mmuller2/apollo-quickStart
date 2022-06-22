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
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
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
const EXCHANGE_RATES = gql`
query GetExchangeRates {
  rates(currency: "USD"){
    currency
    rate
  }
}
`;
//end of query set up
//
// then we have to define a component that executes our query(GetExchangeRates)
// this function will then be added to our component tree(the function was exported to App.js)
export default function ExchangeRates(){
  const {loading,error, data} = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:</p>;
  //When the result of your query comes back, it's attached to the data property
  // rates comes from the query 
  return data.rates.map(({currency, rate})=> (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
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
