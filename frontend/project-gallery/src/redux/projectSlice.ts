import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

export interface ProjectsState {
  value: any[],
  isLoading: boolean
}

const initialState: ProjectsState = {
  value: [{}, {}],
  isLoading: false
}

export const fetchAllProjects = createAsyncThunk(
  'projects/getAll',
  async (userId, thunkAPI) => {
    const response = await fetch('https://us-central1-mono-container-project.cloudfunctions.net/api/projects').then(response => response.json());
    return response;
  }
)

export const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllProjects.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    }),
    builder.addCase(fetchAllProjects.pending, (state, action) => {
      state.isLoading = true;
    })
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = projectsSlice.actions;

export default projectSlice.reducer;