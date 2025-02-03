// src/clientModules/adModule.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

async function injectAd() {
    try {
        // 1. 获取广告数据
        const response = await fetch('https://ad-api.8aka.org/ads');
        const ads = await response.json();

        // 2. 验证数据格式
        if (!Array.isArray(ads) || ads.length === 0) return;

        // 3. 创建广告容器
        const adContainer = document.createElement('div');
        adContainer.className = 'ad-container';

        // 4. 创建广告元素
        ads.forEach(ad => {
            const link = document.createElement('a');
            link.href = ad.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = ad.name;
            link.className = 'ad-link';
            adContainer.appendChild(link);
        });

        // 5. 响应式插入逻辑
        const updateAdPosition = () => {
            // 移除旧广告位置
            const existingAd = document.querySelector('.ad-container');
            if (existingAd) existingAd.remove();

            // 桌面端插入位置（导航栏右侧）
            if (window.innerWidth >= 996) {
                const desktopTarget = document.querySelector('.navbar__items--right');
                if (desktopTarget) {
                    desktopTarget.prepend(adContainer);
                }
            }
            // 移动端插入位置（侧边栏底部）
            else {
                const mobileTarget = document.querySelector('.menu__list');
                if (mobileTarget) {
                    mobileTarget.appendChild(adContainer);
                    // 添加移动端专用样式
                    adContainer.classList.add('mobile-ad');
                }
            }
        };

        // 初始插入
        updateAdPosition();

        // 监听窗口变化
        window.addEventListener('resize', updateAdPosition);

        // 6. 基础样式
        const style = document.createElement('style');
        style.textContent = `
        .ad-container {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .ad-link {
          color: var(--ifm-link-color);
          padding: 0.5rem;
          border-radius: 4px;
          transition: opacity 0.2s;
        }
        .ad-link:hover {
          opacity: 0.8;
          text-decoration: none;
        }
        .mobile-ad {
          flex-direction: column;
          padding: 1rem;
          border-top: 1px solid var(--ifm-color-emphasis-300);
          margin-top: auto;
        }
      `;
        document.head.appendChild(style);

    } catch (error) {
        console.error('Failed to load ads:', error);
    }
}

// 只在客户端执行
if (ExecutionEnvironment.canUseDOM) {
    injectAd()
}
export function onRouteDidUpdate() {
    if (ExecutionEnvironment.canUseDOM) {
        injectAd();
    }
}