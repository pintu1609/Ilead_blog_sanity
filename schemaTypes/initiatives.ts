// /schemas/initiative.js
import { Rule } from 'sanity'


export default {
  name: 'initiative',
  title: 'Initiative',
  type: 'document',
  fields: [
    {
      name:"id",
      title: 'ID',
      type: 'number'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Alternative text for the image (important for accessibility and SEO)',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'shortText',
      title: 'Short Description',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'longText',
      title: 'Full Description',
      type: 'text',
      rows: 5,
      validation: (rule: Rule) => rule.required()
    },
    {
      name: 'additionalText',
      title: 'Additional Text',
      type: 'text',
      rows: 5
      
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    }
  }
};
