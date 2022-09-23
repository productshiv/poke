import React from 'react'
import './Styles.css' // Tell webpack that Button.js uses these styles
// import Logo from './assets/logo.png'

function Home() {
  return (
    <div className="container">
      {/* Menu Bar */}
      <div className="top-bar">
        <div className="greet">
          <p className="spp">GM</p>
          <p className="bolder">Builders</p>
        </div>
        <div className="connect">
          <button class="button">Connect</button>
        </div>
      </div>

      {/* Items */}
      <div className="options">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'bolder',
          }}
        >
          <div className="option">
            <img
              clasName="image"
              height="80px"
              src={require('../assets/logo.png')}
              alt="logo"
            />
            <button class="button nb">Explore</button>
          </div>
          <p
            style={{
              marginTop: '5em',
              fontSize: '20px',
              fontWeight: 'bolder',
              fontFamily: 'Roboto Flex',
            }}
          >
            Dashboard
          </p>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontWeight: 'bolder',
          }}
        >
          <div className="option">
            <img
              clasName="image"
              height="80px"
              src={require('../assets/trophy.png')}
              alt="logo"
            />
            <button class="button nb">Mint</button>
          </div>
          <p
            style={{
              marginTop: '5em',
              fontSize: '20px',
              fontWeight: 'bolder',
              fontFamily: 'Roboto Flex',
            }}
          >
            Claim
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
