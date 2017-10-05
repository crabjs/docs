docute.init({
    // landing: {
    //     markdown: '## inline markdown',
    //     // or:
    //     // html: '<h2>inline html</h2>'
    // },
    repo: 'crabjs/crabjs-cms',
    twitter: 'vietworm',
    disableSidebarToggle: false,
    sidebar: true,
    marked: {
        smartypants: true
    },
    // routerMode: 'history',
    debug: true,
    plugins: [
        docsearch({
            appId: 'K5XN7V2NL6',
            apiKey: '04229f49786c77e03ea32ca2a06e6e4f',
            indexName: 'adflex_docute',
            url: 'https://docute.js.org'
        })
    ],
    nav: [
        // homepage
        {title: 'Home', path: '/', source: './home.md'},
        {title: 'Use with PM2', path: '/pm2', source: './PM2.md'},
        {title: 'Troubleshooting', path: '/troubleshooting', source: './TROUBLES.md'}
    ]
})