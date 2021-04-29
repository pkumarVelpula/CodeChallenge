export const calculateHoursOrDays = (postedDate) => {
  const posted = new Date(postedDate);
  const currentDate = new Date();
  const milliseconds = Math.abs(currentDate - posted);
  const hours = milliseconds / 36e5;
  return hours > 24 ? `${Math.ceil(hours / 24)} days` : "hours hr";
};


export const getDefaultLocation=()=> {
  if (navigator.geolocation) {
   return navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    return "Geolocation is not supported by this browser.";
  }
}

const showPosition=(position)=> {
  return {"Latitude" :position.coords.latitude,
  "Longitude" :position.coords.longitude}
}