import React from 'react'

const LanderNav = () => (
<header className="nav">
  <div className="container">
    <div className="row items-center mb-lg">
      <div className="column align-left">
        <a href="index.html" aria-current="page" className="w-inline-block w--current">
          <div className="logo"><span className="emoji mr-md">🌎</span> Lander</div>
        </a>
      </div>
      <div className="column align-right">
        <div className="row items-center">
          <a href="#" className="u mr-lg">Log in</a><a href="#" className="button main w-button">Sign in<span data-feather="arrow-right" className="icon mr-md-n ml-md">•</span></a>
        </div>
      </div>
    </div>
  </div>
</header>
)

export default LanderNav