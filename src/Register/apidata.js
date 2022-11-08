let apidata;
fetch('https://frontend-take-home.fetchrewards.com/form')
  .then((response) => response.json())
  .then((data) => console.log(data));
