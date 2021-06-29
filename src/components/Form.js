import {
  AtSymbolIcon,
  LockClosedIcon,
  GlobeAltIcon,
  OfficeBuildingIcon,
  TruckIcon,
} from '@heroicons/react/solid';
import Button from '../UI/Button';
export default function Form() {
  return (
    <div className='form__container'>
      <form>
        <div className='form__group'>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='text' className='form__control' />
            <AtSymbolIcon className='icon' />
          </div>
        </div>
        <div className='form__group'>
          <div>
            <label htmlFor='email'>Password:</label>
            <input type='text' className='form__control' />
            <LockClosedIcon className='icon' />
          </div>
        </div>
        <div className='btn-container'>
          <Button classes='btn--primary'>Create an account</Button>
        </div>
        <div className='divider'>
          <span>Or sign up with</span>
        </div>
        <div className='btn-container'>
          <Button classes='btn-other' Icon={GlobeAltIcon}>
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
