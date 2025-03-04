import { useEffect } from "react";

const LanguageChange = () => {
  useEffect(() => {
    // ✅ Force Google Translate to always use English
    document.cookie = "googtrans=/en/en; path=/; domain=" + window.location.hostname;
    localStorage.setItem("googtrans", "/en/en");
    sessionStorage.removeItem("googtrans");

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
          pageLanguage: "eng",
          includedLanguages: "en,es,it",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      setTimeout(() => {
        const selectBox = document.querySelector(".goog-te-combo");
        if (selectBox) {
          // ✅ Remove "Select Language" Option
          selectBox.querySelector("option:first-child")?.remove();

          // ✅ Force Dropdown to Show English
          selectBox.value = "eng";
          selectBox.dispatchEvent(new Event("change"));

          // ✅ Change Language Names
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

          // ✅ Custom Styling
          const wrapper = selectBox.parentElement;
          if (wrapper) {
            wrapper.style.position = "relative";
            selectBox.style.appearance = "none";
            selectBox.style.background = "none";
            selectBox.style.padding = "5px 30px 5px 10px";
            selectBox.style.cursor = "pointer";
            selectBox.style.fontSize = "14px";

            // ✅ Add Custom Icon
            const icon = document.createElement("img");
            icon.src = "svg/languageLogo.svg";
            icon.alt = "Language Icon";
            icon.style.position = "absolute";
            icon.style.right = "2px";
            icon.style.top = "50%";
            icon.style.transform = "translateY(-50%)";
            icon.style.pointerEvents = "none";
            icon.style.width = "25px";
            icon.style.height = "25px";

            wrapper.appendChild(icon);
          }
        }
      }, 2000);
    };

    // ✅ Hide Google Translate Banner
    setTimeout(() => {
      const iframe = document.querySelector("iframe.goog-te-banner-frame");
      if (iframe) {
        iframe.style.display = "none";
      }
    }, 1000);
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
