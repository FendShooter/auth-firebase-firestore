import {
  AtSymbolIcon,
  LockClosedIcon,
  GlobeAltIcon,
  OfficeBuildingIcon,
  TruckIcon,
} from '@heroicons/react/solid';
import Button from '../UI/Button';
import { auth, provider, createUserProfilDocument } from '../firebase/firebase';
import { useEffect, useState } from 'react';
export default function Form() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      setCurrentUser(userAuth);
      if (userAuth) {
        const userRef = await createUserProfilDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(null);
    });
  }, []);
  const signUpWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => res)
      .catch((err) => console.log(err));
  };
  const submitHandler = async (events) => {
    events.preventDefault();
    const { email, password } = inputs;
    const validForm = email && password;
    if (!validForm) return;
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfilDocument(response);
      setInputs({ email: '', password: '' });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='form__container'>
      <form onSubmit={submitHandler}>
        <div className='form__group'>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='text'
              className='form__control'
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
            <AtSymbolIcon className='icon' />
          </div>
        </div>
        <div className='form__group'>
          <div>
            <label htmlFor='email'>Password:</label>
            <input
              type='text'
              className='form__control'
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
            <LockClosedIcon className='icon' />
          </div>
        </div>
        <div className='btn-container'>
          <Button classes='btn--primary' type='submit'>
            Create an account
          </Button>
        </div>
        <div className='divider'>
          <span>Or sign up with</span>
        </div>
        <div className='btn-container'>
          <Button
            classes='btn-other'
            Icon={GlobeAltIcon}
            onClick={signUpWithGoogle}
          >
            Google
          </Button>
          <Button classes='btn-other' Icon={OfficeBuildingIcon}>
            Apple
          </Button>
          <Button classes='btn-other' Icon={TruckIcon}>
            other
          </Button>
        </div>
      </form>
    </div>
  );
}
