import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    // agar form valid nahi hai to bootstrap ka default validation dikh jaaye
    if (form.checkValidity() === false) {
      e.stopPropagation();
      form.classList.add("was-validated");
      return;
    }

    form.classList.add("was-validated");

    try {
      const { data } = await axios.post(
        "http://localhost:8080/signup",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3002";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }

    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className='container p-5'>
      <div className="row p-5">
        <div className="col-4">
          <img src='../media/signup.png' alt="signpImg" style={{ height: "40vh" }} />
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="form_container">
            <h2>Signup Now</h2>
            <p className="text-muted mb-3">Or track your existing application</p>
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>

              <div class="form-floating mb-3">
                <input type="text"
                  id="floatingInput"    
                  name="email"
                  className="form-control"
                  value={email}
                  placeholder="Enter valid email"
                  onChange={handleOnChange}
                  required />
                <label for="floatingInput" className="form-label">Email</label>
               <div className="invalid-feedback">Enter valid email</div>
              </div>

              <div class="form-floating mb-3">
                <input type="text"
                  id="floatingInput"    
                  name="username"
                  className="form-control"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  required />
                <label for="floatingInput" className="form-label">Username</label>
               <div className="valid-feedback">Looks good!</div>
              </div>

              <div class="form-floating mb-3">
                <input type="password"
                  id="floatingInput"                    
                  name="password"
                  className="form-control"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required />
                <label for="floatingInput" className="form-label">password</label>
               <div className="invalid-feedback">Please enter strong password.</div>
              </div>

              <button type="submit" className="mt-3 btn btn-primary">Signup</button>
              &nbsp;&nbsp;&nbsp;
              <span className="mt-5" >
                Already have an account? <Link to={"https://zerodha-clone-gdfd.vercel.app/login"}>Login</Link>
              </span>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div >
    </div >
  );
};

export default Signup;