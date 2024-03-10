import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import "./Register.css"; // Import CSS file

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    dob: "",
    password: ""
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://backend-mu-lake.vercel.app/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });

      if (response.ok) {
        const data = await response.json();
        alert("Registration successful");
        setUser({
          username: "",
          email: "",
          dob: "",
          password: ""
        });
        navigate("/login");
      } else if (response.status === 400) {
        const data = await response.json();
        alert(data.msg);
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <section>
      <main>
        <div className="Registration grid-two-cols">
          <div className="container grid grid-two-cols">
            <div className="registration image">
              <img
                src="/regis.jpeg"
                alt=" a girl is try to do reges"
                width="500"
                height="500"
              />
            </div>
            <div className="registraiton form">
              <h1 className="main headind mb-3">Registration Form</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="dob">DOB</label>
                  <input
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                    id="dob"
                    required
                    autoComplete="off"
                    value={user.dob}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
