let nextPage = false;

do {
  console.log(" ==> starting");

  fetch("https://website")
    .then(() => console.log("success"))
    .catch((err) => console.error(err));


  console.log(" ===> ending");
} while (nextPage);
