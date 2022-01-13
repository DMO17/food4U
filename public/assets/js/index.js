// Handle signup and login
const signupFrom = $("#signup-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout");
const foodPostForm = $("#food-post-form");

const handleSignupFormSubmission = async (event) => {
  event.preventDefault();

  const first_name = $("#first-name").val();
  const last_name = $("#last-name").val();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();

  console.log(first_name, last_name, email, username, password);

  const response = await fetch("/auth/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
      first_name,
      last_name,
    }),
    redirect: "follow",
  });

  const data = await response.json();

  console.log(data);

  if (data.success) {
    window.location.replace("/login");
  }
};

// Handle login

const handleLoginFormSubmission = async (event) => {
  event.preventDefault();

  const email = $("#email").val();
  const password = $("#password").val();

  console.log(email, password);

  const response = await fetch("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  console.log(data);

  if (data.success) {
    window.location.replace("/dashboard");
  }
};

// Logout handle
const handleLogout = async (event) => {
  event.preventDefault();

  const response = await fetch("/auth/logout", {
    method: "POST",
  });

  const data = await response.json();

  console.log(data);

  if (data.success) {
    window.location.replace("/");
  }
};

const handleFoodPostSubmission = (event) => {
  event.preventDefault();
  const food_name = $("#food-title").val();
  const food_url = $("#food-image-url").val();
  const description = $("#food-description").val();
  const price = $("#food-price").val();
  const location = $("#food-address").val();
  const food_type = $("#food-type").val();

  console.log(food_name, food_url, description, price, location, food_type);

  const response = await fetch("/auth/signup", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      food_name,
      food_url,
      description,
      price,
      location,
      food_type,
    }),
    redirect: "follow",
  });

  const data = await response.json();

  console.log(data);

  if (data.success) {
    window.location.replace("/dashboard");
  }
};

signupFrom.on("submit", handleSignupFormSubmission);
loginForm.on("submit", handleLoginFormSubmission);
foodPostForm.on("submit", handleFoodPostSubmission);
logoutBtn.on("click", handleLogout);
