// src/clientModules/adModule.js
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

async function injectExternLink() {
    try {
        // 1. 获取广告数据
        const response = await fetch('https://ad-api.8aka.org/ads');
        const links = await response.json();

        // 2. 验证数据格式
        if (!Array.isArray(links) || links.length === 0) return;

        // 3. 创建广告容器
        const adContainer = document.createElement('div');
        adContainer.className = 'extern-container';

        // 4. 创建广告元素
        links.forEach(ad => {
            const link = document.createElement('a');
            link.href = ad.url;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.textContent = ad.name;
            link.className = 'extern-item'; // 使用已有的extern-item类
            adContainer.appendChild(link);
        });

        // 5. 响应式插入逻辑
        const updateAdPosition = () => {
            // 移除旧广告位置
            const existingAd = document.querySelector('.extern-container');
            if (existingAd) existingAd.remove();

            // 桌面端插入位置（导航栏右侧）
            if (window.innerWidth >= 996) {
                const desktopTarget = document.querySelector('.navbar__items--right');
                if (desktopTarget) {
                    // 确保插入在搜索框和GitHub图标之前
                    const firstChild = desktopTarget.firstChild;
                    if (firstChild) {
                        desktopTarget.insertBefore(adContainer, firstChild);
                    } else {
                        desktopTarget.prepend(adContainer);
                    }
                    // 移除可能的移动端样式
                    adContainer.classList.remove('mobile-extern');
                    // 添加桌面端样式
                    adContainer.classList.add('desktop-extern');
                }
            }
            // 移动端插入位置（侧边栏底部）
            else {
                const mobileTarget = document.querySelector('.menu__list');
                if (mobileTarget) {
                    mobileTarget.appendChild(adContainer);
                    // 添加移动端专用样式
                    adContainer.classList.remove('desktop-extern');
                    adContainer.classList.add('mobile-extern');
                }
            }
        };

        // 初始插入
        updateAdPosition();

        // 监听窗口变化，使用防抖提高性能
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(updateAdPosition, 100);
        });

        // 6. 基础样式
        const style = document.createElement('style');
        style.textContent = `
        .extern-container {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .desktop-extern {
          margin-right: 1rem;
        }
        
        .mobile-extern {
          flex-direction: column;
          align-items: flex-start;
          padding: 1rem 0.5rem;
          border-top: 1px solid var(--ifm-color-emphasis-300);
          margin-top: 1rem;
          width: 100%;
        }
        
        .mobile-extern .extern-item {
          margin: 0.25rem 0;
          font-size: 0.9rem;
        }
        
        /* 窄屏优化 */
        @media (max-width: 1100px) and (min-width: 996px) {
          .desktop-extern {
            margin-right: 0.5rem;
          }
          
          .extern-container {
            gap: 0.5rem;
          }
          
          .desktop-extern .extern-item {
            font-size: 0.85rem;
          }
        }
      `;
        document.head.appendChild(style);

    } catch (error) {
        console.error('Failed to load ads:', error);
    }
}

// 只在客户端执行
if (ExecutionEnvironment.canUseDOM) {
    // 确保DOM完全加载后再注入广告
    if (document.readyState === 'complete') {
        injectExternLink();
    } else {
        window.addEventListener('load', injectExternLink);
    }
}

export function onRouteDidUpdate() {
    if (ExecutionEnvironment.canUseDOM) {
        injectExternLink();
    }
}
