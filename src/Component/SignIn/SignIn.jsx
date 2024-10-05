import { useContext } from "react";
import { AuthContextCoffee } from "../../AuthProvider/AuthProvider";
import BackHome from "../BackHome/BackHome";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
  const { signInUser } = useContext(AuthContextCoffee);
  const navigateTo = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        if (res.user) {
          toast.success("User logged in success");
        }
        const updatedInfo = {
          email,
          lastLoggedAt: res.user?.metadata?.lastSignInTime,
        };
        // update lastLoggedAt to database using unique email not to have id
        fetch("http://localhost:5000/user-update", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.modifiedCount > 0) {
              toast.success("lastSignInTime updated");
            }
          });
        navigateTo("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <BackHome></BackHome>
      <div className="hero min-h-[80vh] bg-base-200 mt-1">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-coffee text-white">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
