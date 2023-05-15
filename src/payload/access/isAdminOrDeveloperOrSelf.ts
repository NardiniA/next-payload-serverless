import { Access } from "payload/types";

export const isAdminOrDeveloperOrSelf: Access = ({ req: { user } }) => {
  // Is user logged in?
  if (user) {
    // Is user an admin?
    if (user?.roles?.includes("admin") || user?.roles?.includes("developer"))
      return true;

    // Did user create document
    return {
      id: {
        equals: user.id,
      },
    };
  }

  // Reject everyone else
  return false;
};
