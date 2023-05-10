const apiEndpoint = "https://npiregistry.cms.hhs.gov/api/";

// Set the search query parameters
const searchParams = new URLSearchParams({
  first_name: "Alice",
  last_name: "Jones",
  limit: 100,
});

// Construct the API URL with the search query parameters
const apiUrl = `${apiEndpoint}?${searchParams}`;

// Send a GET request to the API and parse the JSON response
fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Do something with the data
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
