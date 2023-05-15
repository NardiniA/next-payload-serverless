import { Block } from "payload/types";
import { required, nameAndLabel, placeholderAndSize } from "./utilities";

const Email: Partial<Block> = {
  imageURL: "https://res.cloudinary.com/antonio-nardini/image/upload/c_scale,w_140/v1673524925/Payload/FieldSamples/EmailFieldSample_rpvyug.jpg",
  imageAltText: "Email field example",
  fields: [
    nameAndLabel,
    placeholderAndSize,
    required,
  ],
};

export default Email;