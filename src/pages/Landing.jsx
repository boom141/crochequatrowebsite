import React from 'react'
import '../static/css/landing.css'
import dot_sm from '../static/images/dot_small.png';
import dot_lg from '../static/images/dot_lg.png';
import bubbles_1 from '../static/images/bubbles_1.png';
import bubbles_2 from '../static/images/bubbles_2.png';
import Arrow from '../static/images/Arrow.png';
import circle from '../static/images/circle.png';

const Landing = () => {
  return (
    <>
       <div className='container-fluid hero-section p-0'>
          <div className='row'>
              <div className="slogan col-5 th-bg-1 d-flex flex-column row-gap-2">
                <img height={90} width={150} src={dot_lg} alt="" />
                <img className='align-self-end' height={180} width={150} src={bubbles_1} alt="" />
                <img className='' height={150} width={120} src={bubbles_2} alt="" />
                <img className='align-self-end' height={50} width={100} src={dot_sm} alt="" />
              </div>
              <div className="col-7 side-image">
                <h1>YourCrochet</h1>
                <div className='slogan-bar d-flex flex-column'>
                    <span className='th-bg-2'></span>
                    <span  className='th-bg-2'></span>
                    <h3 className='w-50'>Crochet your way to your love ones.</h3>
                </div>
                <div className='hero-action d-flex flex-row'>
                    <button className='btn fs-4 px-4 th-color-1 fw-medium'>Order</button>
                    <div className='explore-btn d-flex flex-row'>
                      <div className='arrow-explore'>
                        <h6 className='text-white'>Explore</h6>
                        <img width={110} src={Arrow} alt="" />
                      </div>
                      <img className='arrow-circle' height={40} src={circle} alt="" />
                    </div>
                </div>
              </div>
          </div>
       </div>
    </>
  )
}

export default Landing