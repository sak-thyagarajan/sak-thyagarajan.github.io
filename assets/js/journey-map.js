document.addEventListener("DOMContentLoaded", function () {
  const mapElement = document.getElementById("journey-map");
  if (!mapElement || typeof L === "undefined") return;

  const places = [
    {
      name: "University of Sydney",
      type: "Academic / professional",
      category: "academic",
      lat: -33.8886,
      lng: 151.1873,
      timeline: "2025–present",
      note: "Lecturer, School of Computer Science",
      link: "https://www.sydney.edu.au/",
    },
    {
      name: "NTT Research",
      type: "Academic / professional",
      category: "academic",
      lat: 37.3861,
      lng: -122.0839,
      timeline: "Postdoctoral period",
      note: "Postdoctoral fellow",
      link: "https://ntt-research.com/",
    },
    {
      name: "Carnegie Mellon University",
      type: "Academic / professional",
      category: "academic",
      lat: 40.4433,
      lng: -79.9436,
      timeline: "Before Sydney",
      note: "Worked with Elaine Shi",
      link: "https://www.cmu.edu/",
    },
    {
      name: "FAU Erlangen–Nürnberg",
      type: "Academic / professional",
      category: "academic",
      lat: 49.5897,
      lng: 11.011,
      timeline: "PhD",
      note: "Chair of Applied Cryptography; supervised by Dominique Schröder",
      link: "https://www.fau.eu/",
    },
    {
      name: "Saarland University",
      type: "Academic / professional",
      category: "academic",
      lat: 49.257,
      lng: 7.041,
      timeline: "MSc",
      note: "MSc in Computer Science",
      link: "https://www.uni-saarland.de/en/home.html",
    },
    {
      name: "National Institute of Technology, Trichy",
      type: "Academic / professional",
      category: "academic",
      lat: 10.7592,
      lng: 78.8132,
      timeline: "B.Tech.",
      note: "Undergraduate studies",
      link: "https://www.nitt.edu/",
    },
    {
      name: "DAV Boys Senior Secondary School, Gopalapuram",
      type: "Early years",
      category: "school",
      lat: 13.0487,
      lng: 80.2574,
      timeline: "2008–2011",
      note: "Senior secondary school, Chennai",
      link: "https://bgpm.davchennai.org/",
    },
    {
      name: "DAV BHEL School, Ranipet",
      type: "Early years",
      category: "school",
      lat: 12.9275,
      lng: 79.3332,
      timeline: "1997–2008",
      note: "Formative school years",
      link: "https://bhelranipet.davchennai.org/",
    },
  ];

  const map = L.map("journey-map", {
    scrollWheelZoom: true,
    zoomControl: true,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const markerStyle = {
    academic: {
      radius: 8,
      color: "#2563eb",
      fillColor: "#2563eb",
    },
    school: {
      radius: 8,
      color: "#f97316",
      fillColor: "#f97316",
    },
  };

  const bounds = [];

  places.forEach(function (place) {
    const style = markerStyle[place.category] || markerStyle.academic;

    const marker = L.circleMarker([place.lat, place.lng], {
      radius: style.radius,
      color: style.color,
      fillColor: style.fillColor,
      fillOpacity: 0.85,
      weight: 2,
    }).addTo(map);

    const popupContent = `
      <div class="journey-popup">
        <span class="journey-type">${place.type}</span>
        <h4>${place.name}</h4>
        <p><strong>Timeline:</strong> ${place.timeline}</p>
        <p>${place.note}</p>
        <p><a href="${place.link}" target="_blank" rel="noopener noreferrer">Visit institution</a></p>
      </div>
    `;

    marker.bindPopup(popupContent, {
      maxWidth: 280,
      closeButton: true,
    });

    marker.on("mouseover", function () {
      marker.openPopup();
    });

    marker.on("click", function () {
      marker.openPopup();
    });

    bounds.push([place.lat, place.lng]);
  });

  map.fitBounds(bounds, {
    padding: [40, 40],
    maxZoom: 5,
  });
});
