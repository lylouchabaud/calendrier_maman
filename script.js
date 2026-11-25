// ======================================
// CALENDRIER DE L'AVENT POUR MAMAN ❤️
// ======================================

const PASSWORD = "maman";
let MODE_TEST = false; // Mis à false pour débloquer les cases selon la date réelle

const surprises = {
  1: {
    icon: "💌",
    title: "Un cadeau juste pour toi",
    content: "Maman, bienvenue dans ton calendrier ! Pour te montrer que tu es la meilleure maman du monde, je t'ai fait un calendrier personnalisé juste pour toi. Du 2 au 24 décembre, tu auras chaque jour une petite surprise spécialement pour toi. J'espère qu'il va te plaire. Bon mois de décembre ! ❤️"
  },
  3: {
    icon: "❤️",
    title: "Petit mot du jour !",
    content: "Coucou maman ❤️, j'espère que tu vas passer une bonne journée ! On se voit ce soir ! Plein de bisous, je t'aime ❤️🥰"
  },
  2: {
    icon: "📸",
    title: "Souvenirs en duo n°1",
    content: "Deux petites photos qui remontent au 31 décembre 2016 ! Bonne journée, je t'aime ❤️ (Clique sur une photo pour l'agrandir !)\n\n" +
             "<div style='display: flex; gap: 12px; justify-content: center; margin-top: 15px; flex-wrap: wrap;'>" +
             "<img src='https://i.postimg.cc/G29VHsjt/IMG-7328.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 1'>" +
             "<img src='https://i.postimg.cc/Bn1rCDWL/IMG-7576.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 2'>" +
             "</div>"
  },
  4: {
    icon: "🧩",
    title: "Énigme n°1 : Le mystère des chocolats",
    content: "À 21 h, Stéphanie découvre Kevin inconscient sur le canapé, à côté d'une boîte de chocolats vide. Sur la table, un mot : « Le coupable a encore frappé. »\n\nLes suspects racontent :\n- Stéphanie : « Je préparais le dîner. »\n- Lylou : « Je regardais une série dans ma chambre. »\n- Mya : « Je jouais avec Oslo. »\n- Kevin, qui reprend ses esprits : « Je n’ai mangé aucun chocolat ! »\n\nLes indices :\n1. Kevin a du chocolat sur les doigts.\n2. Oslo a du chocolat sur le museau.\n3. La boîte était posée sur une étagère trop haute pour que le lapin Myranda puisse l’atteindre.\n\nQuestion : qui a probablement mangé les chocolats ?",
    solution: "Kevin ! Il a du chocolat sur les doigts et nie en avoir mangé. Oslo en a aussi sur le museau, mais il a pu simplement lécher les doigts de Kevin !"
  },
  5: {
    icon: "🌟",
    title: "3 choses que j'adore chez toi",
    content: "1. Ta gentillesse.\n2. Ton amour envers nous.\n3. Tes petits plats faits maison. ❤️\n\n💬 Et surtout j'adore que tu sois ma maman évidemment 🥰"
  },
  6: {
    icon: "😂",
    title: "Le souvenir drôle",
    content: "Je pense qu'un souvenir que l'on n'oubliera jamais est celui du café d'Espagne quand on est partis tous les 4 en 2025. Le moment où tu as pris les commandes avec la serveuse... Je n'ai jamais autant ri de ma vie ! 😂😂😂😂"
  },
  7: {
    icon: "💖",
    title: "Un doux message",
    content: "Maman, je voulais juste te rappeler que tu es la meilleure ! Sans toi je n'aurais pas mon pancake du matin, mes vêtements resteraient dans la salle de bain et ne seraient pas repassés... Bref, t'es la meilleure maman du monde ! ❤️"
  },
  8: {
    icon: "✨",
    title: "Un doux souvenir",
    content: "Repenser à tous nos moments partagés me fait toujours sourire. Merci d'être toujours là pour illuminer mes journées ! ✨\n\n💬 Quelle est ta destination de vacances préférée de tous les temps ?"
  },
  9: {
    icon: "📸",
    title: "Souvenirs en duo n°2",
    content: "Des petites photos de nous 4 qui remontent au 2 avril 2015 ! Bonne journée, je t'aime ❤️ (Clique sur une photo pour l'agrandir !)\n\n" +
             "<div style='display: flex; gap: 12px; justify-content: center; margin-top: 15px; flex-wrap: wrap;'>" +
             "<img src='https://i.postimg.cc/RZMPWHS4/IMG-1605.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 1'>" +
             "<img src='https://i.postimg.cc/SRh6HBjj/IMG-1624.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 2'>" +
             "</div>"
  },
  10: {
    icon: "💌",
    title: "Un mot doux",
    content: "Coucou maman ❤️, sache que tu es la meilleure au monde ! Prends bien soin de toi aujourd'hui.\n\n💬 Quelle est ta petite habitude préférée pour te relaxer en fin de journée ?"
  },
  11: {
    icon: "🧩",
    title: "Énigme n°2 : Le message anonyme",
    content: "Un message anonyme est retrouvé dans la cuisine :\n« Je suis passé à 20 h 15. J’ai vu tout le monde, mais personne ne m’a vu. »\n\nÀ cette heure-là :\n- Stéphanie était dans la cuisine.\n- Kevin prenait sa douche.\n- Lylou travaillait dans sa chambre.\n- Mya jouait avec Oslo dans le couloir.\n- Myranda était dans son enclos.\n\nLa caméra du couloir montre une silhouette qui passe sans s’arrêter. On distingue seulement deux longues oreilles.\n\nQuestion : qui a écrit le message ?",
    solution: "Myranda ! Ses longues oreilles sont le détail révélateur. Le message est probablement une plaisanterie ou une mise en scène… même si le lapin n'a pas encore appris à écrire !"
  },
  12: {
    icon: "🎵",
    title: "La chanson souvenir",
    content: "Écoute cette chanson aujourd'hui ! Elle me rappelle toujours nos trajets en voiture et nos moments ensemble. 🎶"
  },
  13: {
    icon: "🌟",
    title: "Un petit mot doux",
    content: "Un grand merci pour tout ce que tu fais pour nous au quotidien. Ton écoute et ta bienveillance n'ont pas de prix. ❤️\n\n💬 Qu'aimerais-tu qu'on cuisine ou qu'on fasse ensemble ce week-end ?"
  },
  14: {
    icon: "📸",
    title: "Souvenirs en duo n°3",
    content: "Des petites photos qui remontent à septembre 2018 ! Bonne journée, je t'aime ❤️ (Clique sur une photo pour l'agrandir !)\n\n" +
             "<div style='display: flex; gap: 12px; justify-content: center; margin-top: 15px; flex-wrap: wrap;'>" +
             "<img src='https://i.postimg.cc/W47TMrrH/IMG-3075.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 1'>" +
             "<img src='https://i.postimg.cc/K8S2wQDg/IMG-3095.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 2'>" +
             "</div>"
  },
  15: {
    icon: "🧩",
    title: "Énigme n°3 : La décoration brisée",
    content: "À 22 h, une précieuse décoration de Noël est retrouvée brisée. Stéphanie soupçonne un sabotage.\n\nLes déclarations :\n- Kevin : « J’étais au salon de 21 h 30 à 22 h. »\n- Stéphanie : « J’étais au téléphone jusqu’à 21 h 45. »\n- Lylou : « Je suis sortie de ma chambre à 21 h 50 et j’ai vu Kevin dans le couloir. »\n- Mya : « J’ai entendu un gros bruit à 21 h 40. »\n\nUn détail change tout : l’horloge du salon s’était arrêtée à 21 h 35, et Kevin affirme s’être fié à cette horloge pour donner son horaire.\n\nQuestion : pourquoi l’alibi de Kevin est-il suspect ?",
    solution: "Son horaire n'est pas fiable. Une horloge arrêtée à 21 h 35 ne permet pas de prouver qu'il était au salon jusqu'à 22 h. Cela rend son alibi douteux, mais ne prouve pas qu'il a cassé la décoration !"
  },
  16: {
    icon: "🌟",
    title: "Un compliment sincère",
    content: "Tu as ce don unique d'apaiser les gens et de rendre chaque journée plus douce. Merci d'être la personne formidable que tu es.\n\n💬 Quel est le plus beau compliment qu'on t'ait fait cette année ?"
  },
  17: {
    icon: "💖",
    title: "Pensée pour toi",
    content: "Sache que peu importe ce qui se passe, je suis tellement fière d'être ton enfant. Tu es un modèle de force et de douceur pour moi. Passe une merveilleuse journée ! 🌸\n\n💬 Quel genre de film aimerais-tu qu'on regarde ensemble bientôt ?"
  },
  18: {
    icon: "✨",
    title: "Un doux mot pour toi",
    content: "Tes petites manies et ta bonne humeur quotidienne, c'est ce qui met toute la vie dans la maison. Ne change rien ! ❤️\n\n💬 Quelle est la petite habitude qui te fait le plus sourire chez toi ?"
  },
  19: {
    icon: "📸",
    title: "Souvenirs en duo n°4",
    content: "Un petit souvenir qui vient du 12 février 2015 au Portugal ! Bonne journée, je t'aime ❤️ (Clique sur une photo pour l'agrandir !)\n\n" +
             "<div style='display: flex; gap: 12px; justify-content: center; margin-top: 15px; flex-wrap: wrap;'>" +
             "<img src='https://i.postimg.cc/BZjtGY2J/IMG-1060.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 1'>" +
             "<img src='https://i.postimg.cc/8PW577y2/IMG-1062.jpg' class='zoomable-photo' style='width: 45%; max-width: 150px; aspect-ratio: 1/1; object-fit: cover; border-radius: 8px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 2'>" +
             "</div>"
  },
  20: {
    icon: "💌",
    title: "Merci maman",
    content: "Pour toutes les fois où tu m'as écoutée, encouragée, consolée et aimée sans condition : Merci du fond du cœur. ❤️\n\n💬 Quel conseil précieux aimerais-tu me transmettre pour l'avenir ?"
  },
  21: {
    icon: "🧩",
    title: "Énigme n°4 : Le bijou disparu",
    content: "Un bijou a disparu dans la maison. La famille interroge les suspects.\n- Stéphanie dit l’avoir posé sur la commode.\n- Kevin affirme ne pas être entré dans la chambre.\n- Lylou a vu Mya courir avec une boîte.\n- Mya dit qu’Oslo a aboyé devant la porte.\n- Oslo remue la queue devant le panier de Myranda.\n- Myranda est introuvable dans son enclos.\n\nLa police découvre trois indices :\n1. Une trace de terre mène de la commode au panier du lapin.\n2. Un petit morceau de papier brillant est retrouvé dans le panier.\n3. Le bijou est caché sous le foin de Myranda.\n\nQuestion : qui a déplacé le bijou, et pourquoi Oslo semble-t-il si coupable ?",
    solution: "Myranda est la principale suspecte ! Le bijou a été retrouvé dans son panier et les traces y mènent. Oslo a peut-être simplement suivi la piste ou reniflé le panier. Mais attention : une preuve cachée dans son enclos ne prouve pas à elle seule que Myranda l'a déplacée !"
  },
  22: {
    icon: "💌",
    title: "Pensée chaleureuse",
    content: "À l'approche du 25 décembre, je voulais te dire à quel point j'ai de la chance de t'avoir à ma vie. 🎄"
  },
  23: {
    icon: "🎄",
    title: "Presque Noël !",
    content: "Demain c'est le grand jour ! La dernière surprise t'attend demain matin... Je t'aime fort ! ❤️"
  },
  24: {
    icon: "🎁",
    title: "Joyeux Noël Maman !",
    content: "Joyeux Noël maman ! ❤️ J'espère que ce calendrier t'aura plu ? Pour cette dernière case, voici toutes nos photos de Noël tous les 4 ! De 2014 à 2022 ! J'espère que ce mini album va te plaire. (Clique sur l'une d'elles pour l'agrandir) ✨\n\n💬 Quel a été ton moment préféré dans ce calendrier ?\n\n" +
             "<div style='display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 15px;'>" +
             "<img src='https://i.postimg.cc/HLKD02nX/IMG-0244.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 1'>" +
             "<img src='https://i.postimg.cc/Jz499gB0/IMG-4240.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 2'>" +
             "<img src='https://i.postimg.cc/ncZ81MFG/IMG-1707.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 3'>" +
             "<img src='https://i.postimg.cc/6qrkXx0H/IMG-1477.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 4'>" +
             "<img src='https://i.postimg.cc/d0hg0yBg/IMG-7053.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 5'>" +
             "<img src='https://i.postimg.cc/KYCw38ps/IMG-20191224-185046.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 6'>" +
             "<img src='https://i.postimg.cc/vZNSCmyy/IMG-20201128-171430.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 7'>" +
             "<img src='https://i.postimg.cc/ZRr79FdJ/IMG-20211224-181202.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 8'>" +
             "<img src='https://i.postimg.cc/dQjNw6Fp/IMG-20221224-194407-1.jpg' class='zoomable-photo' style='width: 100%; aspect-ratio: 1/1; object-fit: cover; border-radius: 6px; border: 1px solid #f4c96b44; cursor: pointer;' alt='Photo 9'>" +
             "</div>"
  }
};

