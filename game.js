const STORAGE_KEY = "capybara-clicker-save-v1";
const PARTICLE_SRC = "assets/capybara-particle.png";
const UPGRADE_ASSET_DIR = "assets/upgrades";
const CLICK_CAPYBARA_SRCS = [
  "assets/capybara-main.jpg",
  "assets/pop/pop-capybara-01.jpg",
  "assets/pop/pop-capybara-02.jpg",
  "assets/pop/pop-capybara-03.jpg",
  "assets/pop/pop-capybara-04.jpg",
  "assets/pop/pop-capybara-05.jpg",
];
const MAX_PARTICLES = 360;

const upgrades = [
  {
    id: "strong-paw",
    name: "Strong Paw",
    description: "The paw has plot armor.",
    category: "click",
    baseCost: 15,
    scaling: 1.18,
    type: "click",
    value: 1,
    image: `${UPGRADE_ASSET_DIR}/strong-paw.jpg`,
    badge: "PAW",
  },
  {
    id: "baby-capybara",
    name: "Baby Capybara",
    description: "Small body. Huge passive income.",
    category: "auto",
    baseCost: 25,
    scaling: 1.2,
    type: "cps",
    value: 0.2,
    image: `${UPGRADE_ASSET_DIR}/baby-capybara.jpg`,
    badge: "BABY",
  },
  {
    id: "watermelon-stand",
    name: "Watermelon Stand",
    description: "Snack logistics go brrr.",
    category: "auto",
    baseCost: 100,
    scaling: 1.22,
    type: "cps",
    value: 1,
    image: `${UPGRADE_ASSET_DIR}/watermelon-stand.jpg`,
    badge: "SNACK",
  },
  {
    id: "golden-whiskers",
    name: "Golden Whiskers",
    description: "Every click gets suspiciously shiny.",
    category: "click",
    baseCost: 120,
    scaling: 1.23,
    type: "click",
    value: 5,
    image: `${UPGRADE_ASSET_DIR}/golden-whiskers.jpg`,
    badge: "GOLD",
  },
  {
    id: "chill-aura",
    name: "Chill Aura",
    description: "Too relaxed to obey math.",
    category: "multi",
    baseCost: 600,
    scaling: 1.55,
    type: "globalMultiplier",
    value: 0.12,
    image: `${UPGRADE_ASSET_DIR}/chill-aura.jpg`,
    badge: "CHILL",
  },
  {
    id: "hot-spring",
    name: "Hot Spring",
    description: "Passive capybara soup, legally.",
    category: "auto",
    baseCost: 550,
    scaling: 1.24,
    type: "cps",
    value: 5,
    image: `${UPGRADE_ASSET_DIR}/hot-spring.jpg`,
    badge: "SPA",
  },
  {
    id: "mega-chomp",
    name: "Mega Chomp",
    description: "One bite, several business quarters.",
    category: "click",
    baseCost: 1500,
    scaling: 1.27,
    type: "click",
    value: 35,
    image: `${UPGRADE_ASSET_DIR}/mega-chomp.jpg`,
    badge: "CHOMP",
  },
  {
    id: "meme-boost",
    name: "Meme Boost",
    description: "The algorithm has noticed the rodent.",
    category: "multi",
    baseCost: 2000,
    scaling: 1.6,
    type: "clickMultiplier",
    value: 0.25,
    image: `${UPGRADE_ASSET_DIR}/meme-boost.jpg`,
    badge: "MEME",
  },
  {
    id: "capybara-spa",
    name: "Capybara Spa",
    description: "Tiny towels, massive revenue.",
    category: "auto",
    baseCost: 3200,
    scaling: 1.25,
    type: "cps",
    value: 22,
    image: `${UPGRADE_ASSET_DIR}/capybara-spa.jpg`,
    badge: "RELAX",
  },
  {
    id: "hydro-power",
    name: "Hydro Power",
    description: "Wet rodents discovered compounding.",
    category: "multi",
    baseCost: 6500,
    scaling: 1.62,
    type: "cpsMultiplier",
    value: 0.3,
    image: `${UPGRADE_ASSET_DIR}/hydro-power.jpg`,
    badge: "WET",
  },
  {
    id: "capybara-farm",
    name: "Capybara Farm",
    description: "Acres of premium chill.",
    category: "auto",
    baseCost: 18000,
    scaling: 1.27,
    type: "cps",
    value: 120,
    image: `${UPGRADE_ASSET_DIR}/capybara-farm.jpg`,
    badge: "FARM",
  },
  {
    id: "orange-shrine",
    name: "Orange Shrine",
    description: "Citrus-based financial advice.",
    category: "multi",
    baseCost: 25000,
    scaling: 1.7,
    type: "globalMultiplier",
    value: 0.5,
    image: `${UPGRADE_ASSET_DIR}/orange-shrine.jpg`,
    badge: "JUICE",
  },
  {
    id: "capybara-city",
    name: "Capybara City",
    description: "Urban planning, but mostly naps.",
    category: "auto",
    baseCost: 110000,
    scaling: 1.28,
    type: "cps",
    value: 750,
    image: `${UPGRADE_ASSET_DIR}/capybara-city.jpg`,
    badge: "CITY",
  },
  {
    id: "capybara-empire",
    name: "Capybara Empire",
    description: "The map is now 80 percent snout.",
    category: "auto",
    baseCost: 1000000,
    scaling: 1.3,
    type: "cps",
    value: 7500,
    image: `${UPGRADE_ASSET_DIR}/capybara-empire.jpg`,
    badge: "KING",
  },
  {
    id: "cosmic-capybara",
    name: "Cosmic Capybara",
    description: "Space-time enters relaxed mode.",
    category: "multi",
    baseCost: 15000000,
    scaling: 1.85,
    type: "globalMultiplier",
    value: 1,
    image: `${UPGRADE_ASSET_DIR}/cosmic-capybara.jpg`,
    badge: "MOON",
  },
  {
    id: "infinite-hot-spring",
    name: "Infinite Hot Spring",
    description: "No one knows where the bubbles end.",
    category: "auto",
    baseCost: 120000000,
    scaling: 1.34,
    type: "cps",
    value: 100000,
    image: `${UPGRADE_ASSET_DIR}/infinite-hot-spring.jpg`,
    badge: "INF",
  },
];

