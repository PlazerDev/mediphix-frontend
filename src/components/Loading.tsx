import { PropagateLoader } from "react-spinners";

function Loading() {
  return (
    <div className="flex-grow inline-flex flex-col gap-8 justify-center items-center">
      <PropagateLoader
        color="#FF7300"
        className="w-20 items-center justify-center"
      />
      <p className="text-mediphix_text_c text-center">Loading, Please Wait</p>
    </div>
  );
}

export default Loading;
