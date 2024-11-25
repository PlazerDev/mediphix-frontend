import { PropagateLoader } from "react-spinners";

interface LoadingProps {
  footer: boolean;
}

function Loading({ footer }: LoadingProps) {
  return (
    <div className="flex-grow inline-flex flex-col gap-8 justify-center items-center bg-transparent">
      <PropagateLoader
        color="#FF7300"
        className="w-20 items-center justify-center"
      />
      {footer === true ? (
        <p className="text-mediphix_text_c text-center">Loading, Please Wait</p>
      ) : null}
    </div>
  );
}

export default Loading;
