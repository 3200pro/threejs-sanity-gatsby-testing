export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '60bd1f301767519c71fd65e7',
                  title: 'Sanity Studio',
                  name: 'threejs-sanity-gatsby-testing-studio',
                  apiId: 'f4a7eba2-5864-4de8-abab-a31d42f0c984'
                },
                {
                  buildHookId: '60bd1f305158842af51022a7',
                  title: 'Portfolio Website',
                  name: 'threejs-sanity-gatsby-testing',
                  apiId: 'f28b0038-c3f5-4178-a762-85de9061b2f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/3200pro/threejs-sanity-gatsby-testing',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://threejs-sanity-gatsby-testing.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
