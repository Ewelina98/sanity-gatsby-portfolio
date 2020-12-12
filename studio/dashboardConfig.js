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
                  buildHookId: '5fd51118284e76fead6a7b20',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-9q5xcs6p',
                  apiId: 'c10a7e33-c48d-408a-ad54-58cd94128db2'
                },
                {
                  buildHookId: '5fd511188fce213bed889a10',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-crvpfgj5',
                  apiId: 'cee4d311-92b7-4641-b6c2-3f6d29811157'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ewelina98/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-crvpfgj5.netlify.app',
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
