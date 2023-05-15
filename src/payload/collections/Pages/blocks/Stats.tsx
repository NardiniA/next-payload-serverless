import type { Block } from "payload/types";
import RowLabel from "@/payload/components/RowLabel";
import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";

const Stats: Block = {
  slug: "stats",
  graphQL: { singularName: "stat" },
  labels: {
    singular: "Statistic",
    plural: "Statistics",
  },
  fields: [
    {
      name: "stats",
      label: "Statistics",
      type: "array",
      fields: [
        {
          name: "value",
          label: "Value",
          type: "text",
          required: true,
        },
        {
          name: "label",
          label: "Label",
          type: "text",
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: (args: RowLabelArgs) => <RowLabel args={args} name="label" />
        }
      }
    },
  ],
}

export default Stats;
