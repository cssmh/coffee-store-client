import toast from "react-hot-toast";
import BackHome from "../BackHome/BackHome";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const SignUp = () => {
  const { createUser } = useAuth();
  const navigateTo = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await createUser(email, password);
      toast.success("SignUp Successful");
    } catch (error) {
      console.log(error);
      navigateTo("/");
    }
  };

  return (
    <div>
      <BackHome />
      <div className="hero min-h-[80vh] bg-base-200 mt-1">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
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
              <p className="mt-4 text-center">
                Already have an account?{" "}
                <Link to="/signIn" className="text-coffee link link-hover">
                  Sign In
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
