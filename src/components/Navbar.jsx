import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-dark mb-5 border border-success border-3'>
      <div className='container-fluid'>
        <Link className='navbar-brand text-primary' to={{ pathName: '/' }}>
          ReviewApp
        </Link>
        <button
          className='navbar-toggler bg-light border border-tertiary'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link
                className='nav-link text-light'
                to={{
                  pathname: '/',
                }}
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-light'
                to={{
                  pathname: '/about',
                }}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-link text-light'
                to={{
                  pathname: '/',
                }}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
