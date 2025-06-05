import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import './styles.css';

/**
 * 获取QQ头像URL
 * @param {string} qq QQ号码
 * @returns {string} 头像URL
 */
function getQQAvatar(qq) {
  // QQ号为空或非数字时返回默认头像
  if (!qq || !/^\d+$/.test(qq)) {
    return 'https://q.qlogo.cn/g?b=qq&nk=10000&s=100';
  }
  // 使用QQ自带的头像API
  return `https://q.qlogo.cn/g?b=qq&nk=${qq}&s=100`;
}

/**
 * 单个赞助者卡片组件
 */
export function SponsorCardItem({ name, amount, qq, note }) {
  const [avatarUrl, setAvatarUrl] = useState('');
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (qq) {
      setAvatarUrl(getQQAvatar(qq));
    }
  }, [qq]);

  // 头像加载失败时使用备用头像
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setAvatarUrl('https://nitwikit.com/img/icon.svg');
    }
  };

  // 如果没有提供QQ号，使用默认头像
  useEffect(() => {
    if (!qq && !avatarUrl) {
      setAvatarUrl('https://nitwikit.com/img/icon.svg');
    }
  }, [qq, avatarUrl]);

  const amountClass = clsx('sponsor-amount', {
    'amount-s': amount >= 10 && amount < 50,
    'amount-m': amount >= 50 && amount < 100,
    'amount-l': amount >= 100 && amount < 500,
    'amount-xl': amount >= 500,
  });

  return (
    <div className="sponsor-card">
      <div className="sponsor-avatar-wrapper">
        <img 
          src={avatarUrl} 
          alt={`${name} 的头像`} 
          className="sponsor-avatar"
          onError={handleImageError} 
        />
      </div>
      <div className="sponsor-info">
        <div className="sponsor-name">{name}</div>
        <div className={amountClass}>¥{amount}</div>
        {note && <div className="sponsor-note">{note}</div>}
      </div>
    </div>
  );
}

/**
 * 赞助者卡片列表组件
 */
export default function SponsorCard({ sponsors }) {
  if (!sponsors || sponsors.length === 0) {
    return (
      <div className="sponsor-empty">
        暂无赞助者，成为第一个赞助者吧！
      </div>
    );
  }

  // 按金额从高到低排序
  const sortedSponsors = [...sponsors].sort((a, b) => b.amount - a.amount);

  return (
    <div className="sponsor-container">
      {sortedSponsors.map((sponsor, index) => (
        <SponsorCardItem
          key={index}
          name={sponsor.name}
          amount={sponsor.amount}
          qq={sponsor.qq}
          note={sponsor.note}
        />
      ))}
    </div>
  );
} 