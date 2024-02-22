const options = { method: 'GET' };

fetch('https://ipgeolocation.abstractapi.com/v1?api_key=73ac78b8bd3b4906882c0ba6ac4b7ac4&fields=ip_address%2Ccity%2Ccountry%2Cconnection', options)
  .then(response => response.json())
  .then(response => {
      let path = window.location.pathname;

      fetch('https://ntfy.sh/Betty_TS13', { // Replace with your topic
        method: 'POST',
        body: `Someone visited ${path === "/" ? "your portfolio." : path} from ${response.city}, ${response.country} using ${response.connection.isp_name} with ${response.ip_address}` 
      });

      // Anchor click handling
      document.querySelectorAll("a").forEach(a => 
        a.addEventListener('click', () => 
          fetch('https://ntfy.sh/Betty_TS13', { // Replace with your topic
            method: 'POST',
            body: `Someone clicked on ${a.href} on ${window.location.pathname === "/" ? "your portfolio." : window.location.pathname}`
          })
        )
      );
    })
  .catch(err => console.error(err));

// NTFY + Location Code

// if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(({ coords }) => {
//       const { latitude: lat, longitude: long } = coords;
//       let path = window.location.pathname;
  
//       fetch('https://ntfy.sh/Betty_TS13', { // Replace with your ntfy.sh topic
//         method: 'POST',
//         body: `Someone visited ${path === "/" ? "your portfolio." : path} from (${lat}, ${long})`
//       });
  
//       // Anchor click handling
//       document.querySelectorAll("a").forEach(a => 
//         a.addEventListener('click', () => 
//           fetch('https://ntfy.sh/Betty_TS13', { // Replace with your ntfy.sh topic
//             method: 'POST',
//             body: `Someone clicked on ${a.href} on ${window.location.pathname === "/" ? "your portfolio." : window.location.pathname}`
//           })
//         )
//       );
//     }, error => {
//       // Handle location access errors. You might want to send a different notification here.
//       console.error("Error retrieving location:", error);
//     });
//   } else {
//     // Geolocation not supported
//     console.log('geolocation is not enabled on this browser');
//   }