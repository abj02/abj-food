import React from "react";

export default function Body() {
  return (
    <>
      <div className="container d-flex" style={{ marginTop: "100px" }}>
        <div
          className="container"
          style={{ width: "30%", marginTop: "130px", marginLeft: "200px" }}
        >
          <h1>
            <b>ABJ-Food & Restaurant</b>
          </h1>
          <p>
            <span>
              {" "}
              We believe that everyone has the right to fresh, healthy,
              affordable food.
            </span>
          </p>
        </div>
        <div
          id="carouselExampleIndicators"
          className="carousel slide ms-auto"
          data-bs-ride="carousel"
          style={{ width: "35%", marginRight: "200px" }}
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner  ">
            <div className="carousel-item active">
              <img src="./img/pic1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src=" ./img/pic2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src=" ./img/pic3.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container mt-5 ">
        <div className="row ">
          <div className="col-6 col-md-4 ">
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <img
                src="./img/recipes.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <h2>Food-Recipes</h2>
                <p className="card-text">
                  Whether you’re after a one-course meal or the highlight to a
                  feast, this collection of more main recipes is the place to
                  look.
                </p>
                <button type="button" className="mt-auto btn btn-warning">
                  Recipes
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <img
                src="./img/variety.jpeg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <h2> Food-Variety</h2>
                <p className="card-text">
                  Having a varied diet means eating a wide variety of different
                  foods from the different food groups, as well as within each
                  food group.
                </p>
                <button type="button" className="mt-auto btn btn-warning">
                  Variety
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <img
                src="./img/delivery.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <h2> Home-Delivery</h2>
                <p className="card-text">
                  Home delivery is the bringing of items to the customer's home
                  rather than the customer taking or collecting them from the
                  store.
                </p>
                <button type="button" className="mt-auto btn btn-warning">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 col-md-4">
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <img src="./img/plan.jpg" className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h2>Choose a Plan</h2>
                <p className="card-text">
                  Click the button below to choose your plan.From there,you can
                  schedule your hours on the calendar and chhose your chef.
                </p>
                <button type="button" className="mt-auto btn btn-warning">
                  Chhose Plan
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <img
                src="./img/custumize.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body d-flex flex-column">
                <h2>Customize Meal</h2>
                <p className="card-text">
                  Let your Chef know if you have an idea in mind or certain
                  ingredients that you want to use.
                </p>
                <button type="button" className="mt-auto btn btn-warning">
                  Customize Meal
                </button>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4">
            <div className="card" style={{ width: "18rem", height: "27rem" }}>
              <img src="./img/status.jpg" className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column">
                <h2>Sit back & Relax</h2>
                <p className="card-text">
                  Your chef is ready to make this a unique experience for you so
                  that you can get back to the things that matter.
                </p>
                <button type="button" className="mt-auto btn btn-warning">
                  Food Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 my-5">
        <div className="row">
          <div className="card mb-4" style={{ width: "90%" }}>
            <div className="card-header fw-bold">
              <span>FeedBack</span>
            </div>
            <div className="card-body " style={{ marginBottom: "1%" }}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <b> Email Address</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  <b>Enter Your FeedBack</b>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <a href="/" className="btn btn-danger">
                <b>Submit</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