const memeLines = [
  "very chill economy",
  "capybara math unlocked",
  "the vibes are compounding",
  "rodent stonks only go up",
  "snout-powered capitalism",
  "this is fine and profitable",
  "certified melon moment",
  "peak hot spring liquidity",
];

const state = {
  capybaras: 0,
  totalEarned: 0,
  lifetimeClicks: 0,
  upgrades: Object.fromEntries(upgrades.map((upgrade) => [upgrade.id, 0])),
};

const elements = {
  capybaraButton: document.querySelector("#capybaraButton"),
  mainCapybaraImage: document.querySelector("#mainCapybaraImage"),
  capybaraCount: document.querySelector("#capybaraCount"),
  perClick: document.querySelector("#perClick"),
  perSecond: document.querySelector("#perSecond"),
  particleLayer: document.querySelector("#particleLayer"),
  imageViewer: document.querySelector("#imageViewer"),
  imageViewerImage: document.querySelector("#imageViewerImage"),
  imageViewerCaption: document.querySelector("#imageViewerCaption"),
  upgradeList: document.querySelector("#upgradeList"),
  ownedTotal: document.querySelector("#ownedTotal"),
  fullscreenButton: document.querySelector("#fullscreenButton"),
  resetButton: document.querySelector("#resetButton"),
  memeLine: document.querySelector("#memeLine"),
};

let lastFrame = performance.now();
let lastSaved = performance.now();
let lastUiRefresh = 0;
let memeIndex = 0;
let mainCapybaraIndex = 0;

