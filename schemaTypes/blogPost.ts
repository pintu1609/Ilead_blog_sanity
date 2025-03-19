export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'type',
        title: 'Type',
        type: 'string',
      },
      {
        name: 'abstract',
        title: 'Abstract',
        type: 'string',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
      },
      {
        name: 'authorImage',
        title: 'Author Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name:'authordetails',
        title:'Author Details',
        type:'string'
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
      {
        name: 'mainImage',
        title: 'Main Image',
        type: 'image',
        options: { hotspot: true },
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }], // ✅ Array of rich text blocks
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title", maxLength: 96 }
      }
    ],
  };
  