import React from "react";

export default function Skills() {
  return (
    <div className="container px-6 py-4">
      <h1 class="pb-2  ">Skills</h1>
      <div class="row g-4 py-1 row-cols-1 row-cols-lg-3">
        <div class="feature col">
          <div className="card p-1 bg-body-secondary ">
            <h4 class="fs-2 text-body-emphasis">FrontEnd</h4>
            <div className="mb-1"></div>
            <p>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Bootstrap</li>
                <li>ReactJs</li>
              </ul>
            </p>
          </div>
        </div>

        <div class="feature col">
          <div className="card p-1 bg-body-secondary">
            <h3 class="fs-2 text-body-emphasis">BackEnd</h3>
            <div className="mb-1"></div>

            <p>
              <ul>
                <li>Java</li>
                <li>C</li>
                <li>C++</li>
                <li>NodeJS</li>
              </ul>
            </p>
          </div>
        </div>

        <div class="feature col ">
          <div className="card p-1 bg-body-secondary">
            <h3 class="fs-2 text-body-emphasis">DataBases</h3>
            <div className="mb-1"></div>

            <p>
              <ul>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
