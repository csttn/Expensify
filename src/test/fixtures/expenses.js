import moment from "moment";

const expenses = [
  {
    id: 0,
    description: "Cleyton",
    note: "",
    amount: 195,
    createdAt: moment(1000)
      .add(4, "days")
      .valueOf()
  },
  {
    id: 1,
    description: "julia",
    note: "",
    amount: 1345,
    createdAt: moment(0)
  },
  {
    id: 2,
    description: "Antonia",
    note: "",
    amount: 5,
    createdAt: moment(500)
      .add(10, "days")
      .valueOf()
  },
  {
    id: 3,
    description: "Rafa",
    note: "",
    amount: 1,
    createdAt: moment(500)
      .add(2, "days")
      .valueOf()
  }
];

export default expenses;
