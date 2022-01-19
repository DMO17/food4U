// Handle signup and login
const signupForm = $("#signup-form");
const loginForm = $("#login-form");
const logoutBtn = $("#logout");
const foodPostForm = $("#food-post-form");
const editFoodPostForm = $(".food-post-edit");

const handleSignupFormSubmission = async (event) => {
  event.preventDefault();

  const alertMessage = $("#alert-message");

  const first_name = $("#first-name").val();
  const last_name = $("#last-name").val();
  const email = $("#email").val();
  const username = $("#username").val();
  const password = $("#password").val();
  const confirmPassword = $("#confirm-password").val();
  const location = $("#location").val();
  const description = $("#user-about").val();
  const profile_url = $("#profile-img-url").val();
  const phone_num = $("#phone-number").val();

  console.log(first_name, last_name, email, username, password);

  if (password === confirmPassword && password.length > 8) {
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
        location,
        description,
        profile_url,
        phone_num,
      }),
      redirect: "follow",
    });

    const data = await response.json();

    console.log(data);

    if (data.success) {
      window.location.replace("/login");
    } else {
      const warning = `<div class="alert alert-success" role="alert">
       The email or username already has an account
      </div>`;
      alertMessage.empty();

      return alertMessage.append(warning);
    }
  } else if (
    !first_name ||
    !last_name ||
    !email ||
    !username ||
    !password ||
    !confirmPassword
  ) {
    const warning = `<div class="alert alert-success" role="alert">
    Please Fill out the required fields to sign-up
  </div>`;

    alertMessage.empty();
    alertMessage.append(warning);
  } else if (password === confirmPassword && password.length < 8) {
    const warning = `<div class="alert alert-success" role="alert">
     Your password must be have over 8 characters
    </div>`;
    alertMessage.empty();
    alertMessage.append(warning);
  } else if (password != confirmPassword && password.length > 8) {
    const warning = `<div class="alert alert-success" role="alert">
    Your confirm password does'nt match
  </div>`;

    alertMessage.empty();

    alertMessage.append(warning);
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

const handleFoodPostSubmission = async (event) => {
  event.preventDefault();
  const food_name = $("#food-title").val();
  // const food_url = $("#food-image-url").val() || $("#food-image").val() ,
  const food_url = $("#food-image-url").val();
  const description = $("#food-description").val();
  const price = $("#food-price").val();
  const location = $("#food-address").val();
  const food_type = $("#food-type").val();

  console.log(food_name, food_url, description, price, location, food_type);

  if (food_name && food_url && description && price && food_type) {
    const response = await fetch("/api/food-post", {
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

    if (data.success) {
      window.location.replace("/dashboard");
    } else {
      const warning = `<div class="alert alert-success" role="alert">
      Please fill in the required fields correctly
      </div>`;

      $("#alert-message").empty();
      return $("#alert-message").append(warning);
    }
  } else {
    const warning = `<div class="alert alert-success" role="alert">
    Please fill in the required fields
    </div>`;

    $("#alert-message").empty();
    return $("#alert-message").append(warning);
  }
};

const handleEditFoodPostSubmission = async (event) => {
  event.preventDefault();

  // window.location.pathname.split('/')[3]

  const { id } = event.target;

  const food_name = $("#food-title").val();
  const food_url = $("#food-image-url").val();
  const description = $("#food-description").val();
  const price = Number($("#food-price").val());
  const location = $("#food-address").val();
  const food_type = $("#food-type").val();
  const status = $("#food-item").val();

  if (food_name && food_url && description && price && food_type) {
    const response = await fetch(`/api/food-post/${id}`, {
      method: "PUT",
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
        status,
      }),
      // redirect: "follow",
    });

    const data = await response.json();

    console.log(`this is the data`, data);

    if (data.success) {
      window.location.replace("/dashboard");
    } else {
      const warning = `<div class="alert alert-success" role="alert">
      Please fill in the required fields correctly
      </div>`;

      $("#alert-message").empty();
      return $("#alert-message").append(warning);
    }
  } else {
    const warning = `<div class="alert alert-success" role="alert">
    Please fill in the required fields
    </div>`;

    $("#alert-message").empty();
    return $("#alert-message").append(warning);
  }
};

signupForm.on("submit", handleSignupFormSubmission);
loginForm.on("submit", handleLoginFormSubmission);
foodPostForm.on("submit", handleFoodPostSubmission);
editFoodPostForm.on("submit", handleEditFoodPostSubmission);
logoutBtn.on("click", handleLogout);
