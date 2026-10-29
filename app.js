const archiveData = [
  {
    id: 1,
    title: "Good Morning America",
    network: "ABC",
    channel: "KABC",
    date: "2024-09-22",
    start: "07:00",
    end: "09:00",
    year: "2020s",
    type: "Morning Show",
    description: "A national morning broadcast featuring live news, weather, interviews, and lifestyle stories from Los Angeles.",
  },
  {
    id: 2,
    title: "CBS Evening News",
    network: "CBS",
    channel: "KCBS",
    date: "2024-09-22",
    start: "18:00",
    end: "18:30",
    year: "2020s",
    type: "News",
    description: "Evening national news with in-depth reporting and the latest developments in politics, policy, and culture.",
  },
  {
    id: 3,
    title: "NBC Nightly News",
    network: "NBC",
    channel: "KNBC",
    date: "2024-09-22",
    start: "18:30",
    end: "19:00",
    year: "2020s",
    type: "News",
    description: "The flagship nightly broadcast delivering national and international reporting with local market context.",
  },
  {
    id: 4,
    title: "FOX News at Ten",
    network: "FOX",
    channel: "KTTV",
    date: "2024-09-22",
    start: "22:00",
    end: "23:00",
    year: "2020s",
    type: "News",
    description: "A late-night national and local news program covering politics, analysis, and community news.",
  },
  {
    id: 5,
    title: "PBS NewsHour",
    network: "PBS",
    channel: "KOCE",
    date: "2024-09-22",
    start: "18:00",
    end: "19:00",
    year: "2010s",
    type: "Public Affairs",
    description: "A reported public affairs program with comprehensive coverage of policy, international affairs, and science.",
  },
  {
    id: 6,
    title: "The Oprah Winfrey Show",
    network: "ABC",
    channel: "KABC",
    date: "2010-03-19",
    start: "16:00",
    end: "17:00",
    year: "2010s",
    type: "Talk",
    description: "A landmark daytime talk program featuring celebrity interviews, life stories, and cultural conversations.",
  },
  {
    id: 7,
    title: "America's Funniest Home Videos",
    network: "ABC",
    channel: "WABC",
    date: "2008-11-02",
    start: "20:00",
    end: "21:00",
    year: "2000s",
    type: "Comedy",
    description: "A long-running family-friendly comedy series showcasing viral, real-life clips and home videos from around the country.",
  },
  {
    id: 8,
    title: "Sunday Night Football",
    network: "NBC",
    channel: "WNBC",
    date: "2014-09-21",
    start: "20:00",
    end: "23:15",
    year: "2010s",
    type: "Sports",
    description: "A primetime NFL game broadcast with studio analysis, highlights, and network coverage of major matchups.",
  },
  {
    id: 9,
    title: "60 Minutes",
    network: "CBS",
    channel: "WCBS",
    date: "2012-02-12",
    start: "19:00",
    end: "20:00",
    year: "2010s",
    type: "News Magazine",
    description: "Investigative reporting and long-form interviews covering politics, society, business, and human interest stories.",
  },
  {
    id: 10,
    title: "Sesame Street",
    network: "PBS",
    channel: "WNET",
    date: "2006-01-16",
    start: "09:00",
    end: "09:30",
    year: "2000s",
    type: "Children's",
    description: "Educational children's programming combining literacy, music, and classic Muppet segments for early learners.",
  },
  {
    id: 11,
    title: "Local News at 11",
    network: "FOX",
    channel: "WNYW",
    date: "2025-02-06",
    start: "23:00",
    end: "23:30",
    year: "present",
    type: "Local News",
    description: "A local market news broadcast covering weather, traffic, local politics, and neighborhood updates.",
  },
  {
    id: 12,
    title: "NBC Sports Desk",
    network: "NBC",
    channel: "NBC Sports",
    date: "2025-04-18",
    start: "22:00",
    end: "23:00",
    year: "present",
    type: "Sports",
    description: "Analysis and recap for major sports events, trade stories, and league highlights across the network.",
  },
  {
    id: 13,
    title: "ABC World News Tonight",
    network: "ABC",
    channel: "WABC",
    date: "2018-06-20",
    start: "18:00",
    end: "18:30",
    year: "2010s",
    type: "News",
    description: "A polished evening national bulletin with politics, international developments, and human interest features.",
  },
  {
    id: 14,
    title: "The Daily Show",
    network: "Comedy Central",
    channel: "CMDY",
    date: "2016-12-08",
    start: "23:00",
    end: "23:30",
    year: "2010s",
    type: "Comedy",
    description: "Satirical news and cultural commentary built around current events, interviews, and comedy headlines.",
  },
  {
    id: 15,
    title: "The Price Is Right",
    network: "CBS",
    channel: "KCBS",
    date: "2005-06-09",
    start: "11:00",
    end: "12:00",
    year: "2000s",
    type: "Game Show",
    description: "A long-running television game show featuring audience participation, prizes, and big-ticket product reveals.",
  },
  {
    id: 16,
    title: "Wheel of Fortune",
    network: "CBS",
    channel: "WCBS",
    date: "2023-08-17",
    start: "19:30",
    end: "20:30",
    year: "2020s",
    type: "Game Show",
    description: "A widely recognized puzzle game show with contestants and a rotating set of daily prizes and bonuses.",
  },
  {
    id: 17,
    title: "This Old House",
    network: "PBS",
    channel: "WGBH",
    date: "2016-10-12",
    start: "11:00",
    end: "12:00",
    year: "2010s",
    type: "Lifestyle",
    description: "A home and renovation program highlighting remodels, trades, and sustainable improvement techniques.",
  },
  {
    id: 18,
    title: "Univision Noticias",
    network: "Univision",
    channel: "KMEX",
    date: "2024-10-09",
    start: "21:00",
    end: "21:30",
    year: "2020s",
    type: "Spanish News",
    description: "A national Spanish-language news program with coverage of current events, weather, politics, and community stories.",
  },
  {
    id: 19,
    title: "Telemundo National Update",
    network: "Telemundo",
    channel: "KVEA",
    date: "2024-10-09",
    start: "18:00",
    end: "18:30",
    year: "2020s",
    type: "Spanish News",
    description: "An evening Spanish-language newscast focused on national events, local community issues, and live reporting.",
  },
  {
    id: 20,
    title: "The Weather Channel Forecast",
    network: "The Weather Channel",
    channel: "Weather",
    date: "2025-05-18",
    start: "08:00",
    end: "09:00",
    year: "present",
    type: "Weather",
    description: "A severe weather and climate broadcast with radar, outlooks, and daily meteorological tracking.",
  },
  {
    id: 21,
    title: "NBC Sports: Premier League",
    network: "NBC",
    channel: "NBCSN",
    date: "2023-08-12",
    start: "12:00",
    end: "14:00",
    year: "2020s",
    type: "Sports",
    description: "Live soccer coverage from a major league competition with match previews, highlights, and analysis.",
  },
  {
    id: 22,
    title: "Friends",
    network: "NBC",
    channel: "WNBC",
    date: "2002-01-18",
    start: "20:00",
    end: "20:30",
    year: "2000s",
    type: "Sitcom",
    description: "A beloved sitcom following six friends navigating work, relationships, and life in New York City.",
  },
  {
    id: 23,
    title: "ER",
    network: "NBC",
    channel: "KNBC",
    date: "2000-11-09",
    start: "21:00",
    end: "22:00",
    year: "2000s",
    type: "Drama",
    description: "A top-rated medical drama centered on emergency room staff, trauma decisions, and patient stories.",
  },
  {
    id: 24,
    title: "CSI: Crime Scene Investigation",
    network: "CBS",
    channel: "KCBS",
    date: "2004-02-12",
    start: "22:00",
    end: "23:00",
    year: "2000s",
    type: "Drama",
    description: "A forensic crime investigation series combining science, evidence, and procedural storytelling.",
  },
  {
    id: 25,
    title: "Dateline NBC",
    network: "NBC",
    channel: "WNBC",
    date: "2024-01-15",
    start: "20:00",
    end: "21:00",
    year: "2020s",
    type: "Investigative",
    description: "Investigative reporting and narrative storytelling on high-stakes stories and national issues.",
  },
  {
    id: 26,
    title: "PBS Newshour Weekend",
    network: "PBS",
    channel: "WETA",
    date: "2024-07-06",
    start: "18:00",
    end: "19:00",
    year: "2020s",
    type: "Public Affairs",
    description: "Weekend public affairs coverage with a focus on policy, science, culture, and civic issues.",
  },
  {
    id: 27,
    title: "NFL RedZone",
    network: "NFL Network",
    channel: "NFLN",
    date: "2024-11-10",
    start: "13:00",
    end: "18:00",
    year: "2020s",
    type: "Sports",
    description: "Commercial-free action tracking live NFL games and key scoring plays across the afternoon and evening slate.",
  },
  {
    id: 28,
    title: "The View",
    network: "ABC",
    channel: "WABC",
    date: "2025-02-01",
    start: "11:00",
    end: "12:00",
    year: "present",
    type: "Talk",
    description: "A daily talk lineup featuring interviews, opinion, news, and culture conversations on the hot topics of the day.",
  },
  {
    id: 29,
    title: "Access Hollywood",
    network: "NBC",
    channel: "KNBC",
    date: "2010-05-18",
    start: "18:00",
    end: "18:30",
    year: "2010s",
    type: "Entertainment",
    description: "Celebrity and entertainment coverage with interviews, premieres, and red carpet reporting.",
  },
  {
    id: 30,
    title: "Local Saturday Market Report",
    network: "CW",
    channel: "KTLA",
    date: "2025-06-22",
    start: "08:30",
    end: "09:00",
    year: "present",
    type: "Local News",
    description: "An early-morning community update covering local markets, civic events, and public affairs updates.",
  },
  {
    id: 31,
    title: "CNN News Central",
    network: "CNN",
    channel: "CNN",
    date: "2024-09-22",
    start: "10:00",
    end: "12:00",
    year: "2020s",
    type: "Cable News",
    description: "Live cable news coverage of the day’s top stories, politics, and breaking developments in one continuous news format.",
  },
  {
    id: 32,
    title: "MSNBC Live",
    network: "MSNBC",
    channel: "MSNBC",
    date: "2024-09-22",
    start: "12:00",
    end: "14:00",
    year: "2020s",
    type: "Cable News",
    description: "Political analysis and live reporting across Washington, national affairs, and cultural issues.",
  },
  {
    id: 33,
    title: "SportsCenter",
    network: "ESPN",
    channel: "ESPN",
    date: "2024-09-22",
    start: "18:00",
    end: "19:00",
    year: "2020s",
    type: "Sports",
    description: "A flagship sports news program with scores, highlights, analysis, and interviews from around the sports world.",
  },
  {
    id: 34,
    title: "NFL Live",
    network: "ESPN",
    channel: "ESPN",
    date: "2023-10-12",
    start: "16:00",
    end: "17:00",
    year: "2020s",
    type: "Sports",
    description: "NFL analysis and talking-head coverage with live reports from teams, players, and league updates.",
  },
  {
    id: 35,
    title: "Property Brothers",
    network: "HGTV",
    channel: "HGTV",
    date: "2015-11-07",
    start: "20:00",
    end: "21:00",
    year: "2010s",
    type: "Home Improvement",
    description: "A renovation-focused reality show where siblings transform homes with design, budgets, and big before-and-after reveals.",
  },
  {
    id: 36,
    title: "Chopped",
    network: "Food Network",
    channel: "Food Network",
    date: "2011-06-22",
    start: "21:00",
    end: "22:00",
    year: "2010s",
    type: "Cooking",
    description: "High-stakes culinary competition featuring chefs, mystery ingredients, and timed cooking challenges.",
  },
  {
    id: 37,
    title: "The Walking Dead",
    network: "AMC",
    channel: "AMC",
    date: "2016-10-11",
    start: "21:00",
    end: "22:00",
    year: "2010s",
    type: "Drama",
    description: "A post-apocalyptic survival drama set in a devastated world where communities struggle to survive and rebuild.",
  },
  {
    id: 38,
    title: "Major Crimes",
    network: "TNT",
    channel: "TNT",
    date: "2014-02-03",
    start: "20:00",
    end: "21:00",
    year: "2010s",
    type: "Crime Drama",
    description: "An investigative procedural focusing on a special division that handles high-profile criminal cases.",
  },
  {
    id: 39,
    title: "Modern Family",
    network: "ABC",
    channel: "ABC",
    date: "2012-11-09",
    start: "20:00",
    end: "20:30",
    year: "2010s",
    type: "Sitcom",
    description: "A mockumentary-style family sitcom following three interrelated households navigating daily life and humor.",
  },
  {
    id: 40,
    title: "Shark Tank",
    network: "ABC",
    channel: "ABC",
    date: "2019-03-15",
    start: "20:00",
    end: "21:00",
    year: "2010s",
    type: "Business",
    description: "Entrepreneurs present their businesses to investors in a high-stakes pitch format and live audience reaction.",
  },
  {
    id: 41,
    title: "Deadliest Catch",
    network: "Discovery",
    channel: "Discovery",
    date: "2010-05-12",
    start: "21:00",
    end: "22:00",
    year: "2010s",
    type: "Documentary",
    description: "A fishing documentary following crews facing perilous conditions while pursuing lucrative crab harvests in Alaska.",
  },
  {
    id: 42,
    title: "Storage Wars",
    network: "A&E",
    channel: "A&E",
    date: "2013-11-24",
    start: "22:00",
    end: "23:00",
    year: "2010s",
    type: "Reality",
    description: "A high-energy reality show following bidders as they compete to buy abandoned lockers and resell their discoveries.",
  },
  {
    id: 43,
    title: "Little House on the Prairie",
    network: "Hallmark Channel",
    channel: "Hallmark",
    date: "2002-11-03",
    start: "19:00",
    end: "20:00",
    year: "2000s",
    type: "Family Drama",
    description: "A warm-hearted family drama set in the American West, focusing on resilience, faith, and community life.",
  },
  {
    id: 44,
    title: "Coast Guard Alaska",
    network: "National Geographic",
    channel: "Nat Geo",
    date: "2024-06-06",
    start: "21:00",
    end: "22:00",
    year: "2020s",
    type: "Documentary",
    description: "Documentary survival and rescue coverage following the work of crews in dangerous waterways and remote coastal environments.",
  },
  {
    id: 45,
    title: "The First 48",
    network: "A&E",
    channel: "A&E",
    date: "2008-10-04",
    start: "20:00",
    end: "21:00",
    year: "2000s",
    type: "Crime",
    description: "An investigative police documentary emphasizing the first critical hours of homicide investigations.",
  },
  {
    id: 46,
    title: "Top Chef",
    network: "Bravo",
    channel: "Bravo",
    date: "2017-09-21",
    start: "22:00",
    end: "23:00",
    year: "2010s",
    type: "Cooking Competition",
    description: "A culinary competition series with chefs battling through rounds of high-pressure preparation and presentation.",
  },
  {
    id: 47,
    title: "The Office",
    network: "NBC",
    channel: "NBC",
    date: "2008-02-08",
    start: "20:30",
    end: "21:00",
    year: "2000s",
    type: "Comedy",
    description: "A workplace comedy featuring deadpan humor and ensemble storytelling from a fictional office environment.",
  },
  {
    id: 48,
    title: "The Last Ship",
    network: "TNT",
    channel: "TNT",
    date: "2015-04-15",
    start: "21:00",
    end: "22:00",
    year: "2010s",
    type: "Drama",
    description: "A dramatic military and survival series following a naval crew navigating a global crisis and aftermath.",
  },
  {
    id: 49,
    title: "Say Yes to the Dress",
    network: "TLC",
    channel: "TLC",
    date: "2012-03-09",
    start: "18:00",
    end: "19:00",
    year: "2010s",
    type: "Reality",
    description: "A wedding-focused reality show following brides, family choices, and the emotional decisions behind finding the perfect dress.",
  },
  {
    id: 50,
    title: "Murder, She Wrote",
    network: "Hallmark Mystery",
    channel: "Hallmark Mystery",
    date: "2001-11-17",
    start: "18:00",
    end: "19:00",
    year: "2000s",
    type: "Mystery",
    description: "A cozy mystery drama starring a mystery novelist who solves crimes in small-town communities and across charming settings.",
  },
];

