import projectConfig from '/PersonalSite/pagic.config.js';
export default {
    'prev': undefined,
    'next': {
        "text": "VUE3 相关",
        "link": "docs/vue3.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "docs/index.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/index.html",
    'title': "介绍",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>介绍</h1>\n<p>这里介绍了关于我本人</p>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@18.2.0/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@18.2.0/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/PersonalSite/index.js", type: "module" })),
    'footer': React.createElement("footer", null,
        "Power By",
        React.createElement("a", { href: "https://github.com/JieHaoCai", target: "_blank" }, "JsonTsai")),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u4ECB\u7ECD"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>这里介绍了关于我本人</p>'
        } }),
    'toc': null,
    'author': "caijiehao",
    'contributors': [
        "caijiehao"
    ],
    'date': "2023-07-09T04:41:29.000Z",
    'updated': null,
    'excerpt': "这里介绍了关于我本人",
    'cover': undefined,
    'sidebar': [
        {
            "text": "介绍",
            "link": "docs/index.html",
            "pagePath": "docs/index.md"
        },
        {
            "text": "VUE3 相关",
            "link": "docs/vue3.html",
            "pagePath": "docs/vue3.md"
        },
        {
            "text": "前端代码规范插件配置",
            "link": "docs/codeRule.html",
            "pagePath": "docs/codeRule.md"
        },
        {
            "text": "使用 Redux",
            "link": "docs/redux.html",
            "pagePath": "docs/redux.md"
        }
    ]
};
