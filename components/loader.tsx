import Lottie from "lottie-react";
import load from "../public/loading.json";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-[200px] h-[200px] relative">
        <Lottie animationData={load}/>
      </div>
      <p className="text-sm text-muted-foreground">
        I am Thinking...
      </p>
    </div>
  )
}

export default Loader
