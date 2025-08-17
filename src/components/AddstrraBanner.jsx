import { useEffect } from "react";

const AddstrraBanner = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl27437680.profitableratecpm.com/18/01/20/1801205b0a9f9d9d6de58829e28bc9f1.js"; // replace with my banner script
    script.type = "text/javascript";
    script.async = true;
    document.getElementById("ad-banner-container").appendChild(script);

    return () => {
      const container = document.getElementById("ad-banner-container");
      if (container) container.innerHTML = ""; // cleanup when unmount
    };
  }, []);

  return (
    <div id="ad-banner-container" className="my-4 text-center">
      {/* Adsterra Banner will load here */}
    </div>
  );
};


export default AddstrraBanner;