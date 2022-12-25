import { connect } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

function PrivateRoutes({ authedUser }) {
    const location = useLocation();
  
    return authedUser !== null ? (
        <Outlet/>
    ) : (
      <Navigate to="/login" replace state={{ path: location.pathname  || "/404" }} />
    );
  }

const mapStateToProps = ({ authedUser }) => ({
    authedUser
  });

export default connect(mapStateToProps)(PrivateRoutes)