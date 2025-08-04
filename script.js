// Language Data
const translations = {
  en: {
      "header-title": "Welcome to Sidr Hair Care",
      "home-subtitle": "Natural Hair Care with Sidr Leaves",
      "home-description": "Discover the power of Sidr leaves for healthier, shinier, and stronger hair. Our organic products are free from harmful chemicals and perfect for all hair types.",
      "benefits-title": "Why Choose Sidr for Your Hair?",
      "benefit-1": "Promotes hair growth and reduces hair fall",
      "benefit-2": "Deeply cleanses scalp without chemicals",
      "benefit-3": "Strengthens hair roots and improves shine",
      "products-title": "Our Products",
      "contact-title": "Contact Us",
      "label-name": "Name:",
      "label-email": "Email:",
      "submit-button": "Submit",
      "footer-text": "© 2023 Sidr Hair Care. All rights reserved."
  },
  ar: {
      "header-title": "مرحباً بكم في عناية الشعر بالسدر",
      "home-subtitle": "عناية طبيعية للشعر باستخدام أوراق السدر",
      "home-description": "اكتشف قوة أوراق السدر للحصول على شعر أكثر صحة ولمعانًا وقوة. منتجاتنا العضوية خالية من المواد الكيميائية الضارة ومناسبة لجميع أنواع الشعر.",
      "benefits-title": "لماذا تختار السدر لشعرك؟",
      "benefit-1": "يحفز نمو الشعر ويقلل تساقطه",
      "benefit-2": "ينظف فروة الرأس بعمق بدون مواد كيميائية",
      "benefit-3": "يقوي جذور الشعر ويزيد اللمعان",
      "products-title": "منتجاتنا",
      "contact-title": "اتصل بنا",
      "label-name": "الاسم:",
      "label-email": "البريد الإلكتروني:",
      "submit-button": "إرسال",
      "footer-text": "© 2023 عناية الشعر بالسدر. جميع الحقوق محفوظة."
  }
};

// Function to Switch Language
function switchLanguage(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");

  for (let key in translations[lang]) {
      const element = document.getElementById(key);
      if (element) {
          element.textContent = translations[lang][key];
      }
  }
}

// Default Language

switchLanguage('ar');
