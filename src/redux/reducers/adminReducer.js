import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: null,
  message: null,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    createCourseRequest: state => {
      state.loading = true;
    },
    createCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    createCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteCourseRequest: state => {
      state.loading = true;
    },
    deleteCourseSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteCourseFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    addLectureRequest: state => {
      state.loading = true;
    },
    addLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    addLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    deleteLectureRequest: state => {
      state.loading = true;
    },
    deleteLectureSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    deleteLectureFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    clearError: state => {
      state.error = null;
    },
    clearMessage: state => {
      state.message = null;
    },
  },
});

export const {
  createCourseRequest,
  createCourseSuccess,
  createCourseFail,
  deleteCourseRequest,
  deleteCourseSuccess,
  deleteCourseFail,
  addLectureRequest,
  addLectureSuccess,
  addLectureFail,
  deleteLectureRequest,
  deleteLectureSuccess,
  deleteLectureFail,
  clearError,
  clearMessage,
} = adminSlice.actions;
export default adminSlice.reducer;