function loadGame() {
  const rawSave = localStorage.getItem(STORAGE_KEY);

  if (!rawSave) {
    return;
  }

  try {
    const save = JSON.parse(rawSave);
    state.capybaras = getFiniteNumber(save.capybaras, 0);
    state.totalEarned = getFiniteNumber(save.totalEarned, state.capybaras);
    state.lifetimeClicks = getFiniteNumber(save.lifetimeClicks, 0);

    for (const upgrade of upgrades) {
      state.upgrades[upgrade.id] = Math.max(0, Math.floor(getFiniteNumber(save.upgrades?.[upgrade.id], 0)));
    }
  } catch {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function saveGame() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      capybaras: state.capybaras,
      totalEarned: state.totalEarned,
      lifetimeClicks: state.lifetimeClicks,
      upgrades: state.upgrades,
      savedAt: Date.now(),
    }),
  );
}

function getFiniteNumber(value, fallback) {
  return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function getUpgradeCost(upgrade) {
  const owned = state.upgrades[upgrade.id] ?? 0;
  return Math.floor(upgrade.baseCost * upgrade.scaling ** owned);
}

function getUpgradeUnlockCost(upgrade) {
  return upgrade.baseCost;
}

function isUpgradeUnlocked(upgrade) {
  return state.totalEarned >= getUpgradeUnlockCost(upgrade);
}

function getTotals() {
  let clickBase = 1;
  let cpsBase = 0;
  let clickMultiplier = 1;
  let cpsMultiplier = 1;
  let globalMultiplier = 1;

  for (const upgrade of upgrades) {
    const owned = state.upgrades[upgrade.id] ?? 0;

    if (owned <= 0) {
      continue;
    }

    if (upgrade.type === "click") {
      clickBase += upgrade.value * owned;
    }

    if (upgrade.type === "cps") {
      cpsBase += upgrade.value * owned;
    }

    if (upgrade.type === "clickMultiplier") {
      clickMultiplier *= (1 + upgrade.value) ** owned;
    }

    if (upgrade.type === "cpsMultiplier") {
      cpsMultiplier *= (1 + upgrade.value) ** owned;
    }

    if (upgrade.type === "globalMultiplier") {
      globalMultiplier *= (1 + upgrade.value) ** owned;
    }
  }

  return {
    perClick: clickBase * clickMultiplier * globalMultiplier,
    perSecond: cpsBase * cpsMultiplier * globalMultiplier,
  };
}

function formatNumber(value) {
  if (value < 1000) {
    return value.toLocaleString("en-US", {
      maximumFractionDigits: value < 100 ? 1 : 0,
    });
  }

  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);
}

function formatSignedNumber(value) {
  return `+${formatNumber(value)}`;
}

function getEffectText(upgrade) {
  if (upgrade.type === "click") {
    return `+${formatNumber(upgrade.value)} per click`;
  }

  if (upgrade.type === "cps") {
    return `+${formatNumber(upgrade.value)} per second`;
  }

  if (upgrade.type === "clickMultiplier") {
    return `+${Math.round(upgrade.value * 100)}% click power`;
  }

  if (upgrade.type === "cpsMultiplier") {
    return `+${Math.round(upgrade.value * 100)}% passive power`;
  }

  return `+${Math.round(upgrade.value * 100)}% all power`;
}

