import { userType } from "@utils/Types";

export const getAvatar = (user: userType, size: number = 450) => {
  if (user.avatar === null) {
    if (user.gender === "female") {
      return "/images/profile/female.png";
    } else {
      return "/images/profile/male.png";
    }
  }
  return user.avatar.replace("/upload/", `/upload/w_${size}/`);
};
