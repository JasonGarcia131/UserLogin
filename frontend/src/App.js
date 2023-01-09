import Register from './features/Register';
import Login from './features/Login';
import Home from './pages/Home';
import Layout from './components/Layout';
import Missing from './pages/Missing';
import Unauthorized from './pages/Unauthorized';
import LinkPage from './pages/LinkPage';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import Profile from './pages/Profile';
import { Routes, Route } from 'react-router-dom';

const ROLES = {
  'User': 2001
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User, ROLES.Admin]} />}>
            <Route path="/" element={<Home />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="profile" element={<Profile />} />
          </Route>

        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;