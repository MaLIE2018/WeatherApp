import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route } from "react-router-dom";
import Favorites from "./components/favorites/Favorites";
import Home from "./components/home/Home";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container fluid className='App'>
        <Route path='/' exact component={Home} />
        <Route path='/favorites' exact component={Favorites} />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
