export default function Button({ Icon, classes, children }) {
  return (
    <button type='button' className={classes}>
      {Icon ? <Icon className='icon' /> : null} {children}
    </button>
  );
}
