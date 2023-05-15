import type { Field } from "payload/types";
import { HeroMeta } from "./types";

export const meta: HeroMeta = {
  name: "banner",
  label: "Banner",
};

const Banner: Field = {
  ...meta,
  type: "group",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
  ],
  admin: {
    condition: (_, { type }) => type === meta?.name,
  }
}

export default Banner;
