import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  contentType: 'mdx',
  filePathPattern: 'projects/*.mdx',
  fields: {
    title: {
      type: 'string',
      description: 'Title of the project',
      required: true
    },
    description: {
      type: 'string',
      description: 'A brief description of the project',
      required: true
    },
    bannerUrl: {
      type: 'string',
      description: 'Banner image URL of the project',
      required: true
    },
    stack: {
      type: 'list',
      of: { type: 'string' },
      description: 'Tech stack used in the project',
      required: true
    }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (project) => project._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  }
}))

export default makeSource({
  contentDirPath: 'src/data',
  documentTypes: [Project]
})
