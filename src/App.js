import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <>
      <nav>
        <div className='d-flex justify-content-around'>
          <div>
            <h2 className='m-4'>Tarokl</h2>
          </div>
          <div>
            <ul className='d-flex'>
              <li className='m-4 list-group-item'>
                <a className='text-decoration-none text-secondary nav-list' href="https://cdn.dribbble.com/userupload/8970278/file/original
                -eac5637addcd4edd70de4ed46d029c16.jpg?resize=1024x2997&vertical=center">Feature</a>
              </li>
              <li className='m-4 list-group-item'>
                <a className='text-decoration-none text-secondary nav-list' href="https://cdn.dribbble.com/userupload/8970278/file/original
                -eac5637addcd4edd70de4ed46d029c16.jpg?resize=1024x2997&vertical=center">Price</a>
              </li>
              <li className='m-4 list-group-item'>
                <a className='text-decoration-none text-secondary nav-list' href="https://cdn.dribbble.com/userupload/8970278/file/original
                -eac5637addcd4edd70de4ed46d029c16.jpg?resize=1024x2997&vertical=center">About</a>
              </li>
              <li className='m-4 list-group-item'>
                <a className='text-decoration-none text-secondary nav-list' href="https://cdn.dribbble.com/userupload/8970278/file/original
                -eac5637addcd4edd70de4ed46d029c16.jpg?resize=1024x2997&vertical=center">Community</a>
              </li>
            </ul>
          </div>
          <div className='m-4'>
            <a href='' className='text-white btn-purple  text-decoration-none  nav-list'>Sign in</a>
          </div>
        </div>
      </nav>
      <section>
      <a href='' className='text-white btn-purple  text-decoration-none  nav-list'>Start First 30 Day Trial</a>
      </section>
    </>
  );
}

export default App;
