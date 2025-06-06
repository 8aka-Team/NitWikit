const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

// 从现有组件复用的函数
async function fetchContributors(repo) {
  try {
    let allContributors = [];
    let page = 1;
    let hasNextPage = true;
    
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

async function fetchAllContributorStats(repo) {
  try {
    const response = await fetch(`https://api.github.com/repos/${repo}/stats/contributors`);
    if (!response.ok) {
      if (response.status === 202) {
        await new Promise(resolve => setTimeout(resolve, 3000));
        return fetchAllContributorStats(repo);
      }
      throw new Error('获取贡献者统计数据失败');
    }
    
    const data = await response.json();
    
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

function isBot(username) {
  const botPatterns = [
    /bot\b/i,
    /\[bot\]/i,
    /github-actions/i,
    /imgbot/i
  ];
  
  const notBots = ['robotics', 'robot', 'robotman', 'robotboy'];
  if (notBots.some(name => username.toLowerCase().includes(name))) {
    return false;
  }
  
  return botPatterns.some(pattern => pattern.test(username));
}

function getContributorStats(allStats, username) {
  if (!Array.isArray(allStats)) {
    return { additions: 0, deletions: 0 };
  }
  
  const userStats = allStats.find(stat => stat && stat.author && stat.author.login === username);
  if (!userStats) {
    return { additions: 0, deletions: 0 };
  }
  
  let additions = 0;
  let deletions = 0;
  userStats.weeks.forEach(week => {
    additions += week.a;
    deletions += week.d;
  });
  
  return { additions, deletions };
}

async function main() {
  const repo = "8aka-Team/NitWikit"; // 你的仓库
  
  console.log(`开始获取 ${repo} 的贡献者数据...`);
  
  try {
    // 获取基本贡献者数据
    const contributorsData = await fetchContributors(repo);
    
    // 过滤掉机器人账户
    const filteredContributors = contributorsData.filter(contributor => !isBot(contributor.login));
    
    // 获取详细统计数据
    let statsData = [];
    try {
      statsData = await fetchAllContributorStats(repo);
    } catch (statsError) {
      console.warn('获取详细统计数据失败，将使用基本贡献数据:', statsError);
    }
    
    // 合并统计数据到贡献者数据
    const contributorsWithStats = filteredContributors.map(contributor => {
      const stats = getContributorStats(statsData, contributor.login);
      
      return {
        ...contributor,
        additions: stats.additions || 0,
        deletions: stats.deletions || 0,
        total: contributor.contributions || 0
      };
    });
    
    // 过滤有效贡献者并排序
    const validContributors = contributorsWithStats.filter(c => c.contributions > 0 || c.total > 0);
    const sorted = validContributors.sort((a, b) => (b.contributions || b.total) - (a.contributions || a.total));
    
    // 创建静态目录(如果不存在)
    const staticDir = path.join(__dirname, '../static/data');
    if (!fs.existsSync(staticDir)) {
      fs.mkdirSync(staticDir, { recursive: true });
    }
    
    // 保存为JSON文件
    const outputPath = path.join(staticDir, 'contributors.json');
    fs.writeFileSync(outputPath, JSON.stringify(sorted, null, 2));
    
    console.log(`成功将 ${sorted.length} 位贡献者数据保存到 ${outputPath}`);
  } catch (error) {
    console.error('处理贡献者数据时出错:', error);
    process.exit(1);
  }
}

main();