// Dhaaga: a guide to the cultures of every Indian state and union territory.
// To add or fix an entry, edit the PLACES list below.

const PLACES = [
  // ----- States -----
  { name: "Andhra Pradesh", type: "State", region: "South", capital: "Amaravati",
    cuisine: "Pesarattu and fiery Gongura pickle", craft: "Kondapalli wooden toys",
    festival: "Ugadi, the Telugu new year", heritage: "Tirumala Venkateswara Temple and the Lepakshi temple murals" },
  { name: "Arunachal Pradesh", type: "State", region: "Northeast", capital: "Itanagar",
    cuisine: "Thukpa and apong, a rice beer", craft: "Monpa handmade paper",
    festival: "Losar and Solung", heritage: "Tawang Monastery, among India's largest" },
  { name: "Assam", type: "State", region: "Northeast", capital: "Dispur",
    cuisine: "Masor tenga, a sour fish curry", craft: "Muga silk",
    festival: "Bihu, the harvest festival", heritage: "Kaziranga and the Ahom-era monuments of Sivasagar" },
  { name: "Bihar", type: "State", region: "East", capital: "Patna",
    cuisine: "Litti chokha", craft: "Madhubani painting",
    festival: "Chhath Puja, honouring the Sun", heritage: "Nalanda, an ancient centre of learning" },
  { name: "Chhattisgarh", type: "State", region: "Central", capital: "Raipur",
    cuisine: "Chila and faraa, rice-flour snacks", craft: "Dhokra metal casting",
    festival: "Bastar Dussehra, a 75-day tribal festival", heritage: "Rich Adivasi traditions of Bastar" },
  { name: "Goa", type: "State", region: "West", capital: "Panaji",
    cuisine: "Fish curry rice and bebinca", craft: "Kunbi weaving",
    festival: "Carnival", heritage: "Basilica of Bom Jesus and the churches of Old Goa" },
  { name: "Gujarat", type: "State", region: "West", capital: "Gandhinagar",
    cuisine: "Dhokla and thepla", craft: "Bandhani tie-dye",
    festival: "Navratri, nine nights of garba", heritage: "Rani ki Vav, the stepwell at Patan" },
  { name: "Haryana", type: "State", region: "North", capital: "Chandigarh (shared)",
    cuisine: "Bajra khichdi with ghee and lassi", craft: "Panipat handloom rugs and durries",
    festival: "Gita Mahotsav at Kurukshetra", heritage: "Kurukshetra, a site of the Mahabharata tradition" },
  { name: "Himachal Pradesh", type: "State", region: "North", capital: "Shimla",
    cuisine: "Siddu, steamed stuffed bread", craft: "Kullu shawls",
    festival: "Kullu Dussehra", heritage: "The Kalka-Shimla railway and Kangra's temples" },
  { name: "Jharkhand", type: "State", region: "East", capital: "Ranchi",
    cuisine: "Dhuska, fried rice-lentil bread", craft: "Sohrai and Khovar wall paintings",
    festival: "Sarhul, the spring festival of the sal tree", heritage: "Strong tribal traditions and forest culture" },
  { name: "Karnataka", type: "State", region: "South", capital: "Bengaluru",
    cuisine: "Bisi bele bath", craft: "Channapatna toys",
    festival: "Mysuru Dasara", heritage: "Hampi, the ruins of the Vijayanagara empire" },
  { name: "Kerala", type: "State", region: "South", capital: "Thiruvananthapuram",
    cuisine: "Sadya, the banana-leaf feast", craft: "Aranmula metal mirrors",
    festival: "Onam", heritage: "Kathakali and Theyyam performance traditions" },
  { name: "Madhya Pradesh", type: "State", region: "Central", capital: "Bhopal",
    cuisine: "Poha with jalebi", craft: "Chanderi sarees",
    festival: "Simhastha Kumbh at Ujjain", heritage: "Sanchi Stupa and the Khajuraho temples" },
  { name: "Maharashtra", type: "State", region: "West", capital: "Mumbai",
    cuisine: "Vada pav and puran poli", craft: "Paithani sarees",
    festival: "Ganesh Chaturthi", heritage: "The Ajanta and Ellora caves" },
  { name: "Manipur", type: "State", region: "Northeast", capital: "Imphal",
    cuisine: "Eromba, a mashed fish and vegetable dish", craft: "Kauna reed crafts",
    festival: "Yaoshang, the spring festival", heritage: "Manipuri classical dance and Loktak Lake" },
  { name: "Meghalaya", type: "State", region: "Northeast", capital: "Shillong",
    cuisine: "Jadoh, rice cooked with meat", craft: "Cane and bamboo work",
    festival: "Nongkrem Dance Festival", heritage: "Living root bridges grown by the Khasi people" },
  { name: "Mizoram", type: "State", region: "Northeast", capital: "Aizawl",
    cuisine: "Bai, a light vegetable stew", craft: "Puanchei weaving",
    festival: "Chapchar Kut, the spring festival", heritage: "Bamboo-rooted Mizo community life" },
  { name: "Nagaland", type: "State", region: "Northeast", capital: "Kohima",
    cuisine: "Smoked pork with bamboo shoot", craft: "Naga shawls",
    festival: "Hornbill Festival", heritage: "Kisama Heritage Village and Naga tribal traditions" },
  { name: "Odisha", type: "State", region: "East", capital: "Bhubaneswar",
    cuisine: "Dalma and pakhala", craft: "Pattachitra scroll painting",
    festival: "Rath Yatra in Puri", heritage: "Konark Sun Temple" },
  { name: "Punjab", type: "State", region: "North", capital: "Chandigarh",
    cuisine: "Makki di roti with sarson da saag", craft: "Phulkari embroidery",
    festival: "Baisakhi", heritage: "The Golden Temple in Amritsar" },
  { name: "Rajasthan", type: "State", region: "West", capital: "Jaipur",
    cuisine: "Dal baati churma", craft: "Jaipur blue pottery",
    festival: "Pushkar Camel Fair", heritage: "Amer Fort and the hill forts of Rajasthan" },
  { name: "Sikkim", type: "State", region: "Northeast", capital: "Gangtok",
    cuisine: "Momos and thukpa", craft: "Thangka painting",
    festival: "Losar and Pang Lhabsol", heritage: "Rumtek Monastery" },
  { name: "Tamil Nadu", type: "State", region: "South", capital: "Chennai",
    cuisine: "Idli with sambar and Chettinad curries", craft: "Kanchipuram silk",
    festival: "Pongal, the harvest festival", heritage: "Brihadisvara Temple at Thanjavur" },
  { name: "Telangana", type: "State", region: "South", capital: "Hyderabad",
    cuisine: "Hyderabadi biryani", craft: "Pochampally ikat",
    festival: "Bathukamma, a festival of flowers", heritage: "Charminar and Golconda Fort" },
  { name: "Tripura", type: "State", region: "Northeast", capital: "Agartala",
    cuisine: "Mui Borok, traditional Tripuri cooking", craft: "Bamboo and cane work",
    festival: "Garia Puja", heritage: "Ujjayanta Palace and Neermahal" },
  { name: "Uttar Pradesh", type: "State", region: "North", capital: "Lucknow",
    cuisine: "Awadhi biryani and Tunday kebabs", craft: "Chikankari embroidery",
    festival: "Dev Deepawali in Varanasi", heritage: "The Taj Mahal and the ghats of Varanasi" },
  { name: "Uttarakhand", type: "State", region: "North", capital: "Dehradun",
    cuisine: "Kafuli and Bal Mithai", craft: "Aipan folk art of Kumaon",
    festival: "Kumbh Mela at Haridwar", heritage: "The Char Dham pilgrimage" },
  { name: "West Bengal", type: "State", region: "East", capital: "Kolkata",
    cuisine: "Rosogolla and macher jhol", craft: "Kantha embroidery",
    festival: "Durga Puja, on UNESCO's intangible heritage list", heritage: "Victoria Memorial and Kolkata's colonial streets" },

  // ----- Union Territories -----
  { name: "Andaman and Nicobar Islands", type: "Union Territory", region: "Islands", capital: "Sri Vijaya Puram",
    cuisine: "Fresh seafood and coconut curries", craft: "Shell and driftwood craft",
    festival: "Island Tourism Festival", heritage: "Cellular Jail and the Nicobarese and other island communities" },
  { name: "Chandigarh", type: "Union Territory", region: "North", capital: "Chandigarh",
    cuisine: "Punjabi street food and chole bhature", craft: "Art from recycled material at the Rock Garden",
    festival: "Chandigarh Rose Festival", heritage: "Le Corbusier's planned city and the Capitol Complex" },
  { name: "Dadra and Nagar Haveli and Daman and Diu", type: "Union Territory", region: "West", capital: "Daman",
    cuisine: "Seafood with Portuguese influence", craft: "Warli painting",
    festival: "Tarpa dance celebrations", heritage: "Moti Daman Fort" },
  { name: "Delhi", type: "Union Territory", region: "North", capital: "New Delhi",
    cuisine: "Chaat and chole bhature", craft: "Zardozi embroidery",
    festival: "Diwali and the Qutub Festival", heritage: "The Red Fort and Qutub Minar" },
  { name: "Jammu and Kashmir", type: "Union Territory", region: "North", capital: "Srinagar and Jammu",
    cuisine: "Wazwan, the Kashmiri feast", craft: "Pashmina shawls and papier-mache",
    festival: "Tulip Festival in Srinagar", heritage: "Dal Lake and the Mughal gardens" },
  { name: "Ladakh", type: "Union Territory", region: "North", capital: "Leh",
    cuisine: "Thukpa and butter tea", craft: "Thangka painting and pashmina",
    festival: "Hemis Festival", heritage: "Hemis Monastery and Buddhist culture" },
  { name: "Lakshadweep", type: "Union Territory", region: "Islands", capital: "Kavaratti",
    cuisine: "Tuna dishes and coconut-based curries", craft: "Coconut-fibre products",
    festival: "Folk dances such as Kolkali and Parichakali", heritage: "Coral atolls and a seafaring way of life" },
  { name: "Puducherry", type: "Union Territory", region: "South", capital: "Puducherry",
    cuisine: "Franco-Tamil cooking", craft: "Handmade paper",
    festival: "Bastille Day celebrations", heritage: "The French Quarter and Auroville" }
];

