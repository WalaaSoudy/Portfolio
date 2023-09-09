import React from 'react'
import p1 from '../src/assets/imgs/poert1.png';
import p2 from '../src/assets/imgs/port2.png';
import p3 from '../src/assets/imgs/port3.png'


const Portfolio = () => {
    return (
    <>
            <section className="portfolio  p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <h1>PORTFOLIO COMPONENT</h1>
                            <div _ngcontent-xco-c6 className="d-flex align-items-center justify-content-center mb-3 mt-2 pt-2">
                <div _ngcontent-xco-c6 className="line me-3" style={{ backgroundColor: 'black' }} />
                <i _ngcontent-xco-c6 className="fa-solid fa-star" />
                <div _ngcontent-xco-c6 className="line ms-3" style={{ backgroundColor: 'black' }} />
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12 my-3 position-relative">
                            <img src={p1} className="img-fluid " />
                            <div _ngcontent-xco-c19="" class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i _ngcontent-xco-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  my-3 position-relative">
                            <img src={p2} className="img-fluid" />
                            <div _ngcontent-xco-c19="" class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i _ngcontent-xco-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  my-3 position-relative">
                            <img src={p3}  className="img-fluid" />
                            <div _ngcontent-xco-c19="" class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i _ngcontent-xco-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
                                </div>
                                
                                <div className="col-lg-4 col-md-6 col-sm-12  my-3 position-relative">
                            <img src={p1} className="img-fluid" />
                            <div _ngcontent-xco-c19="" class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i _ngcontent-xco-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  my-3 position-relative">
                            <img src={p2} className="img-fluid" />
                            <div _ngcontent-xco-c19="" class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i _ngcontent-xco-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  my-3 position-relative">
                            <img src={p3}  className="img-fluid" />
                            <div _ngcontent-xco-c19="" class="layer__ position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center"><i _ngcontent-xco-c19="" class="text-white fa-solid fa-plus fa-6x"></i></div>
                                </div>
                              
                            </div>
                            </div>
                            </div>
                            </div>
            </section>
    </>
)
}

export default Portfolio