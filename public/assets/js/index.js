const signupFrom = $(".signup-form");

const handleSignupFormSubmission = (event) => {
  event.preventDefault();

  const first_name = $("#first-name");
  const last_name = $("#last-name");
  const email = $("#email");
  const password = $("#first-name");
};

signupFrom.on("submit", handleSignupFormSubmission);
