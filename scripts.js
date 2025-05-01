// Load saved name on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedName = localStorage.getItem("mintyName");
    const greeting = document.getElementById("greeting");

      if (savedName) {
          greeting.textContent = `Welcome back, ${savedName}!`;
            }
            });

            // Save name to localStorage
            document.getElementById("saveName").addEventListener("click", () => {
              const name = document.getElementById("nameInput").value;
                if (name.trim()) {
                    localStorage.setItem("mintyName", name);
                        document.getElementById("greeting").textContent = `Thanks, ${name}! We'll remember you.`;
                          } else {
                              alert("Please enter a name.");
                                }
                                });

                                // Trigger animation with JavaScript
                                document.getElementById("walkBtn").addEventListener("click", () => {
                                  const model = document.getElementById("model");

                                    model.classList.remove("walk"); // reset if already animated
                                      void model.offsetWidth; // force reflow
                                        model.classList.add("walk");
                                        });