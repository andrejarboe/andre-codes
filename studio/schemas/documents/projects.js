export default {
  name: 'projects',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontend will require a slug to be set to be able to show the project',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          // styles: [{title: 'Normal', value: 'normal'}],
          // lists: [],
        }
      ]
    },
    {
      title: 'Project Url',
      name: 'projectUrl',
      type: 'url',
    },
    {
      title: 'GitHub Url',
      name: 'gitHubUrl',
      type: 'url',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'tags' } }],
    },
    {
      name: 'notes',
      title: 'Notes for the user',
      type: 'text',
    }
  ],
  preview: {
    select: {
      media: 'mainImage',
      title: 'title',
      tags: 'tags'
    }
  }
};
