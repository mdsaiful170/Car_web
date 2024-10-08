import Carousel from "react-bootstrap/Carousel";


const Hero = () => {
  
  return (
    <div>
      

      <Carousel data-bs-theme="dark" indicators={false}>
       <Carousel.Item>
       <div className="text-center heroContetn">
          <p className="mt-5">Meet your new car</p>
          <h1 >Honda Civic Type R</h1>
          <div style={{paddingTop:'45px'}} className="">
          <button className="btn-2 d-inline-block " type="button">More Details</button>
          <button className="btn-2 d-inline-block ms-3" style={{backgroundColor:"#7963F0", color:"#ffffff"}} type="button">Test Drive</button>
          </div>
        </div>
        <div style={{paddingTop:"90px"}}>
          <img className="w-100 d-block img-fluid" src="Img/HeroImage.png" alt="" />
        </div>
       </Carousel.Item>

       <Carousel.Item>
       <div className="text-center heroContetn">
          <p className="mt-5">Meet your new car</p>
          <h1 >TOYOTA Civic Type R</h1>
          <div style={{paddingTop:'45px'}} className="">
          <button className="btn-2 d-inline-block " type="button">More Details</button>
          <button className="btn-2 d-inline-block ms-3" style={{backgroundColor:"#7963F0", color:"#ffffff"}} type="button">Test Drive</button>
          </div>
        </div>
        <div style={{paddingTop:"90px"}}>
          <img className="w-100 d-block img-fluid" src="Img/HeroImage.png" alt="" />
        </div>
       </Carousel.Item>

       <Carousel.Item>
       <div className="text-center heroContetn">
          <p className="mt-5">Meet your new car</p>
          <h1 >FORD Civic Type R</h1>
          <div style={{paddingTop:'45px'}} className="">
          <button className="btn-2 d-inline-block " type="button">More Details</button>
          <button className="btn-2 d-inline-block ms-3" style={{backgroundColor:"#7963F0", color:"#ffffff"}} type="button">Test Drive</button>
          </div>
        </div>
        <div style={{paddingTop:"90px"}}>
          <img className="w-100 d-block img-fluid" src="Img/HeroImage.png" alt="" />
        </div>
       </Carousel.Item>

       <Carousel.Item>
       <div className="text-center heroContetn">
          <p className="mt-5">Meet your new car</p>
          <h1 >Volvo Civic Type R</h1>
          <div style={{paddingTop:'45px'}} className="">
          <button className="btn-2 d-inline-block " type="button">More Details</button>
          <button className="btn-2 d-inline-block ms-3" style={{backgroundColor:"#7963F0", color:"#ffffff"}} type="button">Test Drive</button>
          </div>
        </div>
        <div style={{paddingTop:"90px"}}>
          <img className="w-100 d-block img-fluid" src="Img/HeroImage.png" alt="" />
        </div>
       </Carousel.Item>

       <Carousel.Item>
       <div className="text-center heroContetn">
          <p className="mt-5">Meet your new car</p>
          <h1 >GTR Civic Type R</h1>
          <div style={{paddingTop:'45px'}} className="">
          <button className="btn-2 d-inline-block " type="button">More Details</button>
          <button className="btn-2 d-inline-block ms-3" style={{backgroundColor:"#7963F0", color:"#ffffff"}} type="button">Test Drive</button>
          </div>
        </div>
        <div style={{paddingTop:"90px"}}>
          <img className="w-100 d-block img-fluid" src="Img/HeroImage.png" alt="" />
        </div>
       </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
