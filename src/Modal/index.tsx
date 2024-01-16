import React from "react";
import Modal from "@components/Modal";
import { useUi } from "@hooks/user-interface";
import { modalType } from "@slices/ui.slice";
import ChangePassword from "./ChangePassword.modal";
import RatingModal from "./Rating.modal";
import OtpModal from "./Otp.modal";
import ForgotModal from "./Forgot.modal";
import UpdateProfile from "./UpdateProfile.modal";
import TeachersSupport from "./TeachersSupport";
import NoteDelete from "./NoteDelete.modal";
import BookMarkedDelete from "./BookmarkedDelete.modal";
import SubmitQuize from "./SubmitQuize.modal";
import DocumentModal from "./ProfileDocumentUpload.modal";
import ReportModal from "./Report.modal";

const ModalWraper = () => {
  const { modal } = useUi();

  const AllModal = {
    [modalType.none]: <></>,
    [modalType.change_password]: <ChangePassword />,
    [modalType.rating]: <RatingModal />,
    [modalType.otp]: <OtpModal />,
    [modalType.forgot]: <ForgotModal />,
    [modalType.profile_picture]: <UpdateProfile />,
    [modalType.submit_quize]: <SubmitQuize />,
    [modalType.teachers_support]: <TeachersSupport />,
    [modalType.note_delete]: <NoteDelete />,
    [modalType.bookmarked_delete]: <BookMarkedDelete />,
    [modalType.profile_document_upload]: <DocumentModal />,
    [modalType.report]: <ReportModal />,
  };

  return (
    <>
      {modal && (
        <Modal>
          <>{AllModal[modal]}</>
        </Modal>
      )}
    </>
  );
};

export default ModalWraper;
