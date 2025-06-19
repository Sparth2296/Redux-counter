import { legacy_createStore } from "redux";

import { creatReducre } from "./Reducre";

export const store = legacy_createStore(creatReducre)