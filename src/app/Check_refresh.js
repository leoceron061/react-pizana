import axios from "axios";
import { constants } from "../constants";
import store from "./main/ID_store/store";
  
async function Check_refresh() {
  const check = window.performance.getEntriesByType("navigation");
  const check_size = check.length;
  if (check_size > 0) {
    //check the most recent
    // console.log(check[check_size - 1].type);
    if (check[check_size - 1].type == "reload") {
      const token = localStorage.token;
      const result = await axios.get(
        `${constants.URLLOCAL}/login/verify-token`,
        { headers: { token: token } }
      );
      // console.log(result.data.answer);
      if (result.data.answer == true) {
        const { compname, comp_email, id, compacct, logo, settings } = result.data;
        const photo = logo;
        store.dispatch({ type: "LOG_IN", payload: { compname, comp_email, compacct, id, settings } });
        store.dispatch({ type: "PHOTO", payload: { photo } });
        // console.log(store.getState());
        return true
      } else {
        // console.log("kick user out there was an error with his token");
        localStorage.clear();
        return false
      }
    }
  }
  return true
}

export default Check_refresh;
