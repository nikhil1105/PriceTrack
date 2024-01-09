import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
    value: any;
};

const getInitialState = (): InitialState => {
    const storedData = typeof window !== 'undefined' ? localStorage.getItem('pagedata') : null;

    return {
        value: storedData ? JSON.parse(storedData) : [],
    };
};

const initialState = getInitialState();

export const dataSlice = createSlice({
    name: 'pagedata',
    initialState,
    reducers: {
        createpageData: (state, action: PayloadAction<any>) => {
            state.value = action.payload;
            
            let data = JSON.stringify(state.value);
            localStorage.setItem('pagedata', data);
        },
    },
});

export const { createpageData } = dataSlice.actions;
export default dataSlice.reducer;
