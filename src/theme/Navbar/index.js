import React, { useEffect, useState } from 'react';
import Navbar from '@theme-original/Navbar';
import GitHubButton from '@site/src/components/GitHubButton';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function NavbarWrapper(props) {
  const {
    navbar: { items },
  } = useThemeConfig();
  
  // 追踪窗口宽度
  const [isMobile, setIsMobile] = useState(false);

  // 过滤掉原始的GitHub链接项
  const filteredItems = items.filter(
    (item) => !(item.className === 'header-github-link' && item.href?.includes('github.com'))
  );

  // 监听窗口大小变化
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 996);
    };
    
    // 初始检查
    checkMobile();
    
    // 监听窗口大小变化
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 在DOM操作后插入GitHub按钮（仅在非移动设备上）
  useEffect(() => {
    if (isMobile) {
      // 移动设备上，移除任何可能存在的GitHub按钮
      const existingButton = document.querySelector('#github-button-container');
      if (existingButton) {
        existingButton.parentNode.removeChild(existingButton);
      }
      return;
    }
    
    const insertGitHubButton = () => {
      // 找到主题切换按钮
      const colorModeToggle = document.querySelector('.navbar__items--right .colorModeToggle');
      if (!colorModeToggle) return;

      // 检查是否已经存在GitHub按钮
      const existingButton = document.querySelector('#github-button-container');
      if (existingButton) return;

      // 创建一个新的包装器来包含GitHub按钮
      const wrapper = document.createElement('div');
      wrapper.className = 'navbar__item';
      
      // 创建GitHub按钮的容器
      const githubButtonContainer = document.createElement('div');
      githubButtonContainer.id = 'github-button-container';
      
      // 将GitHub按钮容器添加到包装器中
      wrapper.appendChild(githubButtonContainer);
      
      // 将包装器添加到主题切换按钮前面
      colorModeToggle.parentNode.insertBefore(wrapper, colorModeToggle);
      
      // 渲染React组件到容器中
      const React = require('react');
      const ReactDOM = require('react-dom');
      ReactDOM.render(<GitHubButton />, githubButtonContainer);
    };
    
    // 初始插入和页面变化时重新插入
    insertGitHubButton();
    
    // 监听导航栏的变化
    const observer = new MutationObserver(insertGitHubButton);
    const navbar = document.querySelector('.navbar__items--right');
    if (navbar) {
      observer.observe(navbar, { childList: true, subtree: true });
    }
    
    return () => {
      // 组件卸载时停止观察
      observer.disconnect();
    };
  }, [isMobile]);  // 依赖isMobile，当设备类型变化时重新运行

  return <Navbar {...props} items={filteredItems} />;
} 