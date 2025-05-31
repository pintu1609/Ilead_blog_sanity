// /schemas/initiative.js
import { Rule } from 'sanity'


export default {
  name: 'leader',
  title: 'Leader',
  type: 'document',
  fields: [
    {
      name:"id",
      title: 'ID',
      type: 'number'
    },
    {
      name: 'name',
      title: 'Name',
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
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule: Rule) => rule.required()
    },
    {
  name: 'type',
  title: 'Type',
  type: 'string',
  options: {
    list: [
      { title: 'Trusters', value: 'trustees' },
      { title: 'Board of Directors', value: 'boardofdirectors' },
      { title: 'International Advisory Board', value: 'internationaladvisoryboard' },
      { title: 'Academic Team', value: 'academicteam' },
      { title: 'Partners', value: 'partners' },
      { title: 'Alumni Network', value: 'alumninetwork' },
    ],
    layout: 'dropdown' // optional: can be 'radio' or 'dropdown'
  },
  validation: (rule: Rule) => rule.required()
},
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name", maxLength: 96 }
      }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
};
