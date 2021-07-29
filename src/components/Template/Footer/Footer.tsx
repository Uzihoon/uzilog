import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { useStatusGet } from 'hooks/lib';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Footer() {
  const admin = useStatusGet('admin') as boolean;

  return (
    <div className={cx('footer-wrapper')}>
      <a href='https://github.com/Uzihoon'>
        {`© 2020 - ${new Date().getFullYear()} Uzihoon All rights reserved`}
      </a>
      {admin && (
        <div className={cx('oper-box')}>
          <Link to='/uzihoon/admin/write'>Posting</Link>
        </div>
      )}
    </div>
  );
}

export default Footer;
