import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '简单易用',
    Svg: require('@site/static/img/grass.svg').default,
    description: '从零开始的手把手教程，简单明了的指引让新手也能快速上手，轻松创建自己的Minecraft服务器。',
  },
  {
    title: '详细全面',
    Svg: require('@site/static/img/crafting-table.svg').default,
    description: '涵盖服务器创建、配置、维护的方方面面，提供深入的指导和丰富的技巧，助你从新手成长为专业服务器管理员。',
  },
  {
    title: '持续更新',
    Svg: require('@site/static/img/furnace.svg').default,
    description: '内容紧跟Minecraft最新版本和社区动态，定期更新教程和最佳实践，确保你获取最前沿的服务器管理知识。',
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={styles.featureCard}>
      <div>
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>
            为什么选择 <span className="text--primary">NitWikit</span>
          </Heading>
          <p className={styles.sectionSubtitle}>
            我们致力于提供最全面、最易懂的Minecraft服务器创建与管理指南
          </p>
        </div>
        
        <div className={styles.featuresInner}>
          <div className={styles.gridContainer}>
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
