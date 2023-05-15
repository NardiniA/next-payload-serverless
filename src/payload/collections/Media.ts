import { CollectionConfig } from "payload/types";
import { isAdminOrEditor } from "../access/isAdminOrEditor";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (): boolean => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: "filename",
    defaultColumns: ["filename", "alt"],
  },
  upload: {
    staticURL: "/",
    staticDir: "",
    // @ts-ignore
    adminThumbnail: (doc) => `https://d14om8jokz4phu.cloudfront.net/${doc?.doc?.sizes?.thumbnail?.url?.replace("/media/", "")}`,
    imageSizes: [
      {
        name: "blur",
        width: 10,
        height: 10,
      },
      {
        name: "thumbnail",
        width: 300,
        height: 300,
        position: "center",
      },
      {
        name: "feature",
        width: 970,
        height: 500,
        position: "center",
      },
    ],
    disableLocalStorage: true,
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
      admin: {
        description:
          "A brief description of the uploaded media. Commonly used for screen readers and accessibility",
      },
    },
  ],
};

export default Media;
