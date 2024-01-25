import {
  completeQuize,
  updateData,
  updateQuize,
  updateQuizeType,
} from "@slices/quize.slice";
import {
  useAppDispatch,
  useAppSelector,
} from "./redux-hook";
import {
  fetchQuizzesQuestion,
  fetchQuizzesQuestionArgs,
} from "@actions/fetch-quizzes";
import {quiZeQuestionType} from "@utils/Types";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import {sendParams} from "@utils/link-param";
import {useUi} from "./user-interface";
import {toast} from "react-hot-toast";
import {fetchRequest} from "@utils/axios/fetch";
import {API_ENDPOINTS} from "@constant/api-endpoints";

export const useQuize = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(
    (state) => state.quizzes
  );
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {hideModal, setRouteBlock} = useUi();

  const fetchQuizzes = ({
    path,
  }: fetchQuizzesQuestionArgs) =>
    dispatch(
      fetchQuizzesQuestion({
        path,
        id: pathname,
      })
    );
  const setQuize = (val: updateQuizeType) =>
    dispatch(updateQuize(val));
  const setQuizeData = (
    val: quiZeQuestionType[]
  ) => dispatch(updateData(val));

  const finishQuize = () => {
    let userScore: number = 0;
    const result = state?.data.map(
      (q: quiZeQuestionType) => {
        if (q.isCorrect) userScore++;
        return {
          questionId: q.id,
          userAnswer: q.answer ?? 0,
        };
      }
    );
    fetchRequest({
      url: API_ENDPOINTS.QUIZE.SUBMIT,
      type: "post",
      body: {
        quizId: state.id,
        result,
        userScore,
        userTime: 0,
        type: "submission",
      },
    });

    dispatch(completeQuize());
    setRouteBlock(false);
    hideModal();
    toast.success("Quiz will be submitted");
    navigate(
      state.id + sendParams({type: "quizzes"})
    );
  };

  return {
    ...state,
    setQuize,
    fetchQuizzes,
    setQuizeData,
    finishQuize,
  };
};
