import { useDispatch } from "react-redux";
import { useCallback } from "react";
import * as StatusActions from "store/redux/status";

export default function useStatusActions() {
  const dispatch = useDispatch();

  const onFinish = useCallback(() => dispatch(StatusActions.setPending()), [
    dispatch
  ]);
  const onPending = useCallback(() => dispatch(StatusActions.setFinish()), [
    dispatch
  ]);

  return { onFinish, onPending };
}
