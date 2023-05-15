import type { Block } from "payload/types";
import RowLabel, { RowLabelArgs } from "@/payload/components/RowLabel";
import inlineRichText from "@/payload/fields/inlineRichText";

const Testimonials: Block = {
  slug: "testimonials",
  graphQL: { singularName: "testimonial" },
  labels: {
    singular: "Testimonial",
    plural: "Testimonials",
  },
  fields: [
    {
      name: "sectionHeader",
      label: "Section Header",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "subtitle",
              label: "Subtitle",
              type: "text",
              required: false,
              admin: {
                width: "50%",
              },
            },
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
        inlineRichText({
          name: "description",
          label: "Description",
          required: false,
        }),
      ],
    },
    {
      name: "reviews",
      label: "Reviews",
      type: "array",
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              label: "Name",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
            {
              name: "position",
              label: "Position",
              type: "text",
              required: true,
              admin: {
                width: "50%",
              },
            },
          ],
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        inlineRichText({
          name: "review",
          label: "Review",
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: (args: RowLabelArgs) => (
            <RowLabel args={args} name="name" />
          ),
        },
      },
    },
  ],
};

export default Testimonials;
