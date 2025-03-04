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
          pageLanguage: "eng", // Default English
          includedLanguages: "en,es,it",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        const selectBox = document.querySelector(".goog-te-combo");
        if (selectBox) {
          selectBox.value = "eng"; // Default English set
          selectBox.dispatchEvent(new Event("change")); 

          const languageMap = {
            Italian: "ITA",
            English: "ENG",
            Spanish: "ESP",
          };

          // "Select your language" ko hatane ke liye first option delete karein
          if (selectBox.options[0]?.text.includes("Select")) {
            selectBox.remove(0);
          }

          // Dropdown options rename karein
          Array.from(selectBox.options).forEach((option) => {
            if (languageMap[option.text]) {
              option.text = languageMap[option.text];
            }
          });

          const label = document.querySelector(".goog-te-gadget-simple span");
          if (label) {
            label.innerText = "ENG"; // Label bhi update karein
          }
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
