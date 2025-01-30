import {themes as prismThemes} from "prism-react-renderer";


/** @type {import('@docusaurus/types').Config} */
const config = {
    future: {
        experimental_faster: true,
    },

    customFields: {
        // 标题前缀
        titlePrefix: "主页",
        // 开始按钮文字
        start: "快速开始 🥵",
    },

    markdown: {
        mermaid: true,
    },

    title: '笨蛋 MC 开服教程',
    tagline: '一群笨蛋编写的 Minecraft 开服教程',
    favicon: 'img/favicon.ico',

    url: 'https://nitwikit.8aka.org',

    baseUrl: '/',

    organizationName: '8aka-Team',
    projectName: '笨蛋式指南',

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    onBrokenAnchors: 'warn',

    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },
    clientModules: [
        require.resolve('./src/clientModules/routeModules.js')
    ],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    editUrl: 'https://github.com/8aka-Team/NitWikit/tree/main',
                    showLastUpdateAuthor: true,
                    showLastUpdateTime: true,
                },
                blog: false,
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                    ],
                },
            }),
        ],
    ],
    plugins: [
        'docusaurus-plugin-image-zoom',
        'docusaurus-plugin-sass',
        [
            "@gracefullight/docusaurus-plugin-microsoft-clarity",
            {projectId: "oyfswsvfpc"},
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-java',
                path: 'docs-java',
                routeBasePath: 'Java',
                editUrl: 'https://github.com/8aka-Team/NitWikit/tree/main',
                sidebarPath: require.resolve('./sidebars.js'),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            }], [
            '@docusaurus/plugin-pwa',
            {
                pwaHead: [
                    {
                        tagName: 'link',
                        rel: 'icon',
                        href: '/img/book.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: '/manifest.json',
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: 'rgb(37, 194, 160)',
                    },
                ],
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'docs-bedrock',
                path: 'docs-bedrock',
                routeBasePath: 'Bedrock',
                editUrl: 'https://github.com/8aka-Team/NitWikit/tree/main',
                sidebarPath: require.resolve('./sidebars.js'),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
        [
            '@docusaurus/plugin-content-docs',
            {
                id: 'ad-1',
                path: 'ad-1',
                routeBasePath: 'ad-1',
                editUrl: 'https://github.com/8aka-Team/NitWikit/tree/main',
                sidebarPath: require.resolve('./sidebars.js'),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            giscus: {
                repo: '8aka-Team/NitWikit',
                repoId: 'R_kgDOLkVR-A',
                category: 'Announcements',
                categoryId: 'DIC_kwDOLkVR-M4CkTAe'
            },
            zoom: {
                selector: '.markdown :not(em) > img',
                background: {
                    light: 'rgb(255, 255, 255)',
                    dark: 'rgb(50, 50, 50)',
                },
            },
            // 标题渲染范围
            tableOfContents: {
                minHeadingLevel: 2,
                maxHeadingLevel: 5,
            },
            docs: {
                sidebar: {
                    autoCollapseCategories: true,
                },
            },
            image: 'img/docusaurus-social-card.jpg',
            metadata: [
                {name: '开服教程', content: '一群笨蛋编写的 Minecraft 开服教程'},
                {name: 'MC教程', content: '一群笨蛋编写的 Minecraft 开服教程'},
                {name: 'baidu-site-verification', content: 'codeva-POvxxO9Mk4'},
            ],
            navbar: {
                title: 'NitWikit',
                logo: {
                    alt: 'Logo',
                    src: 'img/book.png',
                },
                hideOnScroll: true,
                items: [
                    {
                        type: 'doc',
                        docId: 'intro',
                        position: 'left',
                        label: '通用',
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Java',
                        docsPluginId: 'docs-java'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Bedrock',
                        docsPluginId: 'docs-bedrock'
                    },
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: '广告位招租',
                        docsPluginId: 'ad-1'
                    },
                    // 搜索框
                    {
                        type: 'search',
                        position: 'right',
                    },
                    // GitHub
                    {
                        href: "https://github.com/8aka-Team/NitWikit",
                        className: "header-github-link",
                        position: "right",
                    },
                    // 顶部导航栏显示切换语言按钮
                    // {
                    //   type: 'localeDropdown',
                    //   position: 'right',
                    // },
                ],
            },

            // 底部链接
            footer: {
                style: 'dark',
                links: [
                    {
                        title: '文档',
                        items: [
                            {
                                label: '驿站主页',
                                to: 'https://8aka.org',
                            },
                            {
                                label: 'Docusaurus 主题',
                                to: 'https://nitwikit.8aka.org',
                            },
                            {
                                label: 'VitePress 主题',
                                to: 'https://nitwikit2.8aka.org',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/8aka-Team/NitWikit',
                            },
                        ],
                    },
                    {
                        title: '交流',
                        items: [
                            {
                                label: 'QQ 群',
                                href: 'https://qm.qq.com/q/dENGavSflK',
                            },
                        ],
                    },
                    {
                        title: '友链',
                        items: [
                            {
                                label: '服主资源导航页',
                                href: 'http://mcnav.fun',
                            },
                            {
                                label: 'CSKB 日冕知识库',
                                href: 'https://kb.corona.studio',
                            },
                            {
                                label: 'McRes 灵依资源站',
                                href: 'https://mcres.cn/',
                            },
                            {
                                label: 'Tinksp 资源站',
                                href: 'https://www.tinksp.com',
                            },
                        ],
                    },
                ],
                // 底部版权信息
                copyright: `Copyright © ${new Date().getFullYear()} <b>8aka-Team</b>, All Rights Reserved.`,
            },
            // 深浅主题
            prism: {
                theme: prismThemes.vsLight,
                darkTheme: prismThemes.vsDark,
            },
            // 颜色随系统切换
            colorMode: {
                defaultMode: 'light',
                disableSwitch: false,
                respectPrefersColorScheme: true,
            },

            // 搜索
            algolia: {
                appId: 'D1KV1BYF3B',
                apiKey: '4bb3573e59f2c49f30f057ce54edab3f',
                indexName: 'yizhan',
            },
            mermaid: {
                theme: {light: "neutral", dark: "dark"},
            },
        }),

    themes: [
        '@docusaurus/theme-mermaid'
    ],
    scripts: [
        {
            src: '/autoload.js',
            defer: true,
        },
    ],
};

export default config;
