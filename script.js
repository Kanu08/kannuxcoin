let sidebarOpen = false;
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const homeLink = document.getElementById("homeLink");

let chatMode = "general";

menuBtn.addEventListener("click", () => {
  sidebarOpen = !sidebarOpen;
  if (sidebarOpen) {
    sidebar.classList.remove("-translate-x-full");
    menuBtn.textContent = "×";
  } else {
    sidebar.classList.add("-translate-x-full");
    menuBtn.textContent = "☰";
  }
});

function setMode(mode) {
  chatMode = mode;
  alert(`Mode set to: ${mode}`);
}

sendBtn.addEventListener("click", () => {
  const message = userInput.value.trim();
  if (!message) return alert("Please type something!");

  // Dummy AI responses
  let response = "I'm still learning...";
  if (chatMode === "price") response = `${message} current price ≈ $68,000`;
  if (chatMode === "analysis") response = `${message} shows strong bullish trend.`;
  if (chatMode === "prediction") response = `${message} may rise 12% next week.`;

  alert("KANNUX AI: " + response);
  userInput.value = "";
});

homeLink.addEventListener("click", () => {
  alert("You are already on Home Page!");
});
