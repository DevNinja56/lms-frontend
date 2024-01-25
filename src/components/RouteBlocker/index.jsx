import ReactRouterPrompt from "react-router-prompt";

const RouteBlocker = ({children, ...props}) => (
  <ReactRouterPrompt {...props}>
    {children}
  </ReactRouterPrompt>
);

export default RouteBlocker;
