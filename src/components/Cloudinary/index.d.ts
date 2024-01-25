import {FC, ReactElement} from "react";

interface cloudinaryComponentProps {
  cloudName: string;
  apiKey: string;
  apiSecret: string;
  children?: ReactElement | any;
}

declare const CloudinaryContext: FC<cloudinaryComponentProps>;

export default CloudinaryContext;