const plans = [
  {
    name: "Free",
    price: 0,
    description: "Browse archived programming and local schedules without a subscription.",
    features: [
      "Access to broadcast schedule archives",
      "Limited live tuner scanning",
      "Basic program search",
      "No DVR downloads",
    ],
    featured: false,
  },
  {
    name: "Premium Archive",
    price: 9.99,
    description: "Unlock full archive access, premium channel lists, and DVR features.",
    features: [
      "Full national + local archive access",
      "DVR recording capabilities",
      "Download recordings to mobile device",
      "Priority tuner refresh + channel search",
    ],
    featured: true,
  },
  {
    name: "Family Plus",
    price: 19.99,
    description: "Multi-device access for households wanting extended archive and live-day access.",
    features: [
      "Up to 5 profiles",
      "Premium archive + all digital channels",
      "Pinned favorites and shareable watchlists",
      "Mobile download and offline viewing archive",
    ],
    featured: false,
  },
];

const state = {
  searchTerm: "",
  year: "all",
  network: "all",
  selectedDate: "2024-09-22",
  selectedPlan: plans[1].name,
  recordings: JSON.parse(localStorage.getItem("tvArchiveRecordings") || "[]"),
  user: JSON.parse(localStorage.getItem("tvArchiveUser") || "null"),
};

