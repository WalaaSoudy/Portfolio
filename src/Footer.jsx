import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer bg-dark text-white p-4">
        <div className="container">
          <div className="footer bg-dark text-white">
            <div className="card-group m-4 bg-dark text-white">
              <div className="card bg-dark text-white">
                <div className="card-body text-center bg-dark text-white">
                  <h3>LOCATION</h3>
                  <p>2215 John Daniel Drive</p>
                  <p>Clark, MO 65243</p>
                </div>
              </div>
              <div className="card text-white bg-dark text-white">
                <div className="card-body text-center bg-dark text-white">
                  <h3>AROUND THE WEB</h3>
                  <div className="icons">
                    <i className="fa-brands fa-facebook mx-1 icon" />
                    <i className="fa-brands fa-twitter mx-1 icon" />
                    <i className="fa-brands fa-linkedin-in mx-1 icon" />
                    <i className="fa-solid fa-globe mx-1 icon" />
                  </div>
                </div>
              </div>
              <div className="card bg-dark text-white">
                <div className="card-body text-center bg-dark text-white">
                  <h3>ABOUT FREELANCER</h3>
                  <p>
                    {" "}
                    Freelance is a free to use, licensed Bootstrap theme created
                    by Route{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="p text-center">
              <p>Copyright © Your Website 2021</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
