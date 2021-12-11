import {combineReducers, createStore, } from "redux";
import {ProfileReduce} from "./Profile-reduce";
import {DialogReduce} from "./Dialog-reduce";
import {SidebarReduce} from "./Sidebar-reduce";


let reducers = combineReducers({
    ProfilePage:ProfileReduce,
    DialogPage:DialogReduce,
    SidebarReduce:SidebarReduce,
    Sidebar:SidebarReduce

})

export const store = createStore(reducers)
export type ReduxStoreType = typeof store
