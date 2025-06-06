import React, { useState, useEffect } from 'react';
import './styles.css';

/**
 * 获取GitHub贡献者数据(带分页)
 * @param {string} repo 仓库名称，格式为 "用户名/仓库名"
 * @returns {Promise<Array>} 贡献者数据数组
 */
async function fetchContributors(repo) {
  try {
    let allContributors = [];
    let page = 1;
    let hasNextPage = true;
    
    // 使用循环处理分页，GitHub API默认每页返回30条数据
    while (hasNextPage) {
      const response = await fetch(`https://api.github.com/repos/${repo}/contributors?per_page=100&page=${page}`);
      if (!response.ok) {
        throw new Error('获取贡献者数据失败');
      }
      
      const data = await response.json();
      if (data.length === 0) {
        hasNextPage = false;
      } else {
        allContributors = [...allContributors, ...data];
        page++;
      }
    }
    
    console.log(`已获取 ${allContributors.length} 位贡献者数据`);
    return allContributors;
  } catch (error) {
    console.error('获取贡献者数据出错:', error);
    return [];
  }
}

/**
 * 获取所有贡献者的详细统计信息
 * @param {string} repo 仓库名称，格式为 "用户名/仓库名"
 * @returns {Promise<Array>} 包含统计数据的贡献者数组
 */
async function fetchAllContributorStats(repo) {
  try {
    // 直接获取全部贡献者统计数据
    const response = await fetch(`https://api.github.com/repos/${repo}/stats/contributors`);
    if (!response.ok) {
      // GitHub可能会返回202，表示正在计算统计信息
      if (response.status === 202) {
        // 等待几秒后重试
        await new Promise(resolve => setTimeout(resolve, 3000));
        return fetchAllContributorStats(repo);
      }
      throw new Error('获取贡献者统计数据失败');
    }
    
    const data = await response.json();
    
    // 确保返回的是数组
    if (!Array.isArray(data)) {
      console.error('GitHub API返回的统计数据不是数组格式:', data);
      return [];
    }
    
    return data;
  } catch (error) {
    console.error('获取贡献者统计数据出错:', error);
    return [];
  }
}

/**
 * 获取单个贡献者的统计信息
 * @param {Array} allStats 所有贡献者的统计数据
 * @param {string} username 贡献者用户名
 * @returns {Object} 贡献者统计数据
 */
function getContributorStats(allStats, username) {
  // 确保 allStats 是数组
  if (!Array.isArray(allStats)) {
    console.error('获取的统计数据格式错误:', allStats);
    return { additions: 0, deletions: 0 };
  }
  
  const userStats = allStats.find(stat => stat && stat.author && stat.author.login === username);
  if (!userStats) {
    return { additions: 0, deletions: 0 };
  }
  
  // 计算总添加和删除行数
  let additions = 0;
  let deletions = 0;
  userStats.weeks.forEach(week => {
    additions += week.a;
    deletions += week.d;
  });
  
  return { additions, deletions };
}

/**
 * 判断用户是否为机器人账户
 * @param {string} username 用户名
 * @returns {boolean} 是否为机器人
 */
function isBot(username) {
  const botPatterns = [
    /bot\b/i,         // 匹配包含bot单词的用户名
    /\[bot\]/i,       // 匹配[bot]
    /github-actions/i,// 匹配github-actions
    /imgbot/i         // 匹配imgbot
  ];
  
  // 明确排除这些不应被视为机器人的用户名
  const notBots = ['robotics', 'robot', 'robotman', 'robotboy'];
  if (notBots.some(name => username.toLowerCase().includes(name))) {
    return false;
  }
  
  return botPatterns.some(pattern => pattern.test(username));
}

/**
 * 格式化数字，对于大数使用k、M等单位
 * @param {number} num 要格式化的数字
 * @returns {string} 格式化后的字符串
 */
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

/**
 * 单个贡献者卡片组件
 */
export function ContributorCardItem({ contributor, rank }) {
  // 优先使用详细统计中的增删行数，如果没有则使用贡献数
  const additions = contributor.additions || 0;
  const deletions = contributor.deletions || 0;
  const totalContribution = additions + deletions;
  
  // 判断是否有增删行数数据
  const hasLineStats = additions > 0 || deletions > 0;
  
  return (
    <div className="contributor-card">
      {rank && <div className="contributor-rank">{rank}</div>}
      <div className="contributor-avatar-wrapper">
        <img 
          src={contributor.avatar_url} 
          alt={`${contributor.login} 的头像`} 
          className="contributor-avatar"
        />
      </div>
      <div className="contributor-info">
        <div className="contributor-name">
          <a href={contributor.html_url} target="_blank" rel="noopener noreferrer">
            {contributor.login}
          </a>
        </div>
        <div className="contributor-stats">
          {hasLineStats ? (
            <>
              <span className="additions">+{formatNumber(additions)}</span>
              <span className="deletions">-{formatNumber(deletions)}</span>
            </>
          ) : (
            <span className="no-stats">行数统计暂未显示</span>
          )}
        </div>
        <div className="contributor-total">
          总贡献: {formatNumber(contributor.contributions)} 次提交
        </div>
      </div>
    </div>
  );
}

/**
 * 贡献者卡片列表组件
 */
export default function ContributorCard({ repo = "8aka-Team/NitWikit" }) {
  const [contributors, setContributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 获取所有贡献者数据并处理
  useEffect(() => {
    async function loadAllContributorData() {
      try {
        setLoading(true);
        
        // 首先获取基本贡献者数据
        const contributorsData = await fetchContributors(repo);
        
        // 过滤掉机器人账户
        const filteredContributors = contributorsData.filter(contributor => !isBot(contributor.login));
        
        // 尝试获取详细统计数据
        let statsData = [];
        try {
          statsData = await fetchAllContributorStats(repo);
        } catch (statsError) {
          console.warn('获取详细统计数据失败，将使用基本贡献数据:', statsError);
        }
        
        // 合并统计数据到贡献者数据
        const contributorsWithStats = filteredContributors.map(contributor => {
          // 尝试获取详细的增删行数统计
          const stats = getContributorStats(statsData, contributor.login);
          
          // 如果无法获取详细统计，使用contributions作为总贡献
          // 我们可以根据contributions估算增删行数，或者直接使用contributions值
          return {
            ...contributor,
            additions: stats.additions || 0,
            deletions: stats.deletions || 0, // 估算删除行数
            total: contributor.contributions || 0 // 使用GitHub提供的贡献数
          };
        });
        
        // 确保所有贡献者有非零贡献值进行排序
        const validContributors = contributorsWithStats.filter(c => c.contributions > 0 || c.total > 0);
        
        // 按照贡献总量排序
        const sorted = validContributors.sort((a, b) => (b.contributions || b.total) - (a.contributions || a.total));
        
        console.log(`处理后共有 ${sorted.length} 位有效贡献者`);
        setContributors(sorted);
      } catch (err) {
        console.error('加载贡献者数据出错:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    loadAllContributorData();
  }, [repo]);

  if (loading) {
    return <div className="contributor-loading">正在加载贡献者数据，这可能需要一些时间...</div>;
  }

  if (error) {
    return <div className="contributor-error">获取贡献者数据出错: {error}</div>;
  }

  if (!contributors || contributors.length === 0) {
    return <div className="contributor-empty">在访问github时遇到问题，请稍后再试</div>;
  }

  return (
    <div className="contributor-container">
      {contributors.map((contributor, index) => (
        <ContributorCardItem
          key={contributor.id}
          contributor={contributor}
          rank={index + 1}
        />
      ))}
    </div>
  );
}