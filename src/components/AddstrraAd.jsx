import { useEffect } from "react";

const AddstrraAd = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl27437680.profitableratecpm.com/18/01/20/1801205b0a9f9d9d6de58829e28bc9f1.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="my-4">
      {/* Ad will load here */}
    </div>
  );
};

export default AddstrraAd;