const loginScreen = document.getElementById("login-screen");
const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");
const site = document.getElementById("site");

const calendarGrid = document.getElementById("calendar-grid");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");

const modal = document.getElementById("surprise-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const closeModalButton = document.getElementById("close-modal");
const modalOkButton = document.getElementById("modal-ok");
const modalIcon = document.getElementById("modal-icon");
const modalDay = document.getElementById("modal-day");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");

const snowContainer = document.getElementById("snow");
const effectsContainer = document.getElementById("effects");

// Création d'une modale invisible pour zoomer les photos sur PC et mobile tactile
const imageZoomModal = document.createElement("div");
imageZoomModal.id = "image-zoom-modal";
imageZoomModal.className = "hidden";
imageZoomModal.style.cssText = "position: fixed; inset: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; z-index: 9999; cursor: pointer; padding: 20px;";
imageZoomModal.innerHTML = `<img id="zoomed-image" style="max-width: 90%; max-height: 90%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); object-fit: contain;">`;
document.body.appendChild(imageZoomModal);

const zoomedImgElement = document.getElementById("zoomed-image");
imageZoomModal.addEventListener("click", () => {
  imageZoomModal.classList.add("hidden");
});

function getToday() {
  if (MODE_TEST) {
    return 24;
  }

  const now = new Date();
  if (now.getMonth() < 11) return 0;
  if (now.getMonth() > 11) return 24;
  return Math.min(now.getDate(), 24);
}

function dailySeed() {
  const today = new Date();
  const dateKey = MODE_TEST
    ? "test-2026-12-02"
    : `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;

  let seed = 0;
  for (let i = 0; i < dateKey.length; i++) {
    seed = (seed * 31 + dateKey.charCodeAt(i)) >>> 0;
  }
  return seed;
}

function seededRandomGenerator(seed) {
  let state = seed;
  return function () {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function getShuffledDays() {
  const days = Array.from({ length: 24 }, (_, index) => index + 1);
  const random = seededRandomGenerator(dailySeed());

  for (let i = days.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [days[i], days[j]] = [days[j], days[i]];
  }
  return days;
}

function getOpenedDays() {
  try {
    const saved = JSON.parse(localStorage.getItem("pourMamanOpenedDays") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    return [];
  }
}

function saveOpenedDay(day) {
  const openedDays = getOpenedDays();
  if (!openedDays.includes(day)) {
    openedDays.push(day);
    try {
      localStorage.setItem("pourMamanOpenedDays", JSON.stringify(openedDays));
    } catch (error) {}
  }
}

function createCalendar() {
  calendarGrid.replaceChildren();

  const today = getToday();
  const openedDays = getOpenedDays();
  const shuffledDays = getShuffledDays();
  
  const randomColorGen = seededRandomGenerator(dailySeed() + 999);
  const colorClasses = ["color-red", "color-green", "color-blue"];

  shuffledDays.forEach((day) => {
    const isLocked = day > today;
    const isOpened = openedDays.includes(day);

    const button = document.createElement("button");
    button.type = "button";
    
    const randomColor = colorClasses[Math.floor(randomColorGen() * colorClasses.length)];
    button.className = `day-card ${randomColor}`;

    if (isLocked) {
      button.classList.add("is-locked");
      button.disabled = true;
    }

    if (isOpened) {
      button.classList.add("is-opened");
    }

    button.setAttribute(
      "aria-label",
      isLocked ? `Jour ${day}, encore fermé` : `Ouvrir la surprise du jour ${day}`
    );

    const number = document.createElement("span");
    number.className = "day-number";
    number.textContent = String(day).padStart(2, "0");

    const symbol = document.createElement("span");
    symbol.className = "day-symbol";
    symbol.textContent = isLocked ? "🔒" : isOpened ? "♥" : "✦";

    button.append(number, symbol);

    if (!isLocked) {
      button.addEventListener("click", () => openSurprise(day));
    }

    calendarGrid.appendChild(button);
  });

  updateProgress();
}

function updateProgress() {
  const openedDays = getOpenedDays();
  const count = openedDays.length;

  progressText.textContent = `${count} / 24 cases`;
  progressBar.style.width = `${Math.min((count / 24) * 100, 100)}%`;
}

function openSurprise(day) {
  if (day > getToday()) return;

  const surprise = surprises[day];
  if (!surprise) return;

  modalIcon.textContent = surprise.icon;
  modalDay.textContent = `SURPRISE DU ${day} DÉCEMBRE`;
  modalTitle.textContent = surprise.title;

  if (surprise.solution) {
    modalContent.innerHTML = `
      <div style="white-space: pre-line; text-align: left;">${surprise.content}</div>
      <button id="reveal-solution-btn" class="secondary-button" style="margin-top: 20px; background: #28785c; color: white; width: 100%;">🔍 Voir la solution</button>
      <div id="solution-box" class="hidden" style="margin-top: 15px; padding: 15px; background: #071426; border-radius: 12px; border: 1px solid #f4c96b44; text-align: left;">
        <strong>💡 Solution :</strong> <span style="color: #f4c96b;">${surprise.solution}</span>
      </div>
    `;
  } else {
    modalContent.innerHTML = `<div style="white-space: pre-line;">${surprise.content}</div>`;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";

  // Active le clic ou le touché sur les photos pour les agrandir en plein écran
  const photos = modalContent.querySelectorAll(".zoomable-photo");
  photos.forEach((photo) => {
    photo.addEventListener("click", (e) => {
      e.stopPropagation();
      zoomedImgElement.src = photo.src;
      imageZoomModal.classList.remove("hidden");
    });
  });

  const revealBtn = document.getElementById("reveal-solution-btn");
  if (revealBtn) {
    revealBtn.addEventListener("click", () => {
      document.getElementById("solution-box").classList.remove("hidden");
      revealBtn.style.display = "none";
    });
  }

  saveOpenedDay(day);
  updateProgress();
  createCalendar();
  launchConfetti();

  closeModalButton.focus();
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (passwordInput.value === PASSWORD) {
    loginError.textContent = "";
    loginScreen.classList.add("hidden");
    site.classList.remove("hidden");
    
    // Message personnalisé dynamique selon le jour
    const todayNum = getToday();
    const heroTextElement = document.querySelector(".hero-text");
    if (todayNum >= 1 && todayNum <= 24) {
      heroTextElement.innerHTML = `Aujourd'hui on est le ${todayNum} décembre...<br><strong>Ouvre ta case du jour ! ✨</strong>`;
    } else {
      heroTextElement.innerHTML = "Chaque jour cache une petite surprise. Ouvre les cases au fil de décembre !";
    }

    createCalendar();
    passwordInput.value = "";
  } else {
    loginError.textContent = "Ce n'est pas le bon mot de passe. Réessaie ❤️";
    passwordInput.value = "";
    passwordInput.focus();
  }
});

