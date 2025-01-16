import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";

const translations = {
  en: {
    back: "Back",
    productVariantCreation: "Product Variant Creation",
    productAttributes: "Product Attributes",
    color: "Color",
    style: "Style",
    size: "Size",
    edgeDesign: "Edge Design",
    unselected: "Unselected",
    test: "Test",
  },
  ar: {
    back: "عودة",
    productVariantCreation: "إنشاء خيارات المنتج",
    productAttributes: "سمات المنتج",
    color: "اللون",
    style: "النمط",
    size: "الحجم",
    edgeDesign: "تصميم الحواف",
    unselected: "غير محدد",
    test: "اختبار",
  },
  fr: {
    back: "Retour",
    productVariantCreation: "Création de variantes de produit",
    productAttributes: "Attributs du produit",
    color: "Couleur",
    style: "Style",
    size: "Taille",
    edgeDesign: "Conception des bords",
    unselected: "Non sélectionné",
    test: "Test",
  },
};

const Step3 = ({ previousStep }: { previousStep: () => void }) => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline
          size={25}
          className={`text-textSecondary ${
            language === "ar" ? "rotate-180" : ""
          }`}
        />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          {t.back}
        </Text>
      </div>
      <div>
        <Text className="text-xl md:text-2xl md:text-primary2" font={"bold"}>
          {t.productVariantCreation}
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <Text size={"xl"} font={"bold"}>
            {t.productAttributes}
          </Text>
          <div className="grid w-full grid-cols-1 gap-4 md:w-3/4 md:grid-cols-2">
            <div>
              <label htmlFor="SubCategory1">{t.color}</label>
              <select
                name="SubCategory1"
                id="SubCategory1"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.unselected}</option>
                <option value="1">{t.test}</option>
                <option value="2">{t.test}</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory2">{t.style}</label>
              <select
                name="SubCategory2"
                id="SubCategory2"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.unselected}</option>
                <option value="1">{t.test}</option>
                <option value="2">{t.test}</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory3">{t.size}</label>
              <select
                name="SubCategory3"
                id="SubCategory3"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.unselected}</option>
                <option value="1">{t.test}</option>
                <option value="2">{t.test}</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory4">{t.edgeDesign}</label>
              <select
                name="SubCategory4"
                id="SubCategory4"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.unselected}</option>
                <option value="1">{t.test}</option>
                <option value="2">{t.test}</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;
