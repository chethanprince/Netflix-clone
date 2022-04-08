import './App.css';
import Row from './components/Row';
import requests from './service/requests';

function App() {
  return (
    <div className="App">
     <h1>Netflix Clone</h1>
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending" fetchUrl={requests.fetchTrending}/>
     {/* <Row title=" Top Rated" fetchUrl={requests.fetchTopRated}/> */}
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
     {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/> */}

    </div>
  );
}

export default App;