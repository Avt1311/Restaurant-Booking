import React, { useState } from 'react'

const Profile = () => {

    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem("user"))
      );

  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-6 mb-4 mb-lg-0">
        <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
          <div className="row g-0">
            <div
              className="col-md-4 bg-primary text-center text-white"
              style={{
                borderTopLeftRadius: ".5rem",
                borderBottomLeftRadius: ".5rem"
              }}
            >
              <img
                src={'http://localhost:5000/'+currentUser.avatar}
                alt="Avatar"
                className="img-fluid my-5"
                style={{ width: 80 }}
              />
              <h5>Aviral Tripathi</h5>
              {/* <p>Web Designer</p> */}
              <i className="far fa-edit mb-5" />
            </div>
            <div className="col-md-8">
              <div className="card-body p-4">
                <h6>Information</h6>
                <hr className="mt-0 mb-4" />
                <div className="row pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">aviral@mail.com</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">123 456 789</p>
                  </div>
                </div>
              
               
                </div>
                <div className="d-flex justify-content-start">
                  <a href="#!">
                    <i className="fab fa-facebook-f fa-lg me-3" />
                  </a>
                  <a href="#!">
                    <i className="fab fa-twitter fa-lg me-3" />
                  </a>
                  <a href="#!">
                    <i className="fab fa-instagram fa-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
</section>

  )
}

export default Profile;