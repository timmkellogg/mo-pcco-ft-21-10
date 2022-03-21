import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import SavedPage from './containers/SavedPage';
import SearchPage from './containers/SearchPage';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

import Navi from './components/Navi';
import RequireAuth from './components/RequireAuth';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navi />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route element={<RequireAuth />}>
            <Route path='/saved' element={<SavedPage />} />
            <Route path='/search' element={<SearchPage />} />
          </Route>

          <Route path='*' element={<div>404</div>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
