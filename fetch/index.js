let nextPage = false;
let slides = [];

do {
  console.log(" ==> starting");

  await fetch("https://api.github.com/users/hadley/orgs")
    .then((data) => {
      if (data) {
        console.log(data.json())
      }
    })
    .catch((err) => console.error(err));

  console.log(" ===> ending");
} while (nextPage);
