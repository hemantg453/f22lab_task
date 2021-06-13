import React from 'react'



const Header = () => {






    return (
        <>
     <div className="box">
        <header>
          <nav id="cssmenu">
            <div className="logo"><a href="#">Omega </a></div>
            <div id="head-mobile" />
            <div className="button" />
            <ul>
              <li>
                <a href="#">Demo</a>
                <ul>
                  <li>
                    <a href="#">Test 1</a>
                  </li>
                  <li>
                    <a href="#">Test 2</a>
                  </li>
                </ul>
              </li>
              <li><a href="#">Pages</a></li>
              <li><a href="#">Support</a></li>
              <li>
                <button className="btn btn-danger btnquote" id="btnGetQuote">Get Quote</button>
              </li>
            </ul>
          </nav>
        </header>
        {/*solve your daily life problem in 1 min*/}
        <div className="container">
          <div className="row">
            <div className="col-md-1">
            </div>
            <div className="col-md-5">
              <br /><br />
              <img  src={
                process.env.PUBLIC_URL + "/assets/images/Book.jpg"
              } className="img-responsive imgsize" />
            </div>
            <div className="col-md-5">
              <br />
              <h2 className="padding-top"><b>Solve your daily life <br /> problem in 1 min</b></h2>
              <br />
              <ul className="ullist">
                <li>12th Chapter with details illustration</li>
                <li>Learn from the expert with 24 year experiance</li>
                <li>Audio version is included with purchase</li>
              </ul>
              <br />
              <button className="btn btn-danger">Get this book - Start from $29</button>
              <br />
            </div>
            <div className="col-md-1">
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default Header