function renderUpgrades() {
  elements.upgradeList.innerHTML = "";

  for (const upgrade of upgrades) {
    const card = document.createElement("article");
    card.className = "upgrade-card";
    card.dataset.upgradeId = upgrade.id;

    const icon = document.createElement("button");
    icon.className = "upgrade-icon";
    icon.type = "button";
    icon.dataset.role = "imageButton";
    icon.setAttribute("aria-label", `View ${upgrade.name} image`);
    icon.addEventListener("click", () => openUpgradeImage(upgrade));

    const iconImage = document.createElement("img");
    iconImage.src = upgrade.image;
    iconImage.alt = "Locked capybara";
    iconImage.dataset.role = "image";
    iconImage.decoding = "async";

    const badge = document.createElement("span");
    badge.className = "upgrade-badge";
    badge.dataset.role = "badge";
    badge.textContent = upgrade.badge;

    icon.append(iconImage, badge);

    const copy = document.createElement("div");
    copy.className = "upgrade-copy";

    const titleRow = document.createElement("div");
    titleRow.className = "upgrade-title-row";

    const name = document.createElement("div");
    name.className = "upgrade-name";
    name.dataset.role = "name";
    name.textContent = "???";

    const owned = document.createElement("span");
    owned.className = "upgrade-owned";
    owned.dataset.role = "owned";

    titleRow.append(name, owned);

    const description = document.createElement("p");
    description.className = "upgrade-description";
    description.textContent = upgrade.description;

    const effect = document.createElement("p");
    effect.className = "upgrade-effect";
    effect.textContent = getEffectText(upgrade);

    const cost = document.createElement("p");
    cost.className = "upgrade-cost";
    cost.dataset.role = "cost";

    copy.append(titleRow, description, effect, cost);

    const button = document.createElement("button");
    button.className = "buy-button";
    button.type = "button";
    button.dataset.upgradeId = upgrade.id;
    button.textContent = "Buy";
    button.addEventListener("click", () => buyUpgrade(upgrade.id));

    card.append(icon, copy, button);
    elements.upgradeList.append(card);
  }

  refreshUpgradeStates();
}

function openUpgradeImage(upgrade) {
  if (!isUpgradeUnlocked(upgrade)) {
    return;
  }

  elements.imageViewerImage.src = upgrade.image;
  elements.imageViewerImage.alt = `${upgrade.name} capybara`;
  elements.imageViewerCaption.textContent = upgrade.name;
  elements.imageViewer.classList.add("is-open");
  elements.imageViewer.setAttribute("aria-hidden", "false");
}

function closeUpgradeImage() {
  elements.imageViewer.classList.remove("is-open");
  elements.imageViewer.setAttribute("aria-hidden", "true");
  elements.imageViewerImage.removeAttribute("src");
  elements.imageViewerImage.alt = "";
  elements.imageViewerCaption.textContent = "";
}

function refreshUpgradeStates() {
  let ownedTotal = 0;

  for (const upgrade of upgrades) {
    const owned = state.upgrades[upgrade.id] ?? 0;
    ownedTotal += owned;

    const cost = getUpgradeCost(upgrade);
    const unlockCost = getUpgradeUnlockCost(upgrade);
    const locked = !isUpgradeUnlocked(upgrade);
    const canBuy = !locked && state.capybaras >= cost;
    const card = elements.upgradeList.querySelector(`[data-upgrade-id="${upgrade.id}"]`);
    const imageButton = card.querySelector('[data-role="imageButton"]');
    const iconImage = card.querySelector('[data-role="image"]');
    const button = card.querySelector(".buy-button");
    const badge = card.querySelector('[data-role="badge"]');
    const nameElement = card.querySelector('[data-role="name"]');
    const ownedElement = card.querySelector('[data-role="owned"]');
    const costElement = card.querySelector('[data-role="cost"]');

    card.classList.toggle("can-buy", canBuy);
    card.classList.toggle("locked", locked);
    imageButton.disabled = locked;
    imageButton.setAttribute(
      "aria-label",
      locked
        ? `Locked capybara image. Costs ${formatNumber(unlockCost)} capybaras`
        : `View ${upgrade.name} image`,
    );
    iconImage.alt = locked ? "Locked capybara" : `${upgrade.name} capybara`;
    button.disabled = !canBuy;
    button.textContent = locked ? "Locked" : "Buy";
    badge.textContent = locked ? "LOCK" : upgrade.badge;
    nameElement.textContent = locked ? "???" : upgrade.name;
    ownedElement.textContent = `${owned} owned`;
    costElement.textContent = `${formatNumber(locked ? unlockCost : cost)} capybaras`;
  }

  elements.ownedTotal.textContent = `${ownedTotal} owned`;
}

function buyUpgrade(upgradeId) {
  const upgrade = upgrades.find((item) => item.id === upgradeId);

  if (!upgrade) {
    return;
  }

  const cost = getUpgradeCost(upgrade);

  if (!isUpgradeUnlocked(upgrade) || state.capybaras < cost) {
    return;
  }

  state.capybaras -= cost;
  state.upgrades[upgrade.id] += 1;
  refreshUi();
  refreshUpgradeStates();
  saveGame();
}

