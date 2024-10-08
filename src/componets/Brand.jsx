import {  Col, Row } from "react-bootstrap";

const BarndData = [
  {
    id: 1,
    img: "Img/barnd1.png",
    name: "Subaru",
    title: "from $40k",
  },
  {
    id: 2,
    img: "Img/barnd2.png",
    name: "Subaru",
    title: "from $40k",
  },
  {
    id: 3,
    img: "Img/barnd3.png",
    name: "Subaru",
    title: "from $40k",
  },
  {
    id: 4,
    img: "Img/barnd4.png",
    name: "Subaru",
    title: "from $40k",
  },
  {
    id: 5,
    img: "Img/barnd5.png",
    name: "Subaru",
    title: "from $40k",
  },
  {
    id: 6,
    img: "Img/barnd6.png",
    name: "Subaru",
    title: "from $40k",
  },
];

const Brand = () => {
  return (
    <>
      <section className="container-fluid" style={{ marginTop: "91px" }}>
        <div style={{ maxWidth: "945px" }} className="mx-auto ">
          <h1 className="heading-text">Explore best selling car makes</h1>
          <Row>
            {BarndData.map(({ id, img, name, title }) => (
              <Col className="col-md-4 g-3 col-6 bg-white opacity-75" key={id}>
                <div className="p-2">
                  <div className="okflex">
                    <img src={img} alt="" />
                    <div className="">
                      <h3 style={{color:'#0D0A19'}}>{name}</h3>
                      <small>{title}</small>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Brand;
