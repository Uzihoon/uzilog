import { RootState } from "store/redux";
import { useSelector } from "react-redux";
import { TagKey } from "store/redux/tag";

export function useTagGet(item: TagKey) {
  return useSelector((state: RootState) => state.tag[item]);
}
