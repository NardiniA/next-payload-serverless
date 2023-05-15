import React from 'react';
import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";

export type { RowLabelArgs }
export type CustomRowLabelArgs = { args: RowLabelArgs, name: string };

const RowLabel: React.FC<CustomRowLabelArgs> = ({ args: { data, index }, name }) => {
  if (data && data[name || "title"]) return (
    <div>{data[name || "title"]}</div>
  )

  return <div>{`Slide ${String(index).padStart(2, "0")}`}</div>;
}

export default RowLabel