const archiveGrid = document.getElementById("archiveGrid");
const scheduleGrid = document.getElementById("scheduleGrid");
const networkFilter = document.getElementById("networkFilter");
const yearFilter = document.getElementById("yearFilter");
const searchInput = document.getElementById("searchInput");
const datePicker = document.getElementById("datePicker");
const recordingsList = document.getElementById("recordingsList");
const recordingQueue = document.getElementById("recordingQueue");
const tunerList = document.getElementById("tunerList");
const registerPlanSelect = document.getElementById("registerPlanSelect");
const registerModal = document.getElementById("registerModal");

const tunerChannels = [
  { name: "ABC", freq: "Ch. 7", status: "HD" },
  { name: "CBS", freq: "Ch. 2", status: "HD" },
  { name: "NBC", freq: "Ch. 4", status: "HD" },
  { name: "FOX", freq: "Ch. 11", status: "HD" },
  { name: "PBS", freq: "Ch. 28", status: "SD" },
  { name: "CW", freq: "Ch. 5", status: "HD" },
  { name: "ION", freq: "Ch. 14", status: "HD" },
  { name: "Univision", freq: "Ch. 34", status: "HD" },
  { name: "Telemundo", freq: "Ch. 52", status: "HD" },
  { name: "CNN", freq: "Ch. 202", status: "HD" },
  { name: "MSNBC", freq: "Ch. 356", status: "HD" },
  { name: "ESPN", freq: "Ch. 206", status: "HD" },
  { name: "ESPN2", freq: "Ch. 209", status: "HD" },
  { name: "HGTV", freq: "Ch. 297", status: "HD" },
  { name: "Food Network", freq: "Ch. 290", status: "HD" },
  { name: "FX", freq: "Ch. 248", status: "HD" },
  { name: "AMC", freq: "Ch. 254", status: "HD" },
  { name: "TNT", freq: "Ch. 245", status: "HD" },
  { name: "USA Network", freq: "Ch. 242", status: "HD" },
  { name: "Bravo", freq: "Ch. 237", status: "HD" },
  { name: "Discovery", freq: "Ch. 286", status: "HD" },
  { name: "A&E", freq: "Ch. 265", status: "HD" },
  { name: "Lifetime", freq: "Ch. 274", status: "HD" },
  { name: "Hallmark Channel", freq: "Ch. 312", status: "HD" },
  { name: "Paramount Network", freq: "Ch. 230", status: "HD" },
  { name: "Travel Channel", freq: "Ch. 272", status: "HD" },
  { name: "SYFY", freq: "Ch. 258", status: "HD" },
  { name: "TBS", freq: "Ch. 236", status: "HD" },
  { name: "TruTV", freq: "Ch. 246", status: "HD" },
  { name: "The Weather Channel", freq: "Ch. 361", status: "HD" },
  { name: "NFL Network", freq: "Ch. 211", status: "HD" },
];

