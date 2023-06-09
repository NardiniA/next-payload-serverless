// Uncomment code and run to see errors.
import React from "react";
import { notFound } from "next/navigation";
import { getPayloadClient } from "../../../payload/payloadClient";

// Next JS workaround async react components.
// @ts-expect-error Async Server Component
const Page: React.FC<{ params: { slug: string }}> = async ({ params: { slug } }) => {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: "pages",
    where: {
      slug: {
        equals: slug || "home",
      },
    },
  });

  const page = pages.docs[0];

  if (!page) return notFound();

  return <h1>Hello, this is the "{page?.slug}" page!</h1>;
};

export async function generateStaticParams() {
  const payload = await getPayloadClient();

  const pages = await payload.find({
    collection: "pages",
    limit: 0,
  });

  return pages.docs.map(({ slug }) => ({ slug }));
}

export default Page;
