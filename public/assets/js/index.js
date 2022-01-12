const signupFrom = $(".signup-form");

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
      description: "",
    }),
    redirect: "follow",
  });

  const data = await response.json();

  console.log(data);

  if (data.success) {
    window.location.replace("/login");
  }
};

signupFrom.on("submit", handleSignupFormSubmission);
