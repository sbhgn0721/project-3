import auth0 from 'auth0-js';
//import Callback from './Callback'


class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: 'young-wave-7408.auth0.com',
      audience: 'https://young-wave-7408.auth0.com/api/v2/',
      clientID: 'mO4o82RWTjPlqoNtm_Ub9zIBk7VRKoin',
      responseType: 'token',
      redirectUri: 'https://still-tor-34851.herokuapp.com/callback',
      scope: 'openid profile'
    });

    console.log("rung authorize", this.auth0);

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.test = new Date().getTime();
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  isAuthenticated() {
    return new Date().getTime() < localStorage.test;
  }

  signIn() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash({hash: window.location.hash},(err, authResult) => {
        console.log('auth result',authResult, 'error?', err);
        if (err) return reject(err);
        // if (!authResult || !authResult.idToken) {
        //   return reject(err);
        // }
        this.setSession(authResult);
        resolve();
      });
    })
  }

  setSession(authResult) {
    this.idToken = authResult.idToken;
    this.profile = authResult.idTokenPayload;
    // set the time that the id token will expire at
    this.expiresAt = new Date().getTime()+authResult.expiresIn*1000;
    localStorage.test= this.expiresAt;
  }

  signOut() {
    localStorage.test=0;
    this.auth0.logout({
      returnTo: 'https://still-tor-34851.herokuapp.com',
      clientID: 'mO4o82RWTjPlqoNtm_Ub9zIBk7VRKoin',
    });
  }

  silentAuth() {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) return reject(err);
        this.setSession(authResult);
        resolve();
      });
    });
  }
}


const auth0Client = new Auth();

export default auth0Client;
