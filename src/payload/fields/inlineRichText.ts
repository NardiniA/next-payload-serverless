import { Field } from "payload/types";
import deepMerge from "../utilities/deepMerge";

type InlineRichText = (overrides?: Partial<Field>) => Field;

const inlineRichText: InlineRichText = (overrides) =>
  deepMerge<Field, Partial<Field>>(
    {
      name: "inlineRichText",
      type: "richText",
      required: true,
      admin: {
        elements: ["link"],
        leaves: ["bold", "italic", "strikethrough", "underline"],
        // @ts-ignore
        style: { "--rich-text-height": "7.5rem" },
      },
    },
    // @ts-ignore
    overrides
  );

export default inlineRichText;
