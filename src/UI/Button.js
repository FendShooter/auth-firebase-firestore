export default function Button({ Icon, classes, children, ...otherProps }) {
  return (
    <button type='button' className={classes} {...otherProps}>
      {Icon ? <Icon className='icon' /> : null} {children}
    </button>
  );
}