const REGIONS = ["All", "North", "South", "East", "West", "Central", "Northeast", "Islands"];

const grid = document.getElementById("grid");
const filters = document.getElementById("filters");
const search = document.getElementById("search");
const count = document.getElementById("count");
const empty = document.getElementById("empty");
const dialog = document.getElementById("details");

let activeRegion = "All";

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function buildFilters() {
  REGIONS.forEach((region) => {
    const chip = el("button", "chip", region);
    chip.type = "button";
    chip.setAttribute("aria-pressed", String(region === activeRegion));
    chip.addEventListener("click", () => {
      activeRegion = region;
      filters.querySelectorAll(".chip").forEach((c) =>
        c.setAttribute("aria-pressed", String(c.textContent === region)));
      render();
    });
    filters.appendChild(chip);
  });
}

function matches(place, query) {
  if (activeRegion !== "All" && place.region !== activeRegion) return false;
  if (!query) return true;
  return Object.values(place).join(" ").toLowerCase().includes(query);
}

function openDetails(place) {
  document.getElementById("d-meta").textContent = `${place.type} · ${place.region}`;
  document.getElementById("d-title").textContent = place.name;
  const list = document.getElementById("d-list");
  list.replaceChildren();
  [
    ["Capital", place.capital],
    ["Cuisine", place.cuisine],
    ["Craft", place.craft],
    ["Festival", place.festival],
    ["Heritage", place.heritage]
  ].forEach(([label, value]) => {
    list.appendChild(el("dt", null, label));
    list.appendChild(el("dd", null, value));
  });
  dialog.showModal();
}

function render() {
  const query = search.value.trim().toLowerCase();
  const shown = PLACES.filter((p) => matches(p, query));
  grid.replaceChildren();
  shown.forEach((place) => {
    const card = el("button", "card");
    card.type = "button";
    card.appendChild(el("p", "meta", `${place.type} · ${place.region}`));
    card.appendChild(el("h3", null, place.name));
    card.appendChild(el("p", null, `${place.cuisine}. ${place.craft}.`));
    card.addEventListener("click", () => openDetails(place));
    grid.appendChild(card);
  });
  count.textContent = `Showing ${shown.length} of ${PLACES.length}`;
  empty.hidden = shown.length > 0;
}

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) dialog.close();
});

search.addEventListener("input", render);
buildFilters();
render();
