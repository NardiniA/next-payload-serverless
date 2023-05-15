import { Block } from "payload/types";
import RowLabel from "../../../components/RowLabel";
import type { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import { nameAndLabel, placeholderAndSize, required } from "./utilities";

const Select: Partial<Block> = {
    imageURL: "https://res.cloudinary.com/antonio-nardini/image/upload/c_scale,w_140/v1673526055/Payload/FieldSamples/SelectFieldSample_wwjlq3.jpg",
    imageAltText: "Select field example",
    fields: [
        nameAndLabel,
        placeholderAndSize,
        {
            name: "options",
            label: "Select Attribute Options",
            type: "array",
            labels: {
                singular: "Option",
                plural: "Options",
            },
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'value',
                    label: 'Value',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                    },
                },
            ],
            admin: {
                initCollapsed: true,
                components: {
                    RowLabel: (args: RowLabelArgs) => <RowLabel args={args} name="label" />,
                }
            }
        },
        required,
    ]
};

export default Select;