const topNetworks = [...new Set(archiveData.map((item) => item.network))].sort();

function initFilters() {
  networkFilter.innerHTML = `<option value="all">All networks</option>${topNetworks
    .map((network) => `<option value="${network}">${network}</option>`)
    .join("")}`;

  registerPlanSelect.innerHTML = plans
    .map((plan) => `<option value="${plan.name}" ${plan.name === state.selectedPlan ? "selected" : ""}>${plan.name}</option>`)
    .join("");

  datePicker.value = state.selectedDate;
  yearFilter.value = state.year;
  networkFilter.value = state.network;
}

function getFilteredPrograms() {
  return archiveData.filter((program) => {
    const matchesSearch =
      !state.searchTerm ||
      [program.title, program.network, program.channel, program.date]
        .join(" ")
        .toLowerCase()
        .includes(state.searchTerm.toLowerCase());

    const matchesYear = state.year === "all" || program.year === state.year;
    const matchesNetwork = state.network === "all" || program.network === state.network;

    return matchesSearch && matchesYear && matchesNetwork;
  });
}

function renderArchiveCards() {
  const programs = getFilteredPrograms();

  archiveGrid.innerHTML = programs.length
    ? programs
        .slice(0, 9)
        .map(
          (program) => `
            <article class="archive-card card">
              <div class="archive-meta-row">
                <span class="network-pill">${program.network}</span>
                <span class="year-pill">${program.year}</span>
              </div>
              <h3>${program.title}</h3>
              <p class="description">${program.description}</p>
              <div class="archive-meta">
                <span>${program.channel}</span>
                <span>${program.date}</span>
              </div>
              <div class="archive-actions">
                <button class="secondary-btn record-btn" data-record="${program.id}">Record</button>
                <button class="ghost-btn" data-watch="${program.id}">Watch</button>
              </div>
            </article>
          `
        )
        .join("")
    : `<div class="card archive-card" style="grid-column: 1 / -1;"><p class="empty-state">No archive matches the current filters. Adjust the date, year, or network.</p></div>`;

  document.querySelectorAll("[data-record]").forEach((button) => {
    button.addEventListener("click", () => recordProgram(Number(button.dataset.record)));
  });

  document.querySelectorAll("[data-watch]").forEach((button) => {
    button.addEventListener("click", () => {
      const program = archiveData.find((item) => item.id === Number(button.dataset.watch));
      alert(`${program.title} is available in the archive library from ${program.date}.`);
    });
  });
}

