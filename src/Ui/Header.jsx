import { Link } from 'react-router-dom';
import SearchOrder from '../Features/Order/SearchOrder';
import Username from '../Features/User/Username';
export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6 flex-wrap">
      <Link className="tracking-widest" to="/">
        fast pizza Co. logo
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}
