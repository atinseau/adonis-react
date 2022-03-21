import {useContext} from "react";
import RouterContext from "../../app/Context/RouterContext";

export default function useRouter() {
  return useContext(RouterContext);
}
