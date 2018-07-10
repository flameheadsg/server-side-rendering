import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  console.log('AUTHENTICATION STATUS IS: ' + auth);
  const authButton = auth ? (
    <a href="/api/logout">Logout&nbsp;&nbsp;</a>
  ) : (
    <a href="/api/auth/google">Log In&nbsp;&nbsp;</a>
  );

  const headerStyle = {
    float: "right",
    textDecoration: "none"
  };

  return (
    <div>
      <Link to="/">React-Redux SSR</Link>
      <div style={headerStyle}>
        <Link to="/users">Users&nbsp;&nbsp;</Link>
        <Link to="/admins">Admins&nbsp;&nbsp;</Link>
        {authButton}
      </div>
    </div>
  )
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
