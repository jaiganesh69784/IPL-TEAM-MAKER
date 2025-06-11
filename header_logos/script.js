// Array of team data
const teams = [
  { name: "Chennai Super Kings", logo: "CSK_logo.png" },
  { name: "Delhi Capitals", logo: "DC_logo.png" },
  { name: "Gujarat Titans", logo: "GT_logo.png" },
  { name: "Kolkata Knight Riders", logo: "KKR_logo.png" },
  { name: "Lucknow Super Giants", logo: "LSG_logo.png" },
  { name: "Mumbai Indians", logo: "MI_logo.png" },
  { name: "Punjab Kings", logo: "PBKS_logo.png" },
  { name: "Rajasthan Royals", logo: "RR_logo.png" },
  { name: "Royal Challengers Bangalore", logo: "RCB_logo.png" },
  { name: "Sunrisers Hyderabad", logo: "SRH_logo.png" }
];

// Get the logo list container
const logoList = document.getElementById("teams-logo-list");

// Loop through the teams array and create HTML for each team
teams.forEach(team => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <div class="ap-logoteam-wrp">
          <img src="logos/${team.logo}" alt="${team.name} Logo">
      </div>
  `;
  logoList.appendChild(listItem);
});