function clickCapybara(event) {
  const totals = getTotals();
  const earned = totals.perClick;
  state.capybaras += earned;
  state.totalEarned += earned;
  state.lifetimeClicks += 1;

  const rect = elements.capybaraButton.getBoundingClientRect();
  const x = event?.clientX ?? rect.left + rect.width / 2;
  const y = event?.clientY ?? rect.top + rect.height / 2;

  elements.capybaraButton.classList.remove("is-bonking");
  void elements.capybaraButton.offsetWidth;
  elements.capybaraButton.classList.add("is-bonking");
  window.setTimeout(() => elements.capybaraButton.classList.remove("is-bonking"), 120);

  cycleMainCapybara();
  spawnClickCapybaras(x, y);
  spawnParticles(x, y);
  spawnScore(x, y, earned);
  rotateMemeLine();
  refreshUi();
  refreshUpgradeStates();
}

function cycleMainCapybara() {
  const nextOffset = randomInt(1, CLICK_CAPYBARA_SRCS.length - 1);
  mainCapybaraIndex = (mainCapybaraIndex + nextOffset) % CLICK_CAPYBARA_SRCS.length;
  elements.mainCapybaraImage.src = CLICK_CAPYBARA_SRCS[mainCapybaraIndex];
}

function spawnClickCapybaras(x, y) {
  const amount = randomInt(3, 6);

  for (let index = 0; index < amount; index += 1) {
    const capybara = document.createElement("img");
    const angle = Math.random() * Math.PI * 2;
    const distance = randomBetween(80, 210);
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    const size = randomBetween(94, 168);
    const spin = randomBetween(-22, 22);

    capybara.className = "click-capybara";
    capybara.src = CLICK_CAPYBARA_SRCS[randomInt(0, CLICK_CAPYBARA_SRCS.length - 1)];
    capybara.alt = "";
    capybara.decoding = "async";
    capybara.style.left = `${x}px`;
    capybara.style.top = `${y}px`;
    capybara.style.setProperty("--dx", `${dx}px`);
    capybara.style.setProperty("--dy", `${dy}px`);
    capybara.style.setProperty("--dx-mid", `${dx * 0.45}px`);
    capybara.style.setProperty("--dy-mid", `${dy * 0.45}px`);
    capybara.style.setProperty("--spin", `${spin}deg`);
    capybara.style.setProperty("--spin-start", `${spin * -1}deg`);
    capybara.style.setProperty("--spin-end", `${spin * 2}deg`);
    capybara.style.setProperty("--size", `${size}px`);
    capybara.style.setProperty("--duration", `${randomBetween(760, 1180)}ms`);

    capybara.addEventListener("animationend", () => capybara.remove(), { once: true });
    elements.particleLayer.append(capybara);
  }

  trimParticleLayer();
}

function spawnParticles(x, y) {
  const amount = randomInt(16, 30);

  for (let index = 0; index < amount; index += 1) {
    const particle = document.createElement("img");
    const angle = Math.random() * Math.PI * 2;
    const speed = randomBetween(140, 440);
    const size = randomBetween(26, 58);
    const duration = randomBetween(620, 1050);
    const drift = randomBetween(-80, 110);
    const dx = Math.cos(angle) * speed;
    const dy = Math.sin(angle) * speed + drift;
    const spin = randomBetween(-720, 720);

    particle.className = "particle";
    particle.src = PARTICLE_SRC;
    particle.alt = "";
    particle.decoding = "async";
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;
    particle.style.setProperty("--dx", `${dx}px`);
    particle.style.setProperty("--dy", `${dy}px`);
    particle.style.setProperty("--spin", `${spin}deg`);
    particle.style.setProperty("--size", `${size}px`);
    particle.style.setProperty("--start-scale", `${randomBetween(0.72, 1.18)}`);
    particle.style.setProperty("--duration", `${duration}ms`);

    particle.addEventListener("animationend", () => particle.remove(), { once: true });
    elements.particleLayer.append(particle);
  }

  trimParticleLayer();
}

