import {
  closeModal,
  modalType,
  toggleNavigation,
  updateFilterAndState,
  updateModalAndState,
  updateNavigation,
  updateRouteBlock,
} from "@slices/ui.slice";
import { useAppDispatch, useAppSelector } from "./redux-hook";
import { filterContentType } from "@components/SideFilter";

export const useUi = () => {
  const state = useAppSelector((state) => state.userInterface);
  const dispatch = useAppDispatch();

  const toggleNav = () => dispatch(toggleNavigation());
  const setNav = (val: boolean) => dispatch(updateNavigation(val));
  const hideModal = () => dispatch(closeModal());
  const updateModal = (val: { type: modalType; state: any }) =>
    dispatch(updateModalAndState(val));
  const updateFilter = (val: { type: filterContentType | false; state: any }) =>
    dispatch(updateFilterAndState(val));
  const setRouteBlock = (val: boolean) => dispatch(updateRouteBlock(val));

  return {
    ...state,
    toggleNav,
    setNav,
    hideModal,
    updateModal,
    updateFilter,
    setRouteBlock,
  };
};
