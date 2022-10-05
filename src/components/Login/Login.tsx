import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import Logo from 'components/Logo';
import { useStatusGet } from 'hooks/lib';
import { useHistory } from 'react-router';
import useStatusActions from 'hooks/status/useStatusActions';

const cx = classNames.bind(styles);

function Login() {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [checked, setChecked] = useState<boolean>(false);
  const history = useHistory();
  const statusActions = useStatusActions();
  const admin = useStatusGet('admin');
  useEffect(() => {
    if (checked) return;
    // statusActions.onCheckAdmin(history);
    setChecked(true);
  }, []);

  useEffect(() => {
    if (admin && checked) {
      history.push('/uzihoon/admin/write');
    }
  }, [admin]);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !password) return;
    statusActions.onLogin({ email, password });
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (!checked) return null;
  return (
    <div className={cx('login-wrapper')}>
      <div className={cx('login-box')}>
        <div className={cx('header')}>
          <Logo />
        </div>
        <div className={cx('desc')}>Welcome to UZILOG Please login</div>
        <form onSubmit={handleLogin}>
          <div className={cx('item')}>
            <label htmlFor='inp' className={cx('inp')} title='email'>
              <input id='inp' placeholder='&nbsp;' onChange={handleEmail} />
              <span className={cx('label')}>Email</span>
              <span className={cx('border')}></span>
            </label>
          </div>
          <div className={cx('item')}>
            <label htmlFor='inp' className={cx('inp')} title='password'>
              <input
                id='inp'
                type='password'
                placeholder='&nbsp;'
                onChange={handlePassword}
              />
              <span className={cx('label')}>Password</span>
              <span className={cx('border')}></span>
            </label>
          </div>
          <div className={cx('button-box')}>
            <button type='submit'>LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
