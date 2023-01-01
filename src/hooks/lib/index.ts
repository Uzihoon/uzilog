import { RootState } from 'store/redux';
import { useSelector } from 'react-redux';
import { TagKey } from 'store/redux/tag';
import { StatusKey } from 'store/redux/status';
import { PostKey } from 'store/redux/post';

export function useTagGet<T extends TagKey>(item: T) {
  return useSelector((state: RootState) => state.tag[item]);
}

export function useStatusGet<T extends StatusKey>(item: T) {
  return useSelector((state: RootState) => state.status[item]);
}

export function usePostGet<T extends PostKey>(item: T) {
  return useSelector((state: RootState) => state.post[item]);
}
