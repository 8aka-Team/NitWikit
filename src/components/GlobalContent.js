import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const IS_CHINA_SITE = process.env.CHINA === 'true';

/**
 * A component that conditionally renders its children based on the CHINA environment variable.
 * If CHINA is 'true', the children (typically Markdown content) will not be rendered.
 */
export default function GlobalContent({ children }) {
  if (IS_CHINA_SITE) {
    return null; // Do not render children if in China site context
  }
  return <>{children}</>; // Render children otherwise
}