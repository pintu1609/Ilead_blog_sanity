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
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'author',
        title: 'Author',
        type: 'string',
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
    ],
  };
  