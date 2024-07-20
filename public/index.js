// Let's add the styling for the page

(() => {
  var theme = Cookies.get("theme");
  if (theme == undefined) {
    theme = "dark";
    Cookies.set("theme", theme);
  }

  //TEMP
  if (theme == "light") {
    alert(
      "We're sorry, light theme is broken and will be fixed in a future update, enjoy dark mode instead."
    );
    theme = "dark";
    Cookies.set("theme", theme);
  }

  document.body.classList.add(`${theme}-ui`);
})();

function edit(event) {
  event.preventDefault();
  var content = document.getElementById("content").value;
  var title = document.getElementById("title").value;
  var tags = document.getElementById("tags").value;
}

function create(event) {
  event.preventDefault();
}

function save(event) {
  event.preventDefault();
}

function load(event) {
  event.preventDefault();
  var file = document.getElementById("file").value;
  file = file.replaceAll("/", "");
  file = file.replaceAll(".md", "");

  fetch(`/info/${file}.json`)
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      } else {
        return { error: "File not found or could not load file's tags." };
      }
    })
    .then((json) => {
      if (json.error) {
        document.getElementById("tags").innerHTML = `<b1 style='color: red'>${json.error}</b1>`;
      } else {
        document.getElementById("tags").innerHTML = `<b1> File's Tags: ${(json.tags).join(", ")}</b1>`;
      }
    });

  fetch(`/view/${file}.md`)
    .then((res) => {
      if (res.status == 200) {
        return res.text();
      } else {
        return "<b1 style='color: red'>File not found</b1>";
      }
    })
    .then((html) => {
      document.getElementById("file_content").innerHTML = `${html}`;
    });
}
