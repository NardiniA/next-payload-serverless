import path from 'path';
import { buildConfig } from 'payload/config';
import Users from './collections/User';
import { cloudStorage } from '@payloadcms/plugin-cloud-storage';
import { adapter } from './utilities/adapter';
import Media from './collections/Media';
// import FormBuilder from "@payloadcms/plugin-form-builder";
// import Form from './collections/Form';
// import FormSubmissions from './collections/FormSubmissions';
// import Fields from './collections/Form/Fields';
import seo from '@payloadcms/plugin-seo';
import nestedDocs from '@payloadcms/plugin-nested-docs';
import Pages from './collections/Pages';

export default buildConfig({
  collections: [Pages, Media, Users],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "../payload-types.ts"),
  },
  plugins: [
    // AWS Serverless Image Handler cloud storage plugin
    cloudStorage({
      collections: {
        media: {
          adapter: adapter,
          disableLocalStorage: true,
          prefix: "",
        },
      },
    }),
    // Form Builder plugin to dynamically create forms and handle submissions
    // FormBuilder({
    //   formOverrides: Form,
    //   formSubmissionOverrides: FormSubmissions,
    //   redirectRelationships: ["pages"],
    //   fields: Fields,
    // }),
    // SEO plugin to improve website SEO
    seo({
      collections: ["pages"],
      uploadsCollection: "media",
    }),
    // Allows for pages to be nested inside of one another
    nestedDocs({
      collections: ["pages"],
      parentFieldSlug: "parent",
      breadcrumbsFieldSlug: "breadcrumbs",
      generateLabel: (_, doc) => doc?.title as string,
      generateURL: (docs) => docs?.reduce((url, doc) => `${url}/${doc?.slug}`, "")
    })
  ],
  cors: [process.env.PAYLOAD_SERVER_URL as string],
});
