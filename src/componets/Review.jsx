import { CardBody, Col, Row, Card } from "react-bootstrap";

const ReviewData = [
  {
    id: 1,
    img: "Img/review-img1.png",
    title: "2021 Cadillac Escalade",
    description:
      "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
    pic: "Img/pic1.png",
    pname: "Hironaka Hiroe",
    prf: "Chief Editor",
    rate: "4.91",
    num: "98",
  },
  {
    id: 2,
    img: "Img/review-img2.png",
    title: "2021 Hyundai Elantra",
    description:
      "If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ",
    pic: "Img/pic2.png",
    pname: "Debashis Bhuiyan",
    prf: "News Editor",
    rate: "4.65",
    num: "93",
  },
  {
    id: 3,
    img: "Img/review-img3.png",
    title: "2021 Mercedes-Benz GLA250",
    description:
      "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
    pic: "Img/pic3.png",
    pname: "Lew Silverton",
    prf: "Chief Editor",
    rate: "4.55",
    num: "35",
  },
];
const Review = () => {
  return (
    <>
      <section className="container-fluid " style={{ marginTop: "91px" }}>
        <div className="container mx-auto">
          <Row className="g-4">
            {ReviewData.map((res) => (
              <Col className="col-12 col-lg-4 col-md-6" key={res.id}>
                <Card.Img src={res.img} className="rounded-3" />
                <CardBody style={{ padding: ".9rem 1rem" }}>
                  <Card.Title className="title2">{res.title}</Card.Title>
                  <Card.Text className="text-p">{res.description}</Card.Text>
                  <div className="person">
                    <div className="d-flex align-items-center justify-content-center gap-3">
                      <img src={res.pic} alt="" />
                      <div>
                        <h4>{res.pname}</h4>
                        <small>{res.prf}</small>
                      </div>
                    </div>
                    <p>
                      <i className="bi bi-star-fill me-1"></i>
                      <strong>{res.rate}</strong> <span>({res.num})</span>
                    </p>
                  </div>
                </CardBody>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Review;
