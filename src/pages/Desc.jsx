import React from "react";
import Img from "./Img";
export default function Desc() {
  return (
    <div class="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="row g-0">
        <div className="container-fluid col-8">
          <div class="container-fluid py-2">
            <h1 class="display-5 fw-bold">Pratham Sharma</h1>
            <p class="col-md-8 fs-4">
              Passionate and dedicated computer science student seeking an
              opportunity as Software developer position to leverage skills in
              JavaScript, ReactJs, Node.js, java and MongoDB to contribute
              effectively to innovative projects and grow within a dynamic team
              environment.
            </p>
            <a
              href="https://www.linkedin.com/in/pratham-sharma-b8baa6224/ "
              class="btn btn-primary btn-lg"
              type="a"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="col-4">
          <Img />
        </div>
      </div>
    </div>
  );
}
