import {themes as prismThemes} from "prism-react-renderer";

const IS_CHINA_SITE = process.env.CHINA === 'true';
const ICP_LICENSE = process.env.ICP_LICENSE;


/** @type {import('@docusaurus/types').Config} */
const config = {

    future: {
        v4: true,
        experimental_faster: {
            rspackBundler: true, // required flag
            rspackPersistentCache: true, // new flag
        },
    },

    customFields: {
        // 标题前缀
        titlePrefix: "主页",
        // 开始按钮文字
        start: "快速开始 🥵",
        // 标题颜色
        titleColor: "white",
        // 自定义swizzle配置
        swizzleConfig: {
            enabled: true,
            components: {
                'theme/DocItem/Footer/LastUpdated': {
                    override: 'src/plugins/theme/LastUpdate',
                },
            },
        },
        // ICP 备案号
        ICP_LICENSE: ICP_LICENSE,
        // 是否为中国站点
        IS_CHINA_SITE: IS_CHINA_SITE,
    },

    markdown: {
        mermaid: true,
    },

    title: '笨蛋 MC 开服教程',
    tagline: '一群笨蛋编写的 Minecraft 开服教程',
    favicon: 'img/favicon.ico',

    url: IS_CHINA_SITE ? 'https://nitwikit.8aka.cn' : 'https://nitwikit.8aka.org',

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
        require.resolve('./src/clientModules/routeModules.js'),
        require.resolve('./src/clientModules/adsModules.js'),
        require.resolve('./src/clientModules/githubIconModule.js'),
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
                        require.resolve('./src/css/github.css'),
                        require.resolve('./src/css/ad.css'),
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
                id: 'docs-about',
                path: 'docs-about',
                routeBasePath: 'about',
                editUrl: 'https://github.com/8aka-Team/NitWikit/tree/main',
                sidebarPath: require.resolve('./sidebars.js'),
                editCurrentVersion: true,
                showLastUpdateAuthor: true,
                showLastUpdateTime: true,
            },
        ],
    ],
    headTags: [
        {
            tagName: 'link',
            attributes: {
                rel: 'shortcut icon',
                type: "image/x-icon",
                href: '/favicon.ico',
            },
        }
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Giscus 评论功能在 CHINA 环境变量设置时禁用
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
                    dark: 'rgb(36 36 36 / 80%)',
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
                {name: 'keywords', content: 'Minecraft, 开服教程, MC, 开服, 插件, 联机, 我的世界'},
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
                        label: '关于我们',
                        docsPluginId: 'docs-about'
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
                            {
                                label: 'MCNav',
                                href: 'https://www.mcnav.net',
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
                additionalLanguages: [
                    'java', 'kotlin', 'groovy', 'scala',
                    'bash', 'powershell',
                    'python', 'ruby', 'php', 'go', 'rust',
                    'c', 'cpp', 'csharp',
                    'sql', 'json', 'yaml', 'toml',
                    'css', 'scss', 'less',
                    'javascript', 'typescript', 'jsx', 'tsx',
                    'markup', 'markdown',
                    'nginx', 'docker', 'diff'
                ],
                defaultLanguage: 'plaintext',
                magicComments: [
                    {
                        className: 'theme-code-block-highlighted-line',
                        line: 'highlight-next-line',
                        block: {start: 'highlight-start', end: 'highlight-end'},
                    },
                    {
                        className: 'code-block-error-line',
                        line: 'error-next-line',
                        block: {start: 'error-start', end: 'error-end'},
                    },
                ],
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
};

export default config;
