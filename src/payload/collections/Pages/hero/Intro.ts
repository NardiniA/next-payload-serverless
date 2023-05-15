import inlineRichText from "@/payload/fields/inlineRichText";
import { Field } from "payload/types";
import { HeroMeta } from "./types";

export const meta: HeroMeta = { name: "intro", label: "Intro" };

const Intro: Field = {
  ...meta,
  type: "group",
  fields: [
    inlineRichText({
      name: "title",
      label: "Title",
      admin: {
        style: { minHeight: "5rem" },
      },
    }),
    inlineRichText({
      name: "description",
      label: "Description",
      required: false,
      admin: {
        style: { minHeight: "5rem" },
      },
    }),
    {
      name: "background",
      label: "Background Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  admin: {
    condition: (_, { type }) => type === meta?.name,
  },
};

export default Intro;
