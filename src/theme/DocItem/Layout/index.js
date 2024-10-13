import React from 'react';
import clsx from 'clsx';
import {useWindowSize} from '@docusaurus/theme-common';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import DocItemPaginator from '@theme/DocItem/Paginator';
import DocVersionBanner from '@theme/DocVersionBanner';
import DocVersionBadge from '@theme/DocVersionBadge';
import DocItemFooter from '@theme/DocItem/Footer';
import DocItemTOCMobile from '@theme/DocItem/TOC/Mobile';
import DocItemTOCDesktop from '@theme/DocItem/TOC/Desktop';
import DocItemContent from '@theme/DocItem/Content';
import DocBreadcrumbs from '@theme/DocBreadcrumbs';
import ContentVisibility from '@theme/ContentVisibility';
import styles from './styles.module.css';
import { FloatButton, Modal } from 'antd';
import { FilePdfOutlined, PrinterOutlined } from '@ant-design/icons';

/**
 * Decide if the toc should be rendered, on mobile or desktop viewports
 */
function useDocTOC() {
  const {frontMatter, toc} = useDoc();
  const windowSize = useWindowSize();
  const hidden = frontMatter.hide_table_of_contents;
  const canRender = !hidden && toc.length > 0;
  const mobile = canRender ? <DocItemTOCMobile /> : undefined;
  const desktop =
    canRender && (windowSize === 'desktop' || windowSize === 'ssr') ? (
      <DocItemTOCDesktop />
    ) : undefined;
  return {
    hidden,
    mobile,
    desktop,
  };
}
export default function DocItemLayout({children}) {
  const docTOC = useDocTOC();
  const {metadata} = useDoc();
  const printArticle = () => {
    window.print();
  };
  const downloadPDF = () => {
    Modal.info({
      title: '下载PDF',
      width: 500,
      content: (
          <div>
            <p>目前无法借助插件实现直接下载为PDF的功能，需要在弹出的打印窗口中，将目标打印机设置为"另存为PDF"（不同浏览器选项可能不同），通过打印功能来实现PDF下载</p>
            <p>点击“确定”，将弹出打印对话框。</p>
          </div>
      ),
      onOk() {
        setTimeout(()=>window.print(), 1000);
      },
    })
  };
  return (
    <div className="row">
      <div className={clsx('col', !docTOC.hidden && styles.docItemCol)}>
        <ContentVisibility metadata={metadata} />
        <DocVersionBanner />
        <div className={styles.docItemContainer}>
          <article>
            <DocBreadcrumbs />
            <DocVersionBadge />
            {docTOC.mobile}
            <DocItemContent>{children}</DocItemContent>
            <DocItemFooter />
          </article>
          <DocItemPaginator />
        </div>
      </div>
      {docTOC.desktop && <div className="col col--3">{docTOC.desktop}</div>}
      <FloatButton.Group shape="circle" style={{right: 24}} className="article-float-buttons">
        <FloatButton.BackTop visibilityHeight={0}/>
        <FloatButton icon={<PrinterOutlined/>} title="打印文档" onClick={printArticle}/>
        <FloatButton icon={<FilePdfOutlined/>} title="下载PDF" onClick={downloadPDF}/>
      </FloatButton.Group>
    </div>
  );
}
