import { useLocation } from "react-router-dom";
import { UseQuery } from "./PostsTypes";

export const useQuery: UseQuery = () => {
  return new URLSearchParams(useLocation().search);
};
