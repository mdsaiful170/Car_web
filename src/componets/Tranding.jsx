
import { CardBody, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const TradingData = [
  {
    id:1,
    img:'Img/Img1.png',
    title:'Used 2019 Audi S4 Premium Plus',
    text:'11 475 Miles',
    titletext:'AWD . 4-Cylinder Turbo',
    price:'$41,400',
    sel:'Bestseller'

  },
  {
    id:2,
    img:'Img/Img2.png',
    title:'2013 Subaru Forester Premium Plus',
    text:'40 475 Miles',
    titletext:'AWD . 4-Cylinder Turbo',
    price:'$22,500',
    sel:'Bestseller'

  },
  {
    id:3,
    img:'Img/Img3.png',
    title:'Used 2010 BMW X3 Sport package',
    text:'20 850 Miles',
    titletext:'AWD . 4-Cylinder Turbo',
    price:'$39,200',
    sel:'Bestseller'

  }
]

const Tranding = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container mx-auto ">
          <h1 className="heading-text">Trending near you</h1>
          <Row className="g-3  mx-auto">
            {
              TradingData.map((res,i)=>(
                <Col className="col-12 col-lg-4 col-md-6" >
              <Card className="border-0" key={res.id}>
                <Card.Img src={res.img} />
                <CardBody>
                  <Card.Title className="title">{res.title}</Card.Title>
                  <small style={{fontSize:'.9rem' ,color:"#9A9EA7", lineHeight:'2'}}>{res.text}</small>
                  <Card.Text style={{marginBottom:"1.7rem"}}> <span style={{fontSize:'.9rem' ,color:"#9A9EA7", lineHeight:'2'}}>{res.titletext}</span> </Card.Text>
                  <button className="card-btn-1 border-0">{res.price}</button>
                  <button className="card-btn-2 border-0">{res.sel}</button>
                </CardBody>
              </Card>
            </Col>
              ))
            }

            
           
          </Row>
        </div>
      </section>
    </>
  );
};

export default Tranding;
