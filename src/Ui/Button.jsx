import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full bg-yellow-400 text-sm font-semibold uppercase tracking-wider text-stone-800 shadow-xl transition-colors duration-300 hover:bg-yellow-300 focus:outline-0 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 ';

  const styles = {
    primary: base + ' px-4 py-2 md:px-6 md:py-3',
    small: base + ' text-xs px-3 py-2 my-3 sm:my-0 md:px-5 md:py-2.5',
    secondary:
      'inline-block rounded-full text-sm font-semibold uppercase tracking-wider text-stone-400 shadow-sm transition-colors duration-300 hover:bg-stone-300 focus:outline-0 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 px-4 py-2.5 md:px-6 md:py-3.5 border-2 hover:text-stone-800',
    round: base + ' text-sm px-2.5 py-1 my-3 sm:my-0 md:px-3.5 md:py-2 font-bold',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
