(function () {
  if (!document.querySelector("link[rel~='icon']")) {
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.type = "image/png";
    favicon.href = "assets/favicon.png";
    document.head.appendChild(favicon);
  }

  const style = document.createElement("style");
  style.textContent = `
    .navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: linear-gradient(135deg, #ff6b00 0%, #ff8533 100%);
      box-shadow: 0 4px 14px rgba(255, 107, 0, 0.22);
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0.85rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      text-decoration: none;
      font-size: 1.25rem;
      font-weight: 700;
      color: #ffffff;
    }

    .nav-brand-icon {
      width: 28px;
      height: 28px;
      border-radius: 8px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .nav-brand-icon img {
      width: 18px;
      height: 18px;
      object-fit: contain;
    }

    .nav-toggle {
      display: none;
    }

    .nav-toggle-label {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 26px;
      height: 20px;
      cursor: pointer;
    }

    .nav-toggle-label span {
      display: block;
      height: 3px;
      width: 100%;
      background-color: #ffffff;
      border-radius: 3px;
      transition: transform 0.25s ease, opacity 0.25s ease;
    }

    .nav-links {
      list-style: none;
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      text-decoration: none;
      color: #ffffff;
      font-weight: 600;
      font-size: 0.95rem;
      padding: 0.45rem 0.9rem;
      border-radius: 8px;
      transition: background-color 0.2s ease, color 0.2s ease;
    }

    .nav-links a:hover,
    .nav-links a.active {
      background-color: #ffffff;
      color: #ff6b00;
    }

    @media (max-width: 768px) {
      .nav-toggle-label {
        display: flex;
      }

      .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #ffffff;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        border-bottom: 2px solid #ff6b00;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
      }

      .nav-links li {
        border-top: 1px solid #f2f2f2;
      }

      .nav-links a {
        display: block;
        color: #ff6b00;
        padding: 1rem 1.5rem;
        border-radius: 0;
      }

      .nav-links a:hover,
      .nav-links a.active {
        background-color: #ff6b00;
        color: #ffffff;
      }

      .nav-toggle:checked ~ .nav-links {
        max-height: 300px;
      }

      .nav-toggle:checked ~ .nav-toggle-label span:nth-child(1) {
        transform: translateY(8.5px) rotate(45deg);
      }

      .nav-toggle:checked ~ .nav-toggle-label span:nth-child(2) {
        opacity: 0;
      }

      .nav-toggle:checked ~ .nav-toggle-label span:nth-child(3) {
        transform: translateY(-8.5px) rotate(-45deg);
      }
    }
  `;
  document.head.appendChild(style);

  const header = document.createElement("header");
  header.className = "navbar";
  header.innerHTML = `
    <nav class="nav-container">
      <a href="#" class="nav-brand">
        <span class="nav-brand-icon" aria-hidden="true">
          <img src="assets/platform/placeholder.png" alt="">
        </span>
        LINKSEED
      </a>

      <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-label="Toggle navigation">
      <label for="nav-toggle" class="nav-toggle-label" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <ul class="nav-links">
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="social.html">Dev</a></li>
        <li><a href="https://discord.gg/invite/a7eNTUaYPh">Discord</a></li>
      </ul>
    </nav>
  `;

  document.body.prepend(header);
})();