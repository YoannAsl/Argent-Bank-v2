import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userAPI from '../../app/userAPI';

interface AuthState {
	isLoggedIn: boolean;
	isLoggingIn: boolean;
	error: string | null | unknown;
}

const initialState: AuthState = {
	isLoggingIn: false,
	isLoggedIn: false,
	error: null,
};

export const request = createAsyncThunk(
	'auth/request',
	async ({ email, password }: { email: string; password: string }) => {
		const res = await userAPI.post('/login', { email, password });
		return res.data;
	}
);

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout(state) {
			localStorage.setItem('token', '');
			return (state = initialState);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(request.fulfilled, (state, { payload }) => {
			state.isLoggedIn = true;
			state.isLoggingIn = false;
			state.error = null;
			localStorage.setItem('token', payload.body.token);
		});
		builder.addCase(request.rejected, (state, { error }) => {
			state.isLoggingIn = false;
			state.error = error.message;
		});
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
