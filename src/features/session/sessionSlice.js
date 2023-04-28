import { createSlice } from '@reduxjs/toolkit'

export const session = createSlice({
    name: 'session',
    initialState: {
        loggedIn: false,
        sessionId: null,
        expiresAt: null,
        username: null
    },
    reducers: {
        // TODO: add signedUp reducer
        loggedIn: (state, action) => {
          // Check is var is whole object or single value
          state.loggedIn = action.payload
          // Add other attr
        },
        loggedOut: (state) => {
          // Test if initialState can be called instead of resetting values manually
          state.loggedIn = false
          state.sessionId = null
          state.expiresAt = null
          state.username = null
        },
    }
})

export const { loggedIn } = session.actions

export default session.reducer
