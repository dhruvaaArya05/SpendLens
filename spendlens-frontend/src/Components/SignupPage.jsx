import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  async function handleSignupSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:4000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ name, email, password, confirmPassword })
    });

    const data = await response.json();
    console.log("Signup response:", data);

    if (data.message === "User Created Successfully") {
      navigate("/login");
    } else if (data.errors) {
      setErrors(data.errors);
    }
  }

  return (
    <div class="bg-gradient-to-tr from-indigo-500 to-purple-600 min-h-screen flex items-center justify-center p-4">
      <div class="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        {/* Displaying error msgs */}
        {errors.length > 0 && (
          <div className="mb-4">
            <ul className="list-disc list-inside text-red-500">
              {errors.map((error, index) => (
                <li key={index}>{error.msg}</li>
              ))}
            </ul>
          </div>
        )}

        {/* <!-- Logo and Header --> */}
        <div class="text-center mb-6">
          <div class="flex items-center justify-center gap-2 text-indigo-600 text-xl font-bold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <span>SpendLens</span>
          </div>
          <h1 class="text-2xl font-bold mt-4">Create your account</h1>
          <p class="text-gray-600">Start managing your finances with confidence</p>
        </div>

        {/* <!-- Signup Form --> */}
        <form onSubmit={handleSignupSubmit} class="space-y-5" id="signupForm">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text" id="name" name="name" required placeholder="Enter your full name"
              class="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">Email address</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email" id="email" name="email" required placeholder="Enter your email address"
              class="mt-1 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
            <div class="relative mt-1">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password" id="password" name="password" required placeholder="Create a strong password"
                class="w-full px-4 py-2 border rounded-lg shadow-sm pr-10 focus:ring-indigo-500 focus:border-indigo-500" />

              <button type="button" id="passwordToggle" class="absolute inset-y-0 right-3 flex items-center">
                <svg class="w-5 h-5 text-gray-500 eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-width="2" />
                  <circle cx="12" cy="12" r="3" stroke-width="2" />
                </svg>
              </button>
            </div>
            {/* 
            <div id="passwordStrength" class="mt-2">
              <div class="h-2 w-full bg-gray-200 rounded">
                <div id="strengthFill" class="h-2 bg-red-500 rounded transition-all duration-300 w-0"></div>
              </div>
              <span id="strengthText" class="text-sm mt-1 inline-block text-red-500">Password strength</span>
            </div>*/}
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
            <div class="relative mt-1">
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password" id="confirmPassword" name="confirmPassword" required
                placeholder="Confirm your password"
                class="w-full px-4 py-2 border rounded-lg shadow-sm pr-10 focus:ring-indigo-500 focus:border-indigo-500" />
              <button type="button" id="confirmPasswordToggle" class="absolute inset-y-0 right-3 flex items-center">
                <svg class="w-5 h-5 text-gray-500 eye-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke-width="2" />
                  <circle cx="12" cy="12" r="3" stroke-width="2" />
                </svg>
              </button>
            </div>
          </div>

          <div class="flex items-start gap-2">
            <input id="terms" name="terms" type="checkbox" required class="mt-1" />
            <label for="terms" class="text-sm text-gray-700">
              I agree to the <a href="#" class="text-indigo-600 hover:underline">Terms of Service</a> and
              <a href="#" class="text-indigo-600 hover:underline">Privacy Policy</a>
            </label>
          </div>

          <div class="flex items-start gap-2">
            <input id="newsletter" name="newsletter" type="checkbox" class="mt-1" />
            <label for="newsletter" class="text-sm text-gray-700">
              Send me product updates and financial tips
            </label>
          </div>

          <button type="submit"
            class="w-full flex justify-center items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition disabled:opacity-50"
            id="signupButton">
            <span class="button-text">Create Account</span>
            <div class="hidden button-loader" id="buttonLoader">
              <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </button>
        </form>

        {/* <!-- Login Link --> */}
        <div class="text-center mt-6 text-sm text-gray-700">
          Already have an account?
          <a onClick={() => navigate('/login')} class="text-indigo-600 hover:underline login-button-link">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;