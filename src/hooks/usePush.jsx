import { useNavigate } from "react-router-dom";

export const usePush = () => {
  const navigate = useNavigate();
  const handlePush = (value) => {
    navigate(`/${value}`, {
      replace: true,
    });
  };
  return [handlePush];
};
