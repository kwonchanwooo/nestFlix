import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDJaDrv1dupPtUQg-GP6Y1ucKqOt8GFcS8',
	authDomain: 'login-toy-d029c.firebaseapp.com',
	projectId: 'login-toy-d029c',
	storageBucket: 'login-toy-d029c.appspot.com',
	messagingSenderId: '812775194682',
	appId: '1:812775194682:web:2bcca0178323624626f503',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth();

export default app;
export { auth };
