import { Tab } from "payload/dist/fields/config/types";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

export const layout: Tab = {
  label: "Page Layout",
  fields: [
    {
      name: "sections",
      label: "Sections",
      type: "blocks",
      blocks: [
        Stats,
        Testimonials,
      ],
    },
  ],
};