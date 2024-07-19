function purify(text) {
  return text.replaceAll(/\\|"|'|``/gi, "");
}

async function login(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: purify(username),
      password: purify(password),
    }),
  })
    .then(async (res) => {
      var json = await res.json();
      if (res.status == 200 && json.success) {
        Cookies.set("authkey", json.authkey);
        window.location.href = "/";
      } else {
        document.getElementById("error").innerHTML =
          '<b1 class="red">Invalid username or password.</b1>';
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
