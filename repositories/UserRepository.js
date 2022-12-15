const registerRepo = async (payload) => {
  const _payload = JSON.stringify({
    userid: "123",
    password: "qwerty",
    email: "kayacorp.developer@gmail.com",
    fullname: "Kaya Developer",
  });

  var response = await fetch(
    "https://api.bantengseries.com/api/users2/register.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

const changePasswordRepo = async (payload) => {
  const _payload = JSON.stringify({
    userid: "123",
    oldpassword: "querty",
    newpassword: "admin",
  });

  var response = await fetch(
    "https://api.bantengseries.com/api/users2/changePassword.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

const forgotPasswordRepo = async (payload) => {
  const _payload = JSON.stringify({
    email: "kayacorp.developer@gmail.com",
  });

  var response = await fetch(
    "https://api.bantengseries.com/api/users2/forgotPassword.php",
    {
      method: "POST",
      body: _payload,
    }
  );

  const data = await response.json();

  return data;
};

export { registerRepo, changePasswordRepo, forgotPasswordRepo };
