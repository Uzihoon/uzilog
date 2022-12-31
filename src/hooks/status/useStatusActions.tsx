import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import * as StatusActions from 'store/redux/status';
import { ILoginParam, Theme } from 'store/redux/status';

export default function useStatusActions() {
  const dispatch = useDispatch();

  const onFinish = useCallback(
    () => dispatch(StatusActions.setPending()),
    [dispatch]
  );
  const onPending = useCallback(
    () => dispatch(StatusActions.setFinish()),
    [dispatch]
  );

  const onCheckAdmin = useCallback(
    (param: any) => dispatch(StatusActions.checkAdmin(param)),
    [dispatch]
  );

  const onLogin = useCallback(
    (param: ILoginParam) => dispatch(StatusActions.login(param)),
    [dispatch]
  );
  const onLogout = useCallback(
    (param: any) => dispatch(StatusActions.logout(param)),
    [dispatch]
  );

  const onSetTheme = useCallback(
    (param: Theme) => dispatch(StatusActions.setTheme(param)),
    [dispatch]
  );

  return {
    onFinish,
    onPending,
    onLogin,
    onLogout,
    onCheckAdmin,
    onSetTheme,
  };
}
