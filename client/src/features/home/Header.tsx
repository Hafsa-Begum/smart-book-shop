import Link from 'next/link';

const routes = [
  {
  id: 1,
  routeName: 'Home',
  routePath: '/'
},
  {
  id: 2,
  routeName: 'Books',
  routePath: '/books'
},
  {
  id: 3,
  routeName: 'About',
  routePath: '/about'
},
  {
  id: 4,
  routeName: 'Contact',
  routePath: '/contact'

},
  {
  id: 5,
  routeName: 'Dashboard',
  routePath: '/dashboard'
}
]

const Header = () => {
  return (
    <header className="shadow-md text-gray-600">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link className="hover:text-gray-300" href="/">
            Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            {
                routes.map(route=>(
                    <li key={route.id}>
                        <Link className="hover:text-gray-300" href={route.routePath}>
                            {route.routeName}
                        </Link>
                    </li>
                ))
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
