// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: "projects/*.mdx",
  fields: {
    title: {
      type: "string",
      description: "Title of the project",
      required: true
    },
    description: {
      type: "string",
      description: "A brief description of the project",
      required: true
    },
    bannerUrl: {
      type: "string",
      description: "Url for the banner image src",
      required: true
    },
    stack: {
      type: "list",
      of: { type: "string" },
      description: "Tech stack used in the project",
      required: true
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (project) => project._raw.sourceFileName.replace(/\.mdx$/, "")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "src/data",
  documentTypes: [Project]
});
export {
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-U6SPOOUB.mjs.map
