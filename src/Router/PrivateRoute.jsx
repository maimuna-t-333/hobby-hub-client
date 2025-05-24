// import { useContext } from 'react';
// import { Navigate } from 'react-router';
// import { AuthContext } from '../Context/AuthProvider';

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);

//   if (loading) return <div>Loading...</div>;

//   return user ? children : <Navigate to="/login" />;
// };

// export default PrivateRoute;

// src/routes/PrivateRoute.jsx
import { Navigate, useLocation } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
// import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <span className="loading loading-ball loading-xl"></span>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;

