import {Link} from "react-router-dom"
const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center font-semibold text-3xl my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="border p-3 rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="border p-3 rounded-lg focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="border p-3 rounded-lg focus:outline-none"
        />
        <button className="bg-slate-900 p-3 text-white font-semibold uppercase rounded-lg disabled:opacity-50 hover:bg-white hover:text-black hover:border-2 hover:border-black box-border">
          sign up
        </button>
      </form>
      <div className="mt-5 flex gap-1" >
        <p>Have an account? </p>
        <Link to="/sign-in" >
          <span className="text-blue-700" >Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp
