import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
	isLoggedIn: boolean;
	isLoggingIn: boolean;
	error: string | null;
}

const initialState: AuthState = {
	isLoggingIn: false,
	isLoggedIn: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		request(state) {
			state.isLoggingIn = true;
		},
		success(state, action) {
			state.isLoggedIn = true;
			state.isLoggingIn = false;
		},
		failure(state, action) {
			state.isLoggingIn = false;
			state.error = 'error';
		},
	},
});

export const { request, success, failure } = authSlice.actions;
export default authSlice.reducer;
