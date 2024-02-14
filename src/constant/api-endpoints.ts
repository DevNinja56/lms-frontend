export const API_ENDPOINTS = {
  AUTH: {
    SIGNUP: "/auth/signup",
    SIGNIN: "/auth/signin",
    GET_USER: "/auth/get-user",
    VERIFY_OTP: "/auth/otp-verify",
    LOG_OUT: "/auth/logout",
    FORGOT_PASSWORD: "/auth/forgotPassword",
    RESET_PASSWORD: "/auth/reset-password",
  },
  USER: {
    PROFILE_IMAGE: "/user/upload-avatar/:id",
    UPDATE_PROFILE: "/user/:id",
    CHANGE_PASSWORD: "/user/change-password",
  },
  COURSES: "/course/user",
  GET_PAGINATED_COURSES: "/course",
  COURSE_BY_ID: "/course/:id",
  SUBJECT: "/subject/all/:id",
  DAY: "/weeks/all-days/:id",
  DAY_CONTENT: {
    readings: "/readings/:id",
    videos: "/video/:id",
    quizzes: "/quize/:id",
    assignments: "/assignment/:id",
  },
  USER_ACTION: {
    course: "/course/user-action/:id",
    readings: "/readings/user-action/:id",
    videos: "/video/user-action/:id",
    quizzes: "/quize/user-action/:id",
    assignments: "/assignment/user-action/:id",
  },
  QUIZE: {
    SUBJECT: "/quize/subject/:id",
    QUESTION: "/quize/:id?questions=true",
    SUBMIT: "/quize/submit",
    RESULT: "/quiz-submit/:id",
  },
  REVIEWS: {
    POST_REVIEW: "/review",
    GET_REVIEWS_BASE_OF_ID: "/review/get-reviews-by-resource-id-and-type"
  },
  BOOKMARK: "/bookmark/user",
  GET_PAGINATED_BOOKMARK: "/bookmark/filter-paginated",
  NOTE: "/note",
  NOTE_CONTENT: "/note/content/:id",
  GET_INSTRUCTOR_BASE_OF_COURSE: "/user/Instructors/:id",
};
