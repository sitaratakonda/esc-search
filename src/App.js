import './App.css';
import SearchBox from './SearchBox/SearchBox';
import DetailsPage from './DetailsPage/DetailsPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={SearchBox}></Route>
        <Route path="/details/:item" Component={DetailsPage}></Route>
      </Routes>
    </Router>
      
    
  );
}

export default App;
