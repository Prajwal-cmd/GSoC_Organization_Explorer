import {configureStore} from "@reduxjs/toolkit"
import OrgSlice from "../slice/OrgSlice"

const store = configureStore({
    reducer:{
        Org:OrgSlice,
    }
})

export default store 