function renderSchedule() {
  const programs = archiveData.filter((program) => program.date === state.selectedDate);

  const morning = programs.filter((item) => Number(item.start.replace(":", ".")) < 12);
  const afternoon = programs.filter(
    (item) => Number(item.start.replace(":", ".")) >= 12 && Number(item.start.replace(":", ".")) < 18
  );
  const evening = programs.filter(
    (item) => Number(item.start.replace(":", ".")) >= 18 && Number(item.start.replace(":", ".")) < 24
  );

  const columns = [
    { label: "Overnight + Morning", items: morning },
    { label: "Afternoon", items: afternoon },
    { label: "Evening", items: evening },
  ].filter((column) => column.items.length);

  scheduleGrid.innerHTML = columns
    .map(
      (column) => `
      <div class="schedule-column">
        <div class="schedule-day-header">
          <strong>${column.label}</strong>
          <span>${state.selectedDate}</span>
        </div>
        <div class="schedule-list">
          ${column.items
            .map(
              (program) => `
                <div class="schedule-item">
                  <div class="time">${program.start}</div>
                  <div>
                    <h4>${program.title}</h4>
                    <small>${program.network} · ${program.channel}</small>
                  </div>
                  <button class="record-btn" data-record="${program.id}">Record</button>
                </div>
              `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");

  document.querySelectorAll("[data-record]").forEach((button) => {
    button.addEventListener("click", () => recordProgram(Number(button.dataset.record)));
  });
}

function renderTuner() {
  tunerList.innerHTML = tunerChannels
    .map(
      (channel) => `
        <div class="tuner-item">
          <div>
            <strong>${channel.name}</strong>
            <div>${channel.freq}</div>
          </div>
          <span>${channel.status}</span>
        </div>
      `
    )
    .join("");
}

function renderRecordings() {
  const storage = state.recordings;

  if (!storage.length) {
    recordingsList.innerHTML = `<div class="empty-state">No recordings yet. choose a program and hit Record.</div>`;
    return;
  }

  recordingsList.innerHTML = storage
    .map(
      (recording) => `
        <div class="recording-item">
          <div>
            <strong>${recording.title}</strong>
            <small>${recording.network} · ${recording.date}</small>
          </div>
          <button class="secondary-btn" data-download="${recording.id}">Download</button>
        </div>
      `
    )
    .join("");

  document.querySelectorAll("[data-download]").forEach((button) => {
    const id = Number(button.dataset.download);
    button.addEventListener("click", () => downloadRecording(id));
  });
}

function renderQueue() {
  const queuedPrograms = state.recordings.slice(0, 3);

  if (!queuedPrograms.length) {
    recordingQueue.innerHTML = `<div class="empty-state">No queued programs to record.</div>`;
    return;
  }

  recordingQueue.innerHTML = queuedPrograms
    .map(
      (program) => `
        <div class="queue-item">
          <div>
            <strong>${program.title}</strong>
            <small>${program.network} · ${program.date} · ${program.start}</small>
          </div>
          <span class="status-live">Recorded</span>
        </div>
      `
    )
    .join("");
}

function recordProgram(programId) {
  const program = archiveData.find((item) => item.id === programId);
  if (!program) return;

  const existing = state.recordings.some((item) => item.id === program.id);
  if (existing) {
    alert(`${program.title} is already in your recordings.`);
    return;
  }

  const recording = { ...program, recordedAt: new Date().toISOString() };
  state.recordings = [recording, ...state.recordings];
  localStorage.setItem("tvArchiveRecordings", JSON.stringify(state.recordings));
  renderQueue();
  renderRecordings();
  alert(`${program.title} has been added to your DVR.`);
}

function downloadRecording(recordingId) {
  const recording = state.recordings.find((item) => item.id === recordingId);
  if (!recording) return;

  const fileContent = JSON.stringify(
    {
      title: recording.title,
      network: recording.network,
      date: recording.date,
      start: recording.start,
      end: recording.end,
      channel: recording.channel,
      description: recording.description,
      type: recording.type,
    },
    null,
    2
  );

  const blob = new Blob([fileContent], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${recording.title.toLowerCase().replace(/\s+/g, "-")}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function renderPlans() {
  const plansGrid = document.getElementById("plansGrid");
  plansGrid.innerHTML = plans
    .map(
      (plan) => `
        <article class="card plan-card ${plan.featured ? "featured" : ""}">
          <p class="eyebrow">${plan.name}</p>
          <div class="plan-price">
            <strong>$${plan.price}</strong>
            <span>${plan.price === 0 ? "/ free" : "/ mo"}</span>
          </div>
          <p>${plan.description}</p>
          <ul>
            ${plan.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
          <button class="${plan.featured ? "primary-btn" : "secondary-btn"}" data-plan="${plan.name}">
            ${plan.price === 0 ? "Get started" : "Choose plan"}
          </button>
        </article>
      `
    )
    .join("");

  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedPlan = button.dataset.plan;
      if (state.user) {
        state.user.plan = state.selectedPlan;
        localStorage.setItem("tvArchiveUser", JSON.stringify(state.user));
      }
      renderPlans();
      alert(`${state.selectedPlan} selected.`);
    });
  });
}

function openRegisterModal() {
  registerModal.classList.remove("hidden");
  registerModal.setAttribute("aria-hidden", "false");
}

function closeRegisterModal() {
  registerModal.classList.add("hidden");
  registerModal.setAttribute("aria-hidden", "true");
}

function handleRegistration(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);
  const account = {
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    plan: formData.get("plan"),
    memberSince: new Date().toISOString(),
  };

  state.user = account;
  localStorage.setItem("tvArchiveUser", JSON.stringify(account));
  closeRegisterModal();
  form.reset();
  alert(`Welcome to Live TV Archives, ${account.fullName}! Your ${account.plan} plan is active.`);
}

function initialize() {
  initFilters();
  renderArchiveCards();
  renderSchedule();
  renderTuner();
  renderQueue();
  renderRecordings();
  renderPlans();

  searchInput.addEventListener("input", (event) => {
    state.searchTerm = event.target.value.trim();
    renderArchiveCards();
  });

  yearFilter.addEventListener("change", (event) => {
    state.year = event.target.value;
    renderArchiveCards();
  });

  networkFilter.addEventListener("change", (event) => {
    state.network = event.target.value;
    renderArchiveCards();
  });

  datePicker.addEventListener("change", (event) => {
    state.selectedDate = event.target.value || "2024-09-22";
    renderSchedule();
  });

  document.getElementById("openRegister").addEventListener("click", openRegisterModal);
  document.getElementById("closeRegister").addEventListener("click", closeRegisterModal);
  document.querySelector("[data-close-modal]").addEventListener("click", closeRegisterModal);
  document.getElementById("scanTuner").addEventListener("click", () => {
    alert("Local basic, digital, and cable channels scanned successfully. 30+ channels are available in the archive library.");
  });
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const selector = button.dataset.scroll;
      document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
    });
  });

  document.getElementById("registerForm").addEventListener("submit", handleRegistration);
}

initialize();

if (state.user) {
  alert(`Welcome back, ${state.user.fullName}. Your ${state.user.plan} plan is active.`);
}

