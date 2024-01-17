import AddToCart from "@pages/AddToCart/index";
import ResetPassword from "@pages/Auth/Reset-Password";
import QuizzesDetails from "@pages/Quizzes/QuizzesDetails";
import QuizzesTest from "@pages/Quizzes/QuizzesTest";
import { lazy } from "react";
const Home = lazy(() => import("@pages/Home"));
const SignIn = lazy(() => import("@pages/Auth/SignIn"));
const SignUp = lazy(() => import("@pages/Auth/SignUp"));
const Otp = lazy(() => import("@pages/Auth/Otp"));
const Notifications = lazy(() => import("@pages/Notifications"));
const Profile = lazy(() => import("@pages/Profile"));
const Subscription = lazy(() => import("@pages/Subscription"));
const Settings = lazy(() => import("@pages/Settings"));
const Invoices = lazy(() => import("@pages/Invoices"));
const Subjects = lazy(() => import("@pages/Subjects"));
const Quizzes = lazy(() => import("@pages/Quizzes"));
const AssignTest = lazy(() => import("@pages/AssignTest"));
const Support = lazy(() => import("@pages/Support"));
const LiveLectures = lazy(() => import("@pages/LiveLectures"));
const Leaderboard = lazy(() => import("@pages/Leaderboard"));
const Notes = lazy(() => import("@pages/Notes"));
const Bookmarks = lazy(() => import("@pages/Bookmarks"));
const Feedback = lazy(() => import("@pages/Feedback"));
const Stats = lazy(() => import("@pages/Stats"));
const SingleSubject = lazy(() => import("@pages/Subjects/SubjectWeek"));
const SubjectWeeksDay = lazy(() => import("@pages/Subjects/SubjectWeeksDay"));
const CourseDetail = lazy(() => import("@pages/Courses/CoursesDetail/index"));
const FAQ = lazy(() => import("@pages/FAQ/index"));
const Checkout = lazy(() => import("@pages/Checkout/index"));

export const DASHBOARD_ROUTE = "/dashboard";
export const COURSE_ROUTE = "/course";
export const ROUTES = {
  SIGN_IN: "/",
  SIGN_UP: "/signup",
  OTP: "/otp",
  RESET_PASSWORD: "/reset-password",
  HOMEPAGE: DASHBOARD_ROUTE,
  NOTIFICATION: DASHBOARD_ROUTE + "/notification",
  PROFILE: DASHBOARD_ROUTE + "/profile",
  SUBSCRIPTION: DASHBOARD_ROUTE + "/subscription",
  SETTINGS: DASHBOARD_ROUTE + "/settings",
  INVOICES: DASHBOARD_ROUTE + "/invoices",
  SUBJECTS: COURSE_ROUTE + "/subjects",
  SUBJECTS_WEEK: COURSE_ROUTE + "/:subject/:week",
  SUBJECTS_WEEKS_DAY: COURSE_ROUTE + "/:subject/:week/:content",
  QUIZZES: COURSE_ROUTE + "/quizzes",
  QUIZZES_TEST: COURSE_ROUTE + "/quizzes/:id",
  QUIZZES_DETAILS: COURSE_ROUTE + "/quizzes/attempted/:id",
  ASSIGN_TEST: COURSE_ROUTE + "/assign-test",
  SUPPORT: COURSE_ROUTE + "/support",
  LIVE_LECTURES: COURSE_ROUTE + "/live-lectures",
  STATS: COURSE_ROUTE + "/states",
  LEADERBOARD: COURSE_ROUTE + "/leaderboard",
  NOTES: COURSE_ROUTE + "/notes",
  BOOKMARKS: COURSE_ROUTE + "/bookmarks",
  FEEDBACK: COURSE_ROUTE + "/feedback",
  COURSE_DETAIL: COURSE_ROUTE + "/courseDetail",
  FAQ: COURSE_ROUTE+ "/faq",
  CHECKOUT: COURSE_ROUTE+ "/checkout",
  ADDTOCART: COURSE_ROUTE+ "/addtocart"
};

export const ALL_ROUTES = [
  { path: ROUTES.SIGN_IN, element: SignIn },
  { path: ROUTES.SIGN_UP, element: SignUp },
  { path: ROUTES.OTP, element: Otp },
  { path: ROUTES.RESET_PASSWORD, element: ResetPassword },
  { path: ROUTES.HOMEPAGE, element: Home, auth: true },
  { path: ROUTES.NOTIFICATION, element: Notifications, auth: true },
  { path: ROUTES.PROFILE, element: Profile, auth: true },
  { path: ROUTES.SUBSCRIPTION, element: Subscription, auth: true },
  { path: ROUTES.SETTINGS, element: Settings, auth: true },
  { path: ROUTES.INVOICES, element: Invoices, auth: true },
  { path: ROUTES.SUBJECTS, element: Subjects, auth: true },
  { path: ROUTES.SUBJECTS_WEEK, element: SingleSubject, auth: true },
  { path: ROUTES.SUBJECTS_WEEKS_DAY, element: SubjectWeeksDay, auth: true },
  { path: ROUTES.QUIZZES, element: Quizzes, auth: true },
  { path: ROUTES.QUIZZES_TEST, element: QuizzesTest, auth: true },
  { path: ROUTES.QUIZZES_DETAILS, element: QuizzesDetails, auth: true },
  { path: ROUTES.ASSIGN_TEST, element: AssignTest, auth: true },
  { path: ROUTES.SUPPORT, element: Support, auth: true },
  { path: ROUTES.LIVE_LECTURES, element: LiveLectures, auth: true },
  { path: ROUTES.STATS, element: Stats, auth: true },
  { path: ROUTES.LEADERBOARD, element: Leaderboard, auth: true },
  { path: ROUTES.NOTES, element: Notes, auth: true },
  { path: ROUTES.BOOKMARKS, element: Bookmarks, auth: true },
  { path: ROUTES.FEEDBACK, element: Feedback, auth: true },
  { path: ROUTES.COURSE_DETAIL, element: CourseDetail, auth: true},
  { path: ROUTES.FAQ, element: FAQ, auth: true},
  { path: ROUTES.CHECKOUT, element: Checkout, auth: true },
  { path: ROUTES.ADDTOCART, element: AddToCart, auth: true}
];
