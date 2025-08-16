import './App.css';
import Home
 from './Home';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';


function App() {

  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello!</h1>
        <ApolloProvider client={client}>
        <Home />
        </ApolloProvider>
      </header>
    </div>
  );
}

export default App;
