import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import listenerMiddleware from './listener'

export const store = configureStore({
    reducer: {
        app: reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(listenerMiddleware.middleware)
})