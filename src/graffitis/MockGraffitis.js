import { Graffiti } from "./Graffiti";
import { Location } from "./Location";

export const MOCK_GRAFFITIS = [
  new Graffiti({
    id: "660418ac9b31cc4266f277ff",
    graffitiSurveyNumber: "test",
    name: "TestName",
    size: "TestSize",
    address: "TestAddress",
    description:
      "TestDesc, this is a test for a very long description that I wrote to see what would happen, lets have a look.",
    postcode: "TestPost",

    location: new Location({
      longitude: 1.3,
      latitude: 1.3,
    }),
    imgLocation:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  }),
  new Graffiti({
    id: "660418ac9b31cc4266f277fZ",
    graffitiSurveyNumber: "test2",
    name: "TestName2",
    size: "TestSize2",
    address: "TestAddress2",
    description: "TestDesc2",
    postcode: "TestPost2",

    location: new Location({
      longitude: 1.32,
      latitude: 1.32,
    }),
    imgLocation:
      "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
  }),
];
