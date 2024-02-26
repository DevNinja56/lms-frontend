import {
  completeQuize,
  updateData,
  updateQuize,
  updateQuizeType,
} from "@slices/quize.slice";
import { useAppDispatch, useAppSelector } from "./redux-hook";
import {
  fetchQuizzesQuestion,
  fetchQuizzesQuestionArgs,
} from "@actions/fetch-quizzes";
import { days_categoryType, quiZeQuestionType } from "@utils/Types";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { sendParams } from "@utils/link-param";
import { useUi } from "./user-interface";
import { useCourse } from "./course";
import { toast } from "react-hot-toast";
import { fetchRequest } from "@utils/axios/fetch";
import { API_ENDPOINTS } from "@constant/api-endpoints";
import { ROUTES } from "@route/constants.route";
import { useSubjectNavigation } from "./subject-nav";
import { useGetDayContentQuery } from "@slices/fetch-all-queries.slice";

export const useQuize = () => {
  const { course } = useCourse();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.quizzes);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { hideModal, setRouteBlock } = useUi();
  const { subject, week } = useSubjectNavigation();

  const fetchQuizzes = ({ path }: fetchQuizzesQuestionArgs) =>
    dispatch(
      fetchQuizzesQuestion({
        path,
        id: pathname,
      })
    );
  const setQuize = (val: updateQuizeType) => dispatch(updateQuize(val));
  const setQuizeData = (val: quiZeQuestionType[]) => dispatch(updateData(val));

  const [param] = useSearchParams();
  const type = param.get("type") as days_categoryType;
  const { content: id = "" } = useParams();
  const { refetch } = useGetDayContentQuery(
    API_ENDPOINTS.DAY_CONTENT[type]?.replace(":id", id)
  );

  const finishQuize = async () => {
    let userScore: number = 0;
    const result = state?.data.map((q: quiZeQuestionType) => {
      if (q.isCorrect) userScore++;
      return {
        questionId: q.id,
        userAnswer: q.answer ?? 0,
      };
    });

    await toast.promise(
      fetchRequest({
        url: API_ENDPOINTS.QUIZE.SUBMIT,
        type: "post",
        body: {
          quizId: state.id,
          result,
          userScore,
          userTime: 0,
          courseId: course.id,
          resourceType: "submission",
        },
      }),
      {
        loading: "Submitting Quiz...",
        success: () => {
          refetch();
          navigate(
            ROUTES.SUBJECTS_WEEKS_DAY.replace(":subject", subject.name)
              .replace(":week", week.name.replaceAll(" ", "-"))
              .replace(":content", state.id ?? "") +
              sendParams({ type: "quizzes", attempt: true })
          );
          return "Quiz submitted successfully";
        },
        error: "Error while submitting quiz",
      }
    );

    dispatch(completeQuize());
    setRouteBlock(false);
    hideModal();
  };

  return {
    ...state,
    setQuize,
    fetchQuizzes,
    setQuizeData,
    finishQuize,
  };
};
