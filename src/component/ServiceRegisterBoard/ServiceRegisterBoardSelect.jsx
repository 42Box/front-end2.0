import { useParams } from "react-router-dom";

import ServiceRegisterBoardContent from "./ServiceRegisterBoardContent";
//import ServiceRegisterBoardNew from "./ServiceRegisterBoardNew";

const ServiceRegisterBoardSelect = () => {
  const params = useParams();
  const { id } = params;
  console.log("here");

  //   if (id === "new") {
  //     return <ServiceRegisterBoardNew />;
  //  }
  return <ServiceRegisterBoardContent id={id} />;
};

export default ServiceRegisterBoardSelect;
