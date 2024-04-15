addYearsOfExp();

function addYearsOfExp() {
  const START_TIME = new Date("05/01/2021").getTime();
  const expInMs = (Date.now() - START_TIME) / 1000;
  const expInDays = expInMs / (60 * 60 * 24);
  const expInYears = Math.abs(Math.round(expInDays / 365.25));

  const yearsOfExpElement = document.getElementById("yearsOfExp");
  yearsOfExpElement.textContent = `+${expInYears}`;
}
