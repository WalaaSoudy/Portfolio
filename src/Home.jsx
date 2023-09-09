import React from "react";
import img1 from "../src/assets/imgs/avataaars.svg";
const Home = () => {
  return (
    <>
      <section className="home text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-center ">
            <div className="text-center">
              <img
                src={img1}
                alt="avataaars"
                className="img-fluid mb-3 mb-lg-0 mt-4"
              />
              <h1 className="h2 text-uppercase pt-2 my-2">Start Framework</h1>
              <div className="d-flex align-items-center justify-content-center mb-3 mt-2 pt-2">
                <div _ngcontent-xco-c6 className="line me-3" style={{ backgroundColor: 'white' }} />
                <i _ngcontent-xco-c6 className="fa-solid fa-star" />
                <div _ngcontent-xco-c6 className="line ms-3" style={{ backgroundColor: 'white' }} />
              </div>
              <div className="pt-2">Graphic Artist - Web Designer - Illustrator</div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;
