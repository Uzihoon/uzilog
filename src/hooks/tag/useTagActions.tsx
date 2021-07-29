import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import * as TagActions from 'store/redux/tag';
import { ISetStore, ITag } from 'store/redux/tag';

export default function useTagActions() {
  const dispatch = useDispatch();

  const onSetData = useCallback(
    (param: ISetStore) => dispatch(TagActions.setData(param)),
    [dispatch]
  );

  const onGetTags = useCallback(() => dispatch(TagActions.getTags()), [
    dispatch
  ]);

  const onCreateTag = useCallback(
    (param: ITag) => dispatch(TagActions.createTag(param)),
    [dispatch]
  );

  return {
    onSetData,
    onGetTags,
    onCreateTag
  };
}
