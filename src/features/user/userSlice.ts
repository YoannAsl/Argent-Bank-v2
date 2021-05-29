import { createSlice } from '@reduxjs/toolkit';

interface UserState {
	email: string;
	password: string;
	token: string;
	firstName: string;
	lastName: string;
}

const initialState: UserState = {
	email: '',
	password: '',
	token: '',
	firstName: '',
	lastName: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		getName(state) {},
		editName(state) {},
		error(state) {},
	},
});

export const { getName, editName, error } = userSlice.actions;
export default userSlice.reducer;
