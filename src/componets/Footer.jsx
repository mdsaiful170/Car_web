const Footer = () => {
  return (
    <>
      <section className="container-fluid">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between pt-3 pb-2">
            <div className="d-flex gap-2">
              <p
                style={{
                  color: "#0D0A19",
                  fontWeight: "700",
                  fontSize: ".9rem",
                }}
              >
                Privacy Policy
              </p>
              <p
                style={{
                  color: "#0D0A19",
                  fontWeight: "700",
                  fontSize: ".9rem",
                }}
              >
                Term of Use
              </p>
              <span style={{ color: "#9A9EA7", fontSize: ".9rem" }}>
                 © 2021 All rights reserved
              </span>
            </div>
            <p>
                <img src="Img/Link2.png" alt=""/>
                <img src="Img/Link.png" className="ms-2" alt=""/>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
