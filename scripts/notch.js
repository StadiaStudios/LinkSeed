(() => {
  if (document.querySelector(".status-bar")) return;

  const style = document.createElement("style");
  style.textContent = `
    .status-bar {
      position: sticky;
      top: 0;
      z-index: 20;
      flex: 0 0 26px;
      height: 26px;
      width: 100%;
      padding: 0 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.35));
      color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.2px;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85);
      border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }

    .status-left,
    .status-right {
      display: flex;
      align-items: center;
      gap: 6px;
      flex: 1;
    }

    .status-right {
      justify-content: flex-end;
    }

    .status-center {
      font-weight: 700;
      text-align: center;
    }

    .signal-bars {
      display: flex;
      align-items: flex-end;
      gap: 2px;
      height: 10px;
    }

    .signal-bar {
      width: 3px;
      background-color: #ffffff;
      border-radius: 1px;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);
    }

    .signal-bar:nth-child(1) { height: 4px; }
    .signal-bar:nth-child(2) { height: 6px; }
    .signal-bar:nth-child(3) { height: 8px; }
    .signal-bar:nth-child(4) { height: 10px; }
  `;
  document.head.appendChild(style);

  const statusBar = document.createElement("header");
  statusBar.className = "status-bar";
  statusBar.innerHTML = `
    <div class="status-left">
      <div class="signal-bars" aria-label="Signal strength">
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
        <div class="signal-bar"></div>
      </div>
      <span class="carrier-text">LinkSeed</span>
    </div>
    <div class="status-center" id="status-clock"></div>
    <div class="status-right"></div>
  `;

  const phoneScreen = document.querySelector(".phone-screen");
  if (phoneScreen) {
    phoneScreen.insertBefore(statusBar, phoneScreen.querySelector(".pages-viewport"));
  } else {
    const navigation = document.querySelector(".nav-header");
    document.body.insertBefore(statusBar, navigation || document.body.firstChild);
  }

  function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const period = now.getHours() >= 12 ? "PM" : "AM";
    statusBar.querySelector("#status-clock").textContent = `${hours}:${minutes} ${period}`;
  }

  updateClock();
  window.setInterval(updateClock, 15000);
})();
