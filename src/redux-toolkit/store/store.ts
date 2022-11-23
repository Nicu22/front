import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../slices/authSlice'
import { eventReducer } from '../slices/eventSlice1'
// ...

export const store = configureStore({
  reducer: {
    auth: authReducer,
    event: eventReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch