import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Projects() {
  return (
    <>
      <h1 class="px-3  ">Projects</h1>

      <div className="row px-1 py-1">
        <Carousel
          centerMode
          autoPlay
          centerSlidePercentage={33}
          className="p-2"
        >
          <div className="col px-2">
            <div className="card bg-body-secondary ">
              <div className="card-body">
                <div className="row">
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <a href="https://github.com/Ps052002/cab-booking">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#FFD700"
                        class="bi bi-folder-fill"
                        viewBox="0 0 25 25"
                      >
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
                      </svg>
                    </a>
                  </div>
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <a href=" https://github.com/Ps052002/cab-booking?search=1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 25 25"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title ">
                  <h3>Cab Booking</h3>
                </div>
                <p style={{ display: "flex ", height: "200px" }}>
                  The Java Swing Cab Booking project is a designed to facilitate
                  cab booking and management for both customers and
                  administrators. The project is built using Java Swing for the
                  graphical user interface (GUI) and JDBC for database
                  connectivity.
                </p>

                <div className="row">
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">Core Java</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      <div className="card">Java Swing</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">MySQL</div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col px-2">
            <div className="card bg-body-secondary ">
              <div className="card-body">
                <div className="row">
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <a href="https://github.com/Ps052002/My_PortFolio">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#FFD700"
                        class="bi bi-folder-fill"
                        viewBox="0 0 25 25"
                      >
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
                      </svg>
                    </a>
                  </div>
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <a href=" https://github.com/Ps052002/My_PortFolio">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        class="bi bi-github"
                        viewBox="0 0 25 25"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title ">
                  <h3>PortFolio Website</h3>
                </div>
                <p style={{ display: "flex ", height: "200px" }}>
                  The Personal Portfolio Website using ReactJS is a showcase of
                  my skills, projects, and education in a visually appealing and
                  interactive format. It serves as a platform to highlight my
                  professional achievements, showcase my projects, and provide
                  information about my skills and expertise.
                </p>

                <div className="row">
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">HTML</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      <div className="card">CSS</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">Javascript</div>
                    </center>
                  </div>

                  <div className="col">
                    <center>
                      <div className="card">ReactJS</div>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col px-2">
            <div className="card bg-body-secondary">
              <div className="card-body">
                <div className="row">
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <a href=" https://github.com/Ps052002/Healthcare">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#FFD700"
                        class="bi bi-folder-fill"
                        viewBox="0 0 25 25 "
                      >
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
                      </svg>
                    </a>
                  </div>
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <a href=" https://github.com/Ps052002/Healthcare">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#211fcc"
                        class="bi bi-github"
                        viewBox="0 0 25 25"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title">
                  <h3>Healthcare </h3>
                </div>
                <p style={{ display: "flex ", height: "200px" }}>
                  This project involves developing a
                  web application that provides various healthcare-related
                  functionalities, such as medicine details, medicine selling,symptoms checking
                  and disease checking, appointment
                  scheduling.
                </p>

                <div className="row">
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">HTML</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      <div className="card">CSS</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">Javascript</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      <div className="card">ReactJS</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      <div className="card">NodeJS</div>
                    </center>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
          <div className="col px-2">
            <div className="card bg-body-secondary ">
              <div className="card-body">
                <div className="row">
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <a href="https://github.com/Ps052002/Netflix">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#FFD700"
                        class="bi bi-folder-fill"
                        viewBox="0 0 25 25"
                      >
                        <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a2 2 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3m-8.322.12q.322-.119.684-.12h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981z" />
                      </svg>
                    </a>
                  </div>
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <a href="https://github.com/Ps052002/Netflix">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="#211fcc"
                        class="bi bi-github"
                        viewBox="0 0 25 25"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="card-title ">
                  <h3>Netflix-Clone </h3>
                </div>
                <p style={{ display: "flex ", height: "200px" }}>
                  This project involves building a web
                  application that includes video streaming and mimics some of the key features of Netflix,
                  such as browsing and viewing movies ,Web Series and TV shows,
                  viewing details about them, and playing videos.
                </p>

                <div className="row">
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">HTML</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      <div className="card">CSS</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">Javascript</div>
                    </center>
                  </div>

                  <div className="col">
                    <center>
                      {" "}
                      <div className="card">ReactJs</div>
                    </center>
                  </div>
                  <div className="col">
                    <center>
                      <div className="card">NodeJS</div>
                    </center>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
