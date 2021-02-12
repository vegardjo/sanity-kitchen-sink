export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60267b98727e8ddf2a5c5495',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j9vy7744',
                  apiId: '0d5e587f-89f7-4d8a-8da1-61a7d64247e9'
                },
                {
                  buildHookId: '60267b99727e8dd82c5c5a04',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2f8b5qn7',
                  apiId: 'bc47a9f8-92c2-474a-a875-18e0ff1ec42f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vegardjo/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2f8b5qn7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