const toggleAdminBtn = document.getElementById("toggle-admin-btn");
const adminPanel = document.getElementById("admin-panel");
const adminForm = document.getElementById("admin-form");
const adminPassword = document.getElementById("admin-password");
const adminActions = document.getElementById("admin-actions");
const adminError = document.getElementById("admin-error");
const unlockAllBtn = document.getElementById("unlock-all-btn");
const lockAllBtn = document.getElementById("lock-all-btn");
const resetProgressBtn = document.getElementById("reset-progress-btn");

toggleAdminBtn.addEventListener("click", () => {
  adminPanel.classList.toggle("hidden");
});

adminForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (adminPassword.value.toLowerCase() === "lylou") {
    adminError.textContent = "";
    adminForm.classList.add("hidden");
    adminActions.classList.remove("hidden");
  } else {
    adminError.textContent = "Mauvais mot de passe !";
    adminPassword.value = "";
  }
});

unlockAllBtn.addEventListener("click", () => {
  MODE_TEST = true;
  const allDays = Array.from({ length: 24 }, (_, i) => i + 1);
  localStorage.setItem("pourMamanOpenedDays", JSON.stringify(allDays));
  createCalendar();
  alert("✨ Toutes les cases ont été débloquées et ouvertes !");
});

lockAllBtn.addEventListener("click", () => {
  MODE_TEST = false;
  localStorage.removeItem("pourMamanOpenedDays");
  createCalendar();
  alert("🔒 Calendrier verrouillé en mode réel ! Les cases se débloqueront selon la vraie date.");
});

