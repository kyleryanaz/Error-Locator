const locateError = () => {
  const display = document.getElementById("jumbotron");

  let receivedString = document.getElementById("stringInput").value;

  let receivedLocation = parseInt(
    document.getElementById("locationInput").value
  );

  let result = receivedString.slice(receivedLocation - 5, receivedLocation + 4);

  display.value = result;
};
