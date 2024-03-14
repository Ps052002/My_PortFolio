import React from "react";

export default function Qualifications() {
  return (
    <div className="container px-2 ">
      <h1 class="pb-2 md-1">Qualifications</h1>
      <div class="row g-4 py-2 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div className="card p-1 bg-body-secondary " >
            <h4 class="fs-2" > 10th </h4>
            <div className="mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-calendar my-2"
                viewBox="0 0 20 20"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span className="px--2 py-2 fw-bold"> 2017-2018</span>
            </div>
            <p>
              Completed class 10th from St Francis School from Amritsar with the
              aggregate of 80%. Affliated with ICSE Board.
            </p>
          </div>
        </div>

        <div class="feature col">
          <div className="card p-1 bg-body-secondary">
            <h3 class="fs-2 text-body-emphasis">12th</h3>
            <div className="mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-calendar my-2"
                viewBox="0 0 20 20"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span className="px--2 py-2 fw-bold"> 2019-2020 </span>
            </div>

            <p>
              Completed class 12th from Khalsa College Public School from
              Amritsar with the aggregate of 73% Affliated with CBSE Board
            </p>
          </div>
        </div>

        <div class="feature col ">
          <div className="card p-1 bg-body-secondary">
            <h3 class="fs-2 text-body-emphasis"> BTech(CSE) </h3>
            <div className="mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentcolor"
                class="bi bi-calendar my-2"
                viewBox="0 0 20 20"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
              </svg>
              <span className="px--2 py-2 fw-bold"> 2020-2024 </span>
            </div>

            <p>
              Completed BTech(CSE) from Amritsar Group of Colleges with the
              aggregate of 68%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
