import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import ceo from "./images/ceo.jpg";
import bookReading from "./images/book-reading.png";
import webpage from "./images/web-page.png";
function App() {
  return (
    <div>
      <nav>
        <div className='d-flex justify-content-around'>
          <div className="m-2">
            <a href="" className='h2 text-decoration-none'>Tarokl</a>
          </div>
          <div>
            <ul className='d-flex'>
              <li className=' list-group-item i-m'>
                <a className='text-decoration-none m-4 text-secondary nav-list' href="section3">Feature</a>
              </li>
              <li className=' list-group-item i-m'>
                <a className='text-decoration-none m-4 text-secondary nav-list' href="">Price</a>
              </li>
              <li className=' list-group-item i-m'>
                <a className='text-decoration-none m-4 text-secondary nav-list' href="">About</a>
              </li>
              <li className=' list-group-item i-m'>
                <a className='text-decoration-none m-4 text-secondary nav-list' href="">Community</a>
              </li>
            </ul>
          </div>
          <div className='m-2'>
            <a href='' className='text-white btn-purple text-decoration-none nav-list'>Sign in</a>
          </div>
        </div>
      </nav>
      <section id="section-1" className="text-center mt-5 ">
        <a href='' className='text-decoration-none start-btn'>Start First 30 Day Trial</a>
        <h1 className="font-60 mt-4">Increase Productivity <br /> To Done All The Task <span className='gradient-text'>Instantly</span></h1>
        <p className="text-purple mt-3 mb-3">Cranberry is butlt for every member of your project team to plan. manage
          <br />track. and release great results</p>
        <div className='mt-5'>
          <a className='text-white btn-purple text-decoration-none nav-list' href=''>Start First Trial</a>
        </div>
      </section>
      <section className='mt-100'>
        <div className="bg-purple">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="mt-3 mb-2">Boost Productivity <br /> Everyday</h2>
                <div className="d-flex mt-5 mb-3">
                  <div className="pinl-dot mt-2">
                  </div>
                  <div>
                    <h3>Task Time Planing</h3>
                    <p className="text-purple">Every member of your teamto plan,<br />manage track, and release.</p>
                  </div>
                </div>
                <div className="d-flex mt-3 mb-3">
                  <div className="purple-dot mt-2 ">
                  </div>
                  <div>
                    <h3>Costomizable Views </h3>
                    <p className="text-purple">Built member of your teamto plan,
                      <br />manage track,  manage and release.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className=" p-4 ceo-box">
                  <div className="d-flex">
                    <div>
                      <img src={ceo} className="ceo" alt="ceo" />
                    </div>
                    <div className="ml-20 mt-3">
                      <h3 className="text-white">Shawn Micheal</h3>
                      <h5 className="text-white">CEO, Dipple</h5>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="white-line1 mt-2 "></div>
                    <div className="white-line2 mt-2 "></div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="white-line3 mt-2 "></div>
                    <div className="white-line4 mt-2 "></div>
                    <div className="white-line5 mt-2 "></div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="white-line6 mt-2 "></div>
                  </div>
                  <p className="text-white mt-5 h5"><span className="bi bi-telegram teligram mx-2">
                  </span>09 June 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section-2" className='mt-100'>
        <div className="mtb-150">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1 className="mt-3 mb-2">Start work with your <br /> teammates effectivly <br />and seamlesly</h1>
                <p className="text-purple mt-5 mb-5">Every  your member of work with your teamto your plan,
                  <br />manage track, and release.</p>
                <a className='text-white btn-purple text-decoration-none nav-list' href=''>Explore Features</a>
              </div>
              <div className="col">
                <div className=" p-4">
                  <div className="d-flex">
                    <div className="ml-20 mt-3">
                      <h3>Shawn Micheal</h3>
                      <h5>CEO, Dipple</h5>
                    </div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="white-line1 mt-2 bg-primary "></div>
                    <div className="white-line2 mt-2 bg-danger "></div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="white-line3 mt-2 bg-secondary "></div>
                    <div className="white-line4 mt-2 bg-warning "></div>
                    <div className="white-line5 mt-2 bg-success "></div>
                  </div>
                  <div className="d-flex mt-4">
                    <div className="white-line6 mt-2 bg-info "></div>
                  </div>
                  <p className=" mt-5 h5"><span className="bi bi-telegram teligram mx-2"></span>09 June 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="section3" className="mtb-150 mt-100">
        <div className=" bg-clr-purple">
          <div className="row">
            <div className="col">
            </div>
            <div className="col">
              <h1 className="mt-3 mb-2 pt-100">Start work with your <br /> teammates effectivly
                <br />and seamlesly</h1>
              <p className="text-purple mt-5 mb-5 pb-5">Every  your member of work with your teamto your plan,
                <br />manage track, and release.</p>
            </div>
          </div>
        </div>
        <img src={webpage} className="web-page mb-5" alt="webpage" />
      </section>
      <section className='mt-100'>
        <center>
          <h1 className=" font-50 mt-5">Frequently asked questions <br />and answers</h1>
        </center>
        <div className="container">
          <div className="row">
            <div className="col mt-5">
              <h2 className="mt-3 mb-2"><span className="bi bi-dash-lg mx-2"></span>How this website work?</h2>
              <p className="text-purple mt-4 mb-5 pb-2">Every  your member of work with your teamto your plan,
                <br />manage track, and release.</p>
              <h2 className="mt-3 mb-2"><span className="bi bi-dash-lg mx-2"></span>How this website work?</h2>
              <p className="text-purple mt-4 mb-5 pb-5">Every  your member of work with your teamto your plan,
                <br />manage track, and release.</p>
            </div>
            <div className="col mt-5">
              <h2 className="mt-3 mb-2"><span className="bi bi-dash-lg mx-2"></span>How this website work?</h2>
              <p className="text-purple mt-4 mb-5 pb-2">Every  your member of work with your teamto your plan,
                <br />manage track, and release.</p>
              <h2 className="mt-3 mb-2"><span className="bi bi-dash-lg mx-2"></span>How this website work?</h2>
              <p className="text-purple mt-4 mb-5 pb-5">Every  your member of work with your teamto your plan,
                <br />manage track, and release.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-100'>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className=" font-50 mt-60 mb-2">Start work with your <br /> teammates effectivly <br />and seamlesly</h1>
              <p className="text-purple mt-5 mb-5">Every  your member of work with your teamto your plan,
                <br />manage track, and release.</p>
              <a className=' text-decoration-none mac' href=''> <i className='bi bi-apple mr-10 font-25'></i>Mac OS</a>
              <a className=' text-decoration-none mac ms-4' href=''> <i className='bi bi-windows mr-10 font-22'></i>Windows</a>
            </div>
            <div className="col">
              <img src={bookReading} className="m-5" alt="bookReading" />
            </div>
          </div>
        </div>
      </section>
      <footer className='mt-100'>
        <div className='container d-flex'>
          <div className="col-lg-3 ">
            <h2>Cranbery</h2>
            <i className='bi bi-facebook'></i>
            <i className='ms-2 bi bi-instagram text-black'></i>
            <i className='ms-2 bi bi-twitter'></i>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h6 className='fw-bold'>Company</h6>
            <a href='' className='text-decoration-none footer-data'>Our Team</a><br />
            <a href='' className='text-decoration-none footer-data'>FAQ</a><br />
            <a href='' className='text-decoration-none footer-data'>Partnership</a><br />
            <a href='' className='text-decoration-none footer-data'>Product</a>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h6 className='fw-bold'>Company</h6>
            <a href='' className='text-decoration-none footer-data'>Contact us</a><br />
            <a href='' className='text-decoration-none footer-data'>Submitform</a><br />
            <a href='' className='text-decoration-none footer-data'>Get in touch</a><br />
            <a href='' className='text-decoration-none footer-data'>Forum</a>
          </div>
          <div className="col-6 col-lg-2 mb-3">
            <h6 className='fw-bold'>Company</h6>
            <a href='' className='text-decoration-none footer-data'>Privacy polacy</a><br />
            <a href='' className='text-decoration-none footer-data'>FAQ</a><br />
            <a href='' className='text-decoration-none footer-data'>Partnership</a><br />
            <a href='' className='text-decoration-none footer-data'>Product</a>
          </div>
          <div className="col-lg-3 ">
            <h6 className='fw-bold'>Company</h6>
            <a href='' className='text-decoration-none footer-data'>Our Team Every your member of Team work with your teamto your plan,
              manage track, and release.</a>
          </div>
        </div>
      </footer>
      <section>
        <center>
          <div className='bg-f'>
            <a href='' className='text-decoration-none cranbery'>Cranbery Product.Co</a>
          </div>
        </center>
      </section>
    </div>
  );
}

export default App;
