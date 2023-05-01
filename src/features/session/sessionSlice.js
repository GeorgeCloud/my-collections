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
        authenticate: (state, action) => {
          // Check is var is whole object or single value
          state.loggedIn = true
          state.sessionId = action.payload.session_id // set to localStorage
          state.expiresAt = action.payload.expires_at['$date']
          state.username = action.payload.user_username
        },
        logout: (state) => {
          // Test if initialState can be called instead of resetting values manually
          state.loggedIn = false
          state.sessionId = null
          state.expiresAt = null
          state.username = null
        },
    }
})

export const { authenticate, logout } = session.actions

export default session.reducer
