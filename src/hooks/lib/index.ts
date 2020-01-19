import { RootState } from "store/redux";
import { useSelector } from "react-redux";
import { TagKey } from "store/redux/tag";
import { StatusKey } from "store/redux/status";
import { PostKey } from "store/redux/post";

export function useTagGet(item: TagKey) {
  return useSelector((state: RootState) => state.tag[item]);
}

export function useStatusGet(item: StatusKey) {
  return useSelector((state: RootState) => state.status[item]);
}

export function usePostGet(item: PostKey) {
  return useSelector((state: RootState) => state.post[item]);
}
