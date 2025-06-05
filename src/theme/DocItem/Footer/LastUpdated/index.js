import React, { useEffect, useState } from 'react';
import { useDoc } from '@docusaurus/theme-common/internal';
import Translate from '@docusaurus/Translate';
import { execSync } from 'child_process';

/**
 * 获取文档的所有贡献者 - 这个函数只在构建时执行
 * @param {string} filePath 文档文件路径
 * @returns {Array<string>} 贡献者列表
 */
function getContributors(filePath) {
  try {
    if (typeof window !== 'undefined') {
      // 浏览器环境下无法执行git命令
      return [];
    }
    
    // 使用git log获取所有提交者
    const command = `git log --format='%aN' -- "${filePath}" | sort | uniq`;
    const output = execSync(command, { encoding: 'utf-8' });
    
    return output
      .split('\n')
      .filter(Boolean)
      .map(line => line.replace(/'/g, '').trim());
  } catch (error) {
    console.error('获取文件贡献者失败:', error);
    return [];
  }
}

// 重写的LastUpdated组件
export default function LastUpdated({ lastUpdatedAt, formattedLastUpdatedAt }) {
  const { metadata } = useDoc();
  const [contributors, setContributors] = useState([]);
  
  // 默认使用最后更新者
  const lastUpdatedBy = metadata.lastUpdatedBy;
  
  useEffect(() => {
    // 只在服务器端构建时获取所有贡献者
    if (process.env.NODE_ENV === 'production' && typeof window === 'undefined') {
      const sourcePath = metadata.source;
      if (sourcePath) {
        const allContributors = getContributors(sourcePath);
        setContributors(allContributors);
      }
    } else if (lastUpdatedBy) {
      // 客户端环境下只能使用元数据中的最后更新者
      setContributors([lastUpdatedBy]);
    }
  }, [metadata, lastUpdatedBy]);
  
  if (!lastUpdatedAt) {
    return null;
  }
  
  return (
    <div className="theme-last-updated">
      <Translate
        id="theme.lastUpdated.lastUpdatedAtBy"
        description="The text used to display the last time a page was updated, and by who"
        values={{
          lastUpdatedAt: formattedLastUpdatedAt,
          byText: contributors.length > 0 && (
            <strong>
              <Translate
                id="theme.lastUpdated.byUser"
                description="The text used to describe the author who last updated the doc">
                {contributors.join(', ')}
              </Translate>
            </strong>
          ),
        }}>
        {'Last updated on {lastUpdatedAt}'}
        {contributors.length > 0 && ' by {byText}'}
      </Translate>
    </div>
  );
} 