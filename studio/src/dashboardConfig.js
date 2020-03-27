export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e7d83ce9da388d7566942b1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ap7kajn4',
                  apiId: 'b84fe71d-5195-4001-8f13-1ef070583a71'
                },
                {
                  buildHookId: '5e7d83cef47f46fd8ae611b7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-czvxyyxv',
                  apiId: 'c5e1efac-78bf-4dd4-817d-c28efaa03525'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/theoryforcestudio/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-czvxyyxv.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
