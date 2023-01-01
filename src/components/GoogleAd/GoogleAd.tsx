import React, { CSSProperties } from 'react';
import styles from './GoogleAd.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface GoogldAdProps {
  className?: string;
  style?: CSSProperties;
  format: string;
  layoutKey?: string;
  slot: string;
  client?: string;
  responsive?: string;
}

function GoogleAd({
  className = 'adsbygoogle',
  style = {},
  format,
  layoutKey,
  client,
  slot,
  responsive,
}: GoogldAdProps) {
  if (process.env.NODE_ENV !== 'production') {
    return (
      <div style={style} className={cx('ad-box')}>
        AD
      </div>
    );
  }

  return (
    <ins
      className={className}
      style={{
        overflowX: 'auto',
        overflowY: 'hidden',
        display: 'block',
        textAlign: 'center',
        ...style,
      }}
      data-ad-format={format}
      data-ad-layout-key={layoutKey}
      data-ad-client={client}
      data-ad-slot={slot}
      data-full-width-responsive={responsive}
    />
  );
}

export default GoogleAd;
