export enum navTypes {
  "subjects_list",
  "weeks_list",
  "days_list",
}

export enum subjectNavTypes {
  "subject",
  "quiz",
  "quiz_result",
}

export type course = {
  name: string | null;
};

export type days_categoryType =
  | "readings"
  | "videos"
  | "quizzes"
  | "assignments";

export enum days_category {
  "video",
  "reading",
  "quizze",
  "assignment",
}

export type notesType = {
  duration: string;
  id: string;
  message: string;
  readingId: readings;
  videoId: videos;
  userId: userType;
};

export interface quiZeQuestionType {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  answer?: number;
  isCorrect?: boolean;
}

export type userAction = {
  user: {
    name: string;
    id: string;
  };
  report: null;
  notes: [];
  bookmark: null;
  review: {
    rating: number;
    feedback: string;
    id: string;
  };
  markAsCompleted: boolean | null;
  submission: {
    id: string;
    result: {
      questionId: quiZeQuestionType;
      userAnswer: string | number;
    }[];
  };
  id: string;
};

export type readings = {
  name: string;
  description: string;
  totalRating: number;
  avgRating: number;
  userActions: userAction[];
  id: string;
};
export type videos = {
  name: string;
  link: string;
  totalRating: number;
  avgRating: number;
  reportId: [];
  notesId: [];
  bookmarkId: [];
  reviewId: [];
  markAsCompleted: [];
  createdAt: string;
  updatedAt: string;
  id: string;
};

export interface quizeType {
  avgRating: number;
  course: courseType;
  day: dayType;
  description: string;
  id: string;
  name: string;
  questions: quiZeQuestionType[];
  subject: SubjectType;
  totalRating: number;
  userActions: userAction[];
  totalQuestions: number;
  time: number;
}
export interface assignments extends quizeType {}

export interface daysContent
  extends assignments,
    quizeType,
    videos,
    readings {}

export type dayType = {
  id: string;
  name: string;
  readingsId: readings[];
  videosId: videos[];
  quizzesId: quizeType[];
  assignmentsId: assignments[];
  [key: string]: any;
};

export type WeekType = {
  id: string;
  name: string;
  reading: number;
  video: number;
  quiz: number;
  assignment: number;
};

export type SubjectType = {
  id: string;
  name: string;
  reading: number;
  video: number;
  quiz: number;
  assignment: number;
  weeksId: WeekType[];
};

export type courseType = {
  id: string;
  avgRating: number;
  endDate: string;
  from: string;
  image: string;
  name: string;
  totalRating: number;
  userActions: {
    user: {
      name: string;
      id: string;
    };
    review: {
      rating: number;
      feedback: string;
      id: string;
    };
  }[];
  short_desc: string;
  full_desc: string;
  tags: string[];
  requirements: string[];
  language: string[];
  certificate: null;
  fullTime: true;
  price: number;
  duration: number;
  skillLevel: string;
  subjects: SubjectType[];
  enrolledStudents: userType[];
};

export type signUpForm = {
  email: string;
  name: string;
  password: string;
  phone_number: string;
};

export type signInForm = {
  email: string;
  password: string;
  phone_number?: string;
};

export type forgotForm = {
  email: string;
};

export type resetForm = {
  password: string;
  c_password: string;
  email?: string;
};
export type changePasswordForm = {
  password: string;
  new_password: string;
};

export interface userType {
  name: string;
  email: string;
  dob: null;
  gender: null;
  avatar: string | null;
  documents: [];
  timezone: null;
  address: null;
  password: string;
  phone_number: string;
  createdAt: string;
  updatedAt: string;
  sms_otp: string;
  sms_otp_created_at: string;
  sms_otp_expires_at: string;
  id: string;
}

export interface bookmarkType {
  userId: {
    name: string;
    id: string;
  };
  dayId: {
    name: string;
    id: string;
  };
  weekId: {
    name: string;
    id: string;
  };
  subjectId: {
    name: string;
    id: string;
  };
  videoId: {
    name: string;
    link: string;
    id: string;
  };
  readingId: {
    id: string;
    name: string;
    description: string;
  };
  id: string;
}

export type quizeResult = {
  quizId: quizeType;
  userId: userType;
  result: {
    questionId: quiZeQuestionType;
    userAnswer: number;
  }[];
  userScore: number;
  userTime: number;
  id: string;
};
