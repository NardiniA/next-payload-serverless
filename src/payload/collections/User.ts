import payload from "payload";
import { CollectionConfig } from "payload/types";
import { isAdminOrDeveloper } from "../access/isAdminOrDeveloper";
import { isAdminOrDeveloperOrSelf } from "../access/isAdminOrDeveloperOrSelf";
import { isAdminFieldLevel } from "../access/isAdmin";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
    defaultColumns: ["email", "firstname", "lastname"],
    group: "Admin",
  },
  access: {
    create: isAdminOrDeveloper,
    update: isAdminOrDeveloper,
    read: isAdminOrDeveloperOrSelf,
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "firstname",
          label: "First Name",
          type: "text",
          required: true,
          admin: {
            width: "50%",
          },
        },
        {
          name: "lastname",
          label: "Last Name",
          type: "text",
          required: true,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "roles",
      label: "Roles",
      type: "select",
      options: [
        {
          label: "Editor",
          value: "editor",
        },
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "Developer",
          value: "developer",
        },
      ],
      defaultValue: "editor",
      access: {
        create: isAdminFieldLevel,
        update: isAdminFieldLevel,
      },
      hasMany: true,
      required: true,
    },
  ],
};

export default Users;
