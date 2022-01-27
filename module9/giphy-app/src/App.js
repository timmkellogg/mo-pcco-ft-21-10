import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import SavedPage from './containers/SavedPage';
import SearchPage from './containers/SearchPage';

import Navi from './components/Navi';

function App() {
  return (
    <Router>
      <Navi />
      <Routes>
          <Route index element={<div>Homepage</div>} />
          <Route path='/saved' element={<SavedPage />} />
          <Route path='/search' element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
