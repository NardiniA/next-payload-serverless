import { isAdminOrEditor } from "@/payload/access/isAdminOrEditor";
import slug from "@/payload/fields/slug";
import type { CollectionConfig } from "payload/types";
import { hero } from "./hero";
import { layout } from "./blocks";
import populateFullTitle from "./hooks/populateFullTitle";

const Pages: CollectionConfig = {
  slug: "pages",
  access: {
    read: () => true,
    create: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdminOrEditor,
  },
  admin: {
    useAsTitle: "fullTitle",
    defaultColumns: ["fullTitle", "slug", "createdAt"],
  },
  fields: [
    {
      name: "title",
      label: "Page Title",
      type: "text",
      required: true,
    },
    slug(),
    {
      type: "tabs",
      tabs: [hero, layout],
    },
    {
      name: "fullTitle",
      label: "Full Title",
      type: "text",
      hooks: {
        beforeChange: [populateFullTitle],
      },
      admin: {
        components: {
          Field: () => null,
        },
      },
    },
    {
      name: "breadcrumbs",
      type: "array",
      fields: [
        {
          name: "doc",
          type: "relationship",
          relationTo: "pages",
          maxDepth: 0,
          admin: {
            disabled: true,
          },
        },
        {
          type: "row",
          fields: [
            {
              name: "url",
              label: "URL",
              type: "text",
              admin: {
                width: "50%",
              },
            },
            {
              name: "label",
              type: "text",
              admin: {
                width: "50%",
              },
            },
          ],
        },
      ],
      admin: {
        disabled: true,
      },
    },
    {
      name: "parent",
      label: "Parent Page",
      type: "relationship",
      relationTo: "pages",
      maxDepth: 0,
      // telling Payload to add an index to a field instructs the database to create it for enhanced query performance
      index: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};

export default Pages;
