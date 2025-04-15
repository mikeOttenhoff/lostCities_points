import { invulElementenMaken } from "./_modules/_invulElementMaken.js";
import { subScoreBerekening } from "./_modules/_berekening.js";

// Maak de UI elementen
invulElementenMaken();

// console.log(kleur.key);
// Lege Arrays om Punten aantal en
const punten = [];
const wedden = [];

console.log("test");

const checkboxes = document.querySelectorAll("input[type=checkbox]");
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      console.log(this.parentElement.parentElement);
      if (this.name === "Kaart") {
        punten.push(this.id);
        console.log(punten);
      } else if (this.name === "Weddenschap") {
        wedden.push(this.id);
        console.log(wedden);
      } else {
        //optionele Error msg
        console.error("werkt niet");
      }
    } else {
      // To remove content
      const indexPunten = punten.indexOf(this.id); // get index if value found otherwise -1
      const indexWedden = wedden.indexOf(this.id); // get index if value found otherwise -1
      if (indexPunten > -1) {
        //if found
        punten.splice(indexPunten, 1);
      }

      if (indexWedden > -1) {
        //if found
        wedden.splice(indexWedden, 1);
      }
      // console.log(`Punten: ${punten}`, `Wedden:${wedden}`);
    }
    console.log(Number(punten));
  });
});

const btnClicked = document.querySelectorAll(".btn");
btnClicked.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const puntenTotaal = punten.reduce(function (a, b) {
      return Number(a) + Number(b);
    }, 0);
    console.log(puntenTotaal);
    console.log(subScoreBerekening(puntenTotaal, wedden));
  });
});
