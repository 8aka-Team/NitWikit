import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function FooterCopyright({copyright}) {
  const {siteConfig} = useDocusaurusContext();
  const {ICP_LICENSE, IS_CHINA_SITE} = siteConfig.customFields || {};

  const icpHtml = IS_CHINA_SITE && ICP_LICENSE 
    ? ` | <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">${ICP_LICENSE}</a>`
    : '';

  return (
    <div
      className="footer__copyright"
      // Developer provided the HTML, so assume it's safe.
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: copyright + icpHtml}}
    />
  );
}
