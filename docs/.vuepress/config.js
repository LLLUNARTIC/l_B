module.exports = {

    title: 'Lu\'s',
    description: '逝者如斯，而未尝往也；盈虚者如彼，而卒莫消长也。',
    // 主题配置
    themeConfig: {
        // 顶部导航栏
        nav: [
            { text: 'Home', link: '/' },
            { text: 'ES6', link: '/ES6/decoration' },
            { text: 'External', link: 'https://google.com' },
        ],
        // 侧边栏
        sidebar: {
            '/testdocs/': [
                {
                    title: '侧边栏下拉框的标题1',
                    children: [
                        '/testdocs/one',
                    ]
                }
            ],
            '/ES6/': [
                {
                    title: '侧边栏下拉框的标题1',
                    children: [
                        '/ES6/decoration',
                    ]
                }
            ]


            // '/testdocs/': [
            //     'one', 
            //     'two'   
            // ],
            // '/ES6/': [
            //     'decoration'
            // ]
        },
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。

    },
    // 内容设置
    markdown: {
        // 代码块行数
        lineNumbers: true
    }
}