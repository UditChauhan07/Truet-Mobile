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
          pageLanguage: "en", // ✅ Default English Set Kiya
          includedLanguages: "en,es,it",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        const selectBox = document.querySelector(".goog-te-combo");
        if (selectBox) {
          // ✅ Default English Select Karna
          selectBox.value = "en";
          selectBox.dispatchEvent(new Event("change")); // Google ko notify karna

          // ✅ Language Mapping (ESP → ENG)
          const languageMap = {
            English: "ENG",
            Spanish: "ESP",
            Italian: "ITA",
          };

          Array.from(selectBox.options).forEach((option) => {
            if (languageMap[option.text]) {
              option.text = languageMap[option.text];
            }
          });

          // ✅ Jo label dropdown ke saath dikh raha hai usko bhi ENG karna
          const label = document.querySelector(".goog-te-gadget-simple span");
          if (label) {
            label.innerText = "ENG";
          }

          const wrapper = selectBox.parentElement;
          if (wrapper) {
            wrapper.style.position = "relative";

            selectBox.style.appearance = "none";
            selectBox.style.background = "none";
            selectBox.style.padding = "5px 30px 5px 10px";
            selectBox.style.cursor = "pointer";
            selectBox.style.fontSize = "14px";

            // ✅ Custom Logo Insert Karna
            const icon = document.createElement("img");
            icon.src = "svg/languageLogo.svg"; // 👈 Yahan apni image ka path set karein
            icon.alt = "Language Icon";
            icon.style.position = "absolute";
            icon.style.right = "5px";
            icon.style.top = "50%";
            icon.style.transform = "translateY(-50%)";
            icon.style.pointerEvents = "none"; // Click effect na ho
            icon.style.width = "30px";
            icon.style.height = "30px";

            wrapper.appendChild(icon);
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
