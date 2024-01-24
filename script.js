fetch(
  "https://api.currencyfreaks.com/latest?apikey=35fe5593a6ac4a7a96ac37cb47f90f84"
)
  .then((result) => result.json())
  .then((currency) => {
    let inp = document.querySelector("#usd"),
      egp = document.querySelector(".egp span"),
      egpPrice = +(+currency.rates["EGP"]).toFixed(2),
      sar = document.querySelector(".sar span"),
      sarPrice = +(+currency.rates["SAR"]).toFixed(2);

    inp.addEventListener("input", () => {
      let amount = +document.querySelector("#usd").value;
      if (amount >= 0 && amount <= +inp.max) {
        egp.textContent = (amount * egpPrice).toLocaleString();
        sar.textContent = (amount * sarPrice).toLocaleString();
      }
    });
  });
