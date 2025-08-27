const heartBtns = document.querySelectorAll(".heartBtn");
const copyBtns = document.querySelectorAll(".copyBtn");
const callBtns = document.querySelectorAll(".callBtn");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartCountEl = document.getElementById("heartCount");
const coinCountEl = document.getElementById("coinCount");
const copyCountEl = document.getElementById("copyCount");

// Heart Button
heartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    heartCount++;
    heartCountEl.textContent = heartCount;
  });
});

// Copy Button
copyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.number);
    copyCount++;
    copyCountEl.textContent = copyCount;
    alert("Number copied: " + btn.dataset.number);
  });
});

// Call Button
callBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coinCount < 20) {
      alert("❌ Not enough coins! Each call costs 20 coins.");
      return;
    }
    coinCount -= 20;
    coinCountEl.textContent = coinCount;

    alert(`📞 Calling ${btn.dataset.name} ${btn.dataset.number}...`);

    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();

    li.innerHTML = `
      <div class="flex justify-between items-center w-full bg-base-100 p-2 shadow-sm rounded">
        <div class="flex flex-col">
          <h3 class="font-semibold text-sm">${btn.dataset.name}</h3>
          <p class="text-gray-500 text-xs">${btn.dataset.number}</p>
        </div>
        <span class="text-xs text-gray-400">${time}</span>
      </div>
    `;

    historyList.append(li);
  });
});

// Clear History
clearHistory.addEventListener("click", () => {
  historyList.innerHTML = "";
});
