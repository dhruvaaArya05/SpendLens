import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    console.log("Login response:", data);

    if (data.message === "Login successful") {
      // localStorage.setItem("name", data.name);
      // setIsLoggedIn(true);
      navigate("/dashboard");
    } else if (data.message === "Invalid user") {
      alert("Please sign up first");
    } else if (data.message === "Invalid email or password") {
      alert("Invalid email or password");
    }
    // const user = {
    //   email: email,
    //   password: password
    // };
    // console.log("Logging in user:", user);
  }

  return (
    <div class="min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center p-4">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-xl shadow-2xl p-8 animate-slide-up">
          {/* <!-- Header --> */}
          <div class="text-center mb-8">
            <div class="flex justify-center items-center gap-2 mb-6">
              <div class="text-blue-500">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <span class="text-2xl font-bold text-blue-500">SpendLens</span>
            </div>
            <h1 class="text-3xl font-extrabold text-gray-800 mb-2">Welcome back</h1>
            <p class="text-sm text-gray-500">Sign in to your account to continue managing your finances</p>
          </div>

          {/* <!-- Login Form --> */}
          <form onSubmit={handleLogin} class="space-y-6" id="loginForm">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" id="email" name="email" required placeholder="Enter your email"
                class="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" />
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <div class="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password" id="password" name="password" required placeholder="Enter your password"
                  class="w-full px-4 py-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm" />
                <button type="button" id="passwordToggle"
                  class="absolute inset-y-0 right-2 flex items-center text-gray-500 hover:text-gray-700">
                  <svg class="eye-icon" width="20" height="20" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-width="2" />
                    <circle cx="12" cy="12" r="3" stroke-width="2" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="flex justify-between items-center text-sm">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" id="remember" name="remember" class="accent-blue-500" />
                <span class="text-gray-700">Remember me</span>
              </label>
              <a href="#" class="text-blue-500 hover:underline">Forgot password?</a>
            </div>

            <button type="submit"
              class="w-full flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-3 text-sm relative disabled:opacity-70 disabled:cursor-not-allowed">
              <span class="button-text">Sign in</span>
              <div class="button-loader hidden absolute">
                <div class="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></div>
              </div>
            </button>
          </form>

          <div class="mt-6 text-center text-sm text-gray-600">
            Don't have an account?
            <a onClick={() => navigate('/signup')} class="text-blue-500 font-semibold hover:underline">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;