function spawnScore(x, y, earned) {
  const score = document.createElement("div");
  score.className = "float-score";
  score.textContent = formatSignedNumber(earned);
  score.style.left = `${x}px`;
  score.style.top = `${y}px`;
  score.addEventListener("animationend", () => score.remove(), { once: true });
  elements.particleLayer.append(score);
}

function trimParticleLayer() {
  while (elements.particleLayer.children.length > MAX_PARTICLES) {
    elements.particleLayer.firstElementChild.remove();
  }
}

function rotateMemeLine() {
  if (state.lifetimeClicks % 7 !== 0) {
    return;
  }

  memeIndex = (memeIndex + 1) % memeLines.length;
  elements.memeLine.textContent = memeLines[memeIndex];
}

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
  return Math.floor(randomBetween(min, max + 1));
}

function refreshUi() {
  const totals = getTotals();
  elements.capybaraCount.textContent = formatNumber(Math.floor(state.capybaras));
  elements.perClick.textContent = formatNumber(totals.perClick);
  elements.perSecond.textContent = formatNumber(totals.perSecond);
}

function tick(now) {
  const deltaSeconds = Math.min((now - lastFrame) / 1000, 0.25);
  const totals = getTotals();

  lastFrame = now;

  if (totals.perSecond > 0) {
    const earned = totals.perSecond * deltaSeconds;
    state.capybaras += earned;
    state.totalEarned += earned;
  }

  if (now - lastUiRefresh > 160) {
    refreshUi();
    refreshUpgradeStates();
    lastUiRefresh = now;
  }

  if (now - lastSaved > 5000) {
    saveGame();
    lastSaved = now;
  }

  requestAnimationFrame(tick);
}

function resetGame() {
  const confirmed = window.confirm("Reset Capybara Clicker?");

  if (!confirmed) {
    return;
  }

  state.capybaras = 0;
  state.totalEarned = 0;
  state.lifetimeClicks = 0;

  for (const upgrade of upgrades) {
    state.upgrades[upgrade.id] = 0;
  }

  localStorage.removeItem(STORAGE_KEY);
  memeIndex = 0;
  elements.memeLine.textContent = memeLines[memeIndex];
  refreshUi();
  refreshUpgradeStates();
}

function getFullscreenElement() {
  return document.fullscreenElement || document.webkitFullscreenElement;
}

function isFullscreenAvailable() {
  return Boolean(document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen);
}

async function toggleFullscreen() {
  try {
    if (getFullscreenElement()) {
      const exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen;
      await exitFullscreen.call(document);
    } else {
      const requestFullscreen = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen;
      await requestFullscreen.call(document.documentElement);
    }
  } catch {
    elements.fullscreenButton.textContent = "Blocked";
    window.setTimeout(updateFullscreenButton, 900);
  }
}

function updateFullscreenButton() {
  if (!isFullscreenAvailable()) {
    elements.fullscreenButton.disabled = true;
    elements.fullscreenButton.textContent = "Unavailable";
    return;
  }

  elements.fullscreenButton.disabled = false;
  elements.fullscreenButton.textContent = getFullscreenElement() ? "Exit Full" : "Fullscreen";
}

function bindEvents() {
  elements.capybaraButton.addEventListener("click", clickCapybara);
  elements.imageViewer.addEventListener("click", closeUpgradeImage);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && elements.imageViewer.classList.contains("is-open")) {
      closeUpgradeImage();
    }
  });
  elements.fullscreenButton.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", updateFullscreenButton);
  document.addEventListener("webkitfullscreenchange", updateFullscreenButton);
  elements.resetButton.addEventListener("click", resetGame);
  window.addEventListener("beforeunload", saveGame);
}

loadGame();
renderUpgrades();
refreshUi();
bindEvents();
updateFullscreenButton();
requestAnimationFrame(tick);