resetProgressBtn.addEventListener("click", () => {
  localStorage.removeItem("pourMamanOpenedDays");
  createCalendar();
  alert("🔄 L'historique d'ouverture des cases a été réinitialisé.");
});

closeModalButton.addEventListener("click", closeModal);
modalOkButton.addEventListener("click", closeModal);
modalBackdrop.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (!imageZoomModal.classList.contains("hidden")) {
      imageZoomModal.classList.add("hidden");
    } else if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});

function createSnowflake() {
  if (snowContainer.childElementCount > 45) return;

  const flake = document.createElement("span");
  flake.className = "snowflake";
  flake.textContent = Math.random() > 0.5 ? "•" : "❄";
  flake.style.left = `${Math.random() * 100}%`;
  flake.style.fontSize = `${8 + Math.random() * 12}px`;
  flake.style.animationDuration = `${5 + Math.random() * 8}s`;

  snowContainer.appendChild(flake);
  flake.addEventListener("animationend", () => flake.remove());
}

setInterval(createSnowflake, 450);

function launchConfetti() {
  const symbols = ["❤️", "✨", "❄️", "⭐"];
  for (let i = 0; i < 16; i++) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${2 + Math.random() * 2}s`;

    effectsContainer.appendChild(confetti);
    confetti.addEventListener("animationend", () => confetti.remove());
  }
}