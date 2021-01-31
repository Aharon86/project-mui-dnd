import shortid from "shortid";
import off1 from "../assets/images/off1.png";
import off2 from "../assets/images/off2.png";
import off3 from "../assets/images/off3.png";
import off4 from "../assets/images/off4.png";

export const offersData = [
  {
    id: shortid.generate(),
    name: "Iceland Hotel / Fosshotel",
    place: "Reykjavik",
    preview: off1,
    priceMin: "6,578",
    priceMax: "23,480",
    about:
      "Íslandshotels offer winter rates in the summer, so you only have to pay  1 guest this summer  at a three star.",
    address: "islandshotel.is",
  },
  {
    id: shortid.generate(),
    name: "Hotel Keflavik",
    place: "North",
    preview: off2,
    priceMin: "6,578",
    priceMax: "23,480",
    about:
      "Included in hotel price: Breakfast (open 5-10pm), wireless internet, access to fitness and steam and shuttle to the stadium upon departure as provided. program.  Included in guesthouse price:  Breakfast (open 5-10pm), wireless internet and fitness and stea",
    address: "islandshotel.is",
  },
  {
    id: shortid.generate(),
    name: "Hotel Edda",
    place: "East",
    preview: off3,
    priceMin: "11,900",
    priceMax: "19,900",
    about:
      "Each ticket is valid for double occupancy in a double room with a washbasin for one night. Breakfast is not included.  The payment methods may be used by the Edda hotels, which are 3 in the summer of 2020",
    address: "edda.is",
  },
  {
    id: shortid.generate(),
    name: "Iceland Hotel / Fosshotel",
    place: "Reykjavik",
    preview: off4,
    priceMin: "6,578",
    priceMax: "23,480",
    about:
      "Íslandshotels offer winter rates in the summer, so you only have to pay  1 guest this summer  at a three star.",
    address: "islandshotel.is",
  },
];
