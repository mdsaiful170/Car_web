const Card = () => (
  <div className=" ">
    <div className="flex align-items-center flex-column px-1">
      <label className="ps-1" style={{ color: "#9A9EA7", fontSize: "18px" }}>
        Type
      </label>
      <br />
      <select className="w-100 py-1  box fw-bold border-0 border-end border-end-1  ">
        <option className=" fs-3" selected value="1">
          Use Card
        </option>
        <option className=" fs-3" value="2">
          Paypaul
        </option>
        <option className=" fs-3" value="3">
          DatchBangla
        </option>
        <option className=" fs-3" value="4">
          Roket
        </option>
      </select>
    </div>
  </div>
);

const Make = () => (
  <div className=" ">
    <div className="flex align-items-center flex-column px-1">
      <label className="ps-1" style={{ color: "#9A9EA7", fontSize: "18px" }}>
        Type
      </label>
      <br />
      <select className="w-100 py-1   box fw-bold border-0 border-end border-end-1  ">
        <option className=" fs-3" selected value="1">
          Use Card
        </option>
        <option className=" fs-3" value="2">
          Paypaul
        </option>
        <option className=" fs-3" value="3">
          DatchBangla
        </option>
        <option className=" fs-3" value="4">
          Roket
        </option>
      </select>
    </div>
  </div>
);

const Year = () => (
  <div className=" ">
    <div className="flex align-items-center flex-column px-1">
      <select className="w-100 py-1  box fw-bold text-secondary border-0 border-end border-end-1  ">
        <option className=" text-dark fs-3" selected disabled value="1">
          <span style={{ color: "#9A9EA7" }}>Year</span>
        </option>
        <option className=" text-dark fs-3" value="2">
          2020
        </option>
        <option className=" text-dark fs-3" value="3">
          2021
        </option>
        <option className=" text-dark fs-3" value="4">
          2024
        </option>
      </select>
    </div>
  </div>
);

const Model = () => (
  <div className=" ">
    <div className="flex align-items-center flex-column px-1">
      <select className="w-100 py-1 text-secondary  box fw-bold border-0 border-end border-end-1  ">
        <option className=" text-dark fs-3" selected disabled value="1">
          Model
        </option>
        <option className=" text-dark fs-3" value="2">
          BMW-2
        </option>
        <option className=" text-dark fs-3" value="3">
          Fordj
        </option>
        <option className=" text-dark fs-3" value="4">
          Volov20
        </option>
      </select>
    </div>
  </div>
);

const Price = () => (
  <div className=" ">
    <div className="flex align-items-center flex-column px-1">
      <select className="w-100 py-1 text-secondary  box fw-bold border-0 border-end border-end-1  ">
        <option className=" text-dark fs-3" selected disabled value="1">
          Price
        </option>
        <option className=" text-dark fs-3" value="2">
          20000
        </option>
        <option className=" text-dark fs-3" value="4">
          30000
        </option>
        <option className=" text-dark fs-3" value="3">
          40000
        </option>
      </select>
    </div>
  </div>
);
const FilterSearch = () => {
  return (
    <>
      <div className="container-fluid  mt-5 mb-5 pb-5">
        <div className="container mx-auto shadow-sm">
          <div className="row g-lg-0 gy-3  py-4 align-items-end ">
            <div className="col-lg-2 col-4">
              <Card />
            </div>
            <div className="col-lg-2 col-4">
              <Make />
            </div>
            <div className="col-lg-2 col-4">
              <Year />
            </div>
            <div className="col-lg-2 col-4">
              <Model />
            </div>
            <div className="col-lg-2 col-4">
              <Price />
            </div>
            <div className="col-lg-2 align-self-end col-4 flex align-items-center justify-content-center">
              <button
                className="d-block btn-2 flex mx-auto "
                style={{ background: "#7963F0", color: "#ffff" }}
              >
                <i className="bi bi-search fw-bold me-3"></i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSearch;
