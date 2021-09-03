window.addEventListener('load', () => {
  let long;
  let lat;
  let temperatur = document.querySelector('.degree');
  let timezone = document.querySelector('.location-timezone');
  let descripton = document.querySelector('.temperature-description');
  let iconEl = document.querySelector('.icon');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((pos) => {
      long = pos.coords.longitude;
      lat = pos.coords.latitude;
      const api = `http://api.weatherapi.com/v1/current.json?key=3bfafa4227c94aefb0c105324210209&q=${lat},${long}&aqi=no`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const { temp_c } = data.current;
          const { name, region } = data.location;
          const { icon, text } = data.current.condition;
          //set dom element to api
          temperatur.textContent = temp_c;
          timezone.textContent = name + ' ' + region;
          //set icon
          iconEl.style.backgroundImage = `url(${icon})`;
          //set description
          descripton.textContent = text;
        });
    });
  }
});
