import React from "react";
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../../utils/Auth';

function NavTabs(props) {
    const signOut = () => {
        auth0Client.signOut();
        props.history.replace('/');
    };

    return (
        <nav className="navbar navbar-dark bg-primary fixed-top">
            <Link className="navbar-brand" to="/">
                Monkey See, Monkey 2 Do
          </Link>
            {
                // logic for unauthenticated v authenticated user experience
                !auth0Client.isAuthenticated() &&
                <button className="btn btn-dark" onClick={auth0Client.signIn}>Sign In</button>
            }
            {
                auth0Client.isAuthenticated() &&
                <div>
                    <label className="mr-2 text-white">{auth0Client.getProfile().name}</label>
                    <button className="btn btn-dark" onClick={() => { signOut() }}>Sign Out</button>
                </div>
            }
        </nav>
    );

}

export default withRouter(NavTabs);