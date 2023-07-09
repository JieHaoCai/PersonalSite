export default {
    root: '/PersonalSite/',
    theme: 'docs',
    title: '叫我菜菜',
    description: '这是我的个人博客',
    plugins: ['sidebar', 'prev_next', 'script'],
    nav: [
        {
            text: '技术文档',
            link: '/docs/index.html',
        },
        // {
        // text: '赞助作者',
        // link: 'https://github.com/xcatliu/buy-me-a-coffee',
        // target: '_blank',
        // popover: (
        //     <>
        //     <img src="/assets/wechat.png" width="256" style={{ marginRight: '1rem', verticalAlign: 'top' }} />
        //     <img src="/assets/alpay.png" width="256" style={{ verticalAlign: 'top' }} />
        //     </>
        // ),
        // },
        {
            text: '关于',
            link: '/about/index.html',
        },
        {
            text: '本网站使用Pagic构建',
            link: 'https://github.com/xcatliu/pagic',
            target: '_blank'
        }
    ],
    sidebar: {
        '/docs/': ['docs/index.md', 'docs/vue3.md', 'docs/codeRule.md', 'docs/redux.md']
        // '/about/': [
        // 'about/README.md',
        // {
        //     link: 'about/team.md',
        //     expanded: false,
        //     children: ['about/xcatliu.md'],
        // },
        // {
        //     text: 'Who is using Pagic?',
        //     link: 'about/usage.md',
        // },
        // {
        //     text: 'Foldable item without link',
        //     children: ['about/join_us.md'],
        // },
        // ],
        // '/': ['docs/index.md', 'about/README.md'],
    },
    github: 'https://github.com/JieHaoCai',
    footer: (React.createElement("footer", null,
        "Power By\u00A0",
        React.createElement("a", { href: "https://github.com/JieHaoCai", target: "_blank" }, "JsonTsai"))),
};
