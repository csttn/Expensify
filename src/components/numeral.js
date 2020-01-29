import numeral from "numeral";

numeral.register("locale", "brasil", {
  delimiters: {
    thousands: ".",
    decimal: ","
  },
  abbreviations: {
    thousand: "mil",
    million: "milhões",
    billion: "b",
    trillion: "t"
  },
  ordinal: () => "º",
  currency: {
    symbol: "R$"
  }
});

numeral.locale("brasil");
export default numeral;
