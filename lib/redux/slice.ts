import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: any;
};

const getInitialState = (): InitialState => {
    const storedData = typeof window !== 'undefined' ? localStorage.getItem('data') : null;

    return {
        value: storedData ? JSON.parse(storedData) : [],
    };
};

const initialState = getInitialState();

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        createData: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
            let data = JSON.stringify(state.value);
            localStorage.setItem('data', data);
        },
    },
});

export const { createData } = dataSlice.actions;
export default dataSlice.reducer;
