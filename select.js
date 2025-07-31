document.addEventListener("DOMContentLoaded", () => {
  const characters = document.querySelectorAll(".character");
  let activeChar = null;

  characters.forEach((char) => {
    // Resize the character card container instead of the image
    char.style.width = "200px";
    char.style.height = "260px";
    char.style.display = "flex";
    char.style.flexDirection = "column";
    char.style.justifyContent = "center";

    const img = char.querySelector("img");
    img.style.objectFit = "contain";
    img.style.height = "160px";
    img.style.width = "100%";

    char.addEventListener("click", (e) => {
      e.stopPropagation();

      const isSelected = char.classList.contains("active");

      if (!isSelected) {
        // Reset all characters
        characters.forEach(c => {
          c.classList.remove("active");
          c.style.transform = "scale(1)";
          c.style.zIndex = "1";
          c.style.position = "static";
          c.style.left = "auto";
          c.style.top = "auto";

          const existingBtn = c.querySelector(".confirm-btn");
          if (existingBtn) existingBtn.remove();
        });

        // Enlarge selected character and center on screen
        char.classList.add("active");
        char.style.transform = "translate(-50%, -50%) scale(2)";
        char.style.zIndex = "10";
        char.style.position = "fixed";
        char.style.left = "50%";
        char.style.top = "50%";

        // Create confirm button
        const btn = document.createElement("button");
        btn.textContent = "Confirm";
        btn.className = "confirm-btn";
        btn.style.marginTop = "10px";
        btn.style.padding = "6px 12px";
        btn.style.fontSize = "14px";
        btn.style.borderRadius = "5px";
        btn.style.border = "none";
        btn.style.cursor = "pointer";
        btn.style.backgroundColor = "#f00";
        btn.style.color = "#fff";

        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          const name = char.getAttribute("data-name");
          alert(`You have selected ${name}!`);
        });

        char.appendChild(btn);
        activeChar = char;
      }
    });
  });

  document.addEventListener("click", () => {
    if (activeChar) {
      activeChar.classList.remove("active");
      activeChar.style.transform = "scale(1)";
      activeChar.style.zIndex = "1";
      activeChar.style.position = "static";
      activeChar.style.left = "auto";
      activeChar.style.top = "auto";

      const existingBtn = activeChar.querySelector(".confirm-btn");
      if (existingBtn) existingBtn.remove();

      activeChar = null;
    }
  });
});
