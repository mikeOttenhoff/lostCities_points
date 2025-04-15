import { subScoreBerekening } from "./_berekening.js";

export const invulElementenMaken = function () {
  // Define arrays for each color
  let puntenRood = [];
  let weddenRood = [];
  let puntenGeel = [];
  let weddenGeel = [];
  let puntenGroen = [];
  let weddenGroen = [];
  let puntenBlauw = [];
  let weddenBlauw = [];
  let puntenWit = [];
  let weddenWit = [];

  // Map color names to their arrays
  const data = {
    rood: { punten: puntenRood, wedden: weddenRood },
    geel: { punten: puntenGeel, wedden: weddenGeel },
    groen: { punten: puntenGroen, wedden: weddenGroen },
    blauw: { punten: puntenBlauw, wedden: weddenBlauw },
    wit: { punten: puntenWit, wedden: weddenWit },
  };

  const body = document.body;
  const content = document.createElement("article");
  content.classList.add("contentContainer");
  body.appendChild(content);

  // ====================================================
  // Attach one global event listener before the forEach loop
  // ====================================================
  // This listener uses event delegation to handle clicks on any button with the 'btn' class.
  content.addEventListener("click", function (e) {
    if (e.target.matches("button.btn")) {
      e.preventDefault();

      // Get the parent section that has the data-color attribute (each color section)
      const section = e.target.closest(".elem");
      if (!section) return;

      // Retrieve the color from a data attribute.
      const color = section.dataset.color;
      if (!data[color]) {
        console.error(`No data found for color: ${color}`);
        return;
      }

      const { punten, wedden } = data[color];

      // Convert string IDs to numbers and sum them up
      const sumPunten = punten.reduce(
        (total, current) => total + parseInt(current, 10),
        0
      );
      const sumWedden = wedden.reduce(
        (total, current) => total + parseInt(current, 10),
        0
      );

      // TEST Logs
      // console.log(`Voor kleur ${color}:`);
      // console.log("Punten som:", sumPunten);
      // console.log("Weddenschap som:", sumWedden);
      // console.log(subScoreBerekening(sumPunten, sumWedden));

      // Look for an existing element to display the score.
      let floatEl = section.querySelector(".scoreFloat");
      if (!floatEl) {
        // If it doesn't exist, create it and append to the section.
        floatEl = document.createElement("div");
        floatEl.classList.add("scoreFloat");
        section.appendChild(floatEl);
      }
      // Update the content of the score element.
      floatEl.innerHTML = subScoreBerekening(sumPunten, sumWedden);
    }
  });

  // ====================================================
  // Helper functions to create DOM elements
  // ====================================================
  const createLegend = function (name) {
    const legendEl = document.createElement("legend");
    legendEl.textContent = name;
    return legendEl;
  };

  const createLabel = function (name) {
    const labelEl = document.createElement("label");
    labelEl.textContent = name;
    return labelEl;
  };

  // Create a set of input elements for the form
  // For each input, add an event listener to update the appropriate arrays in data
  const createInput = function (name, inputLength, color) {
    const elements = [];
    for (let i = 0; i < inputLength; i++) {
      const inputEl = document.createElement("input");
      inputEl.type = "checkbox";
      inputEl.name = name;
      // For "Kaart", id starts at 2; for "Weddenschap", at 1
      inputEl.id = `${name === "Kaart" ? i + 2 : i + 1}`;

      inputEl.addEventListener("change", function () {
        const { punten, wedden } = data[color];

        // Weddenschap deselect every checkbox except the selected
        if (this.name === "Weddenschap" && this.checked) {
          // Deselect all other Weddenschap checkboxes in the same color group
          const checkboxes = document.querySelectorAll(
            `div[data-color='${color}'] input[name='Weddenschap']`
          );
          checkboxes.forEach(checkbox => {
            if (checkbox !== this) {
              checkbox.checked = false;
              // Remove the unchecked checkbox from the array
              const index = wedden.indexOf(checkbox.id);
              if (index > -1) wedden.splice(index, 1);
            }
          });
        }

        if (this.checked) {
          if (this.name === "Kaart") {
            punten.push(this.id);
          } else if (this.name === "Weddenschap") {
            wedden.push(this.id);
          }
        } else {
          // Helper to remove an item from an array
          const removeItem = (arr, id) => {
            const index = arr.indexOf(id);
            if (index > -1) arr.splice(index, 1);
          };
          removeItem(punten, this.id);
          removeItem(wedden, this.id);
        }
      });

      elements.push(inputEl);
      elements.push(createLabel(`${name} ${name === "Kaart" ? i + 2 : i + 1}`));
    }
    return elements;
  };

  // ====================================================
  // Create each color section with its own button
  // ====================================================
  const kleuren = ["rood", "geel", "groen", "blauw", "wit"];
  kleuren.forEach(function (color) {
    // Create the container for this color section
    const section = document.createElement("div");
    // Store the color in a data attribute for easy access later
    section.dataset.color = color;
    section.classList.add("elem", color);

    // Create and append the title
    const title = document.createElement("h2");
    title.textContent = color;
    section.appendChild(title);

    // Create a form for inputs
    const form = document.createElement("form");

    // Add inputs for "Kaarten"
    form.appendChild(createLegend("Kaarten"));
    createInput("Kaart", 9, color).forEach(el => form.appendChild(el));

    // Add inputs for "Weddenschap"
    form.appendChild(createLegend("Weddenschap"));
    createInput("Weddenschap", 3, color).forEach(el => form.appendChild(el));

    section.appendChild(form);

    // Create the button for this section
    const calcButton = document.createElement("button");
    calcButton.textContent = "berekenen";
    calcButton.classList.add("btn");
    section.appendChild(calcButton);

    // Append the section to the body
    content.appendChild(section);
  });

  // ====================================================
  // Create reset button
  // ====================================================
  const createRefreshButton = document.createElement("a");
  createRefreshButton.classList.add("refreshButton");

  const createIcon = document.createElement("img");
  createIcon.classList.add("refreshIcon");

  createRefreshButton.appendChild(createIcon);
  body.appendChild(createRefreshButton);

  const refeshButton = document.querySelector(".refreshButton");

  const refreshPage = () => {
    location.reload();
  };

  refeshButton.addEventListener("click", refreshPage);

  // ====================================================
  // Create mikeottenhoff button
  // ====================================================

  const home_btn = document.createElement("a");
  const home_btn_container = document.createElement("div");

  home_btn.preventDefault;
  home_btn.innerHTML = "mikeottenhoff.nl";
  home_btn.href = "../../index.html";
  home_btn_container.classList.add("home_btn_container");

  home_btn_container.appendChild(home_btn);
  body.appendChild(home_btn_container);
};
