import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension";
import { rootReducer } from "../reducers/rootReducer";

export const createAppStore = () => {
    let store = configureStore(
        rootReducer,
        composeWithDevTools()
    )
    
    return store;
}