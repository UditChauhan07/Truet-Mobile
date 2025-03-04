import { useEffect } from "react";

const LanguageChange = () => {
  useEffect(() => {
    if (!document.querySelector("#google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,es,it",
        },
        "google_translate_element"
      );

      // ✅ Placeholder text change karne ke liye wait karega
      setTimeout(() => {
        const selectBox = document.querySelector(".goog-te-combo");
        if (selectBox) {
          selectBox.firstChild.textContent = "English"; // Change Placeholder
        }
      }, 2000);
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element"></div>     
      <style>{`
        iframe.goog-te-banner-frame {
          display: none !important;
          visibility: hidden !important;
        }
      `}</style>
    </div>
  );
};

export default LanguageChange;