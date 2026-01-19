export const subScoreBerekening = function (subScore = 0, bet) {
  const opstartKosten = subScore - 20;
  if (subScore <= 1) return 0; // or handle this case as needed

  // Make sure bet is a number (if needed, parse it)
  const betNumber = typeof bet === "string" ? parseInt(bet, 10) : bet;

  switch (betNumber) {
    case 0:
      return opstartKosten * 1;
    case 1:
      return opstartKosten * 2;
    case 2:
      return opstartKosten * 3; // When user selects "2", multiply by 3
    case 3:
      return opstartKosten * 4;
    default:
      console.error("Ongeldige weddenschap");
      return 0;
  }
};
