import { Tab, Option } from "payload/dist/fields/config/types";
import Intro, { meta as introMeta } from "./Intro";
import Banner, { meta as bannerMeta } from "./Banner";
import { HeroMeta } from "./types";

const heroOptions: Option[] = [
  introMeta,
  bannerMeta,
].map(({ label, name }: HeroMeta) => ({
  label,
  value: name,
}));

export const hero: Tab = {
  label: "Hero",
  fields: [
    {
      name: "hero",
      label: false,
      type: "group",
      fields: [
        {
          name: "type",
          label: "Type",
          type: "select",
          options: heroOptions,
          defaultValue: "intro",
          required: true,
        },
        Intro,
        Banner,
      ],
    },
    
  ],
}
