import { useDispatch } from "react-redux";
import { useCallback } from "react";
import * as PostActions from "store/redux/post";
import { IPostInfo, IPost, ISetStore } from "store/redux/post";

export default function usePostActions() {
  const dispatch = useDispatch();

  const onGetList = useCallback(() => dispatch(PostActions.getList()), [
    dispatch
  ]);

  const onDeletePost = useCallback(
    (param: string) => dispatch(PostActions.deletePost(param)),
    [dispatch]
  );

  const onUpdatePost = useCallback(
    (param: IPostInfo) => dispatch(PostActions.updatePost(param)),
    [dispatch]
  );

  const onCreatePost = useCallback(
    (param: IPost) => dispatch(PostActions.createPost(param)),
    [dispatch]
  );

  const onGetPost = useCallback(
    (param: string) => dispatch(PostActions.getPost(param)),
    [dispatch]
  );

  const onSetStore = useCallback(
    (param: ISetStore) => dispatch(PostActions.setStore(param)),
    [dispatch]
  );

  const onSetEdit = useCallback(
    (param: string) => dispatch(PostActions.setEdit(param)),
    [dispatch]
  );

  return {
    onGetList,
    onDeletePost,
    onUpdatePost,
    onCreatePost,
    onGetPost,
    onSetStore,
    onSetEdit
  };
}
