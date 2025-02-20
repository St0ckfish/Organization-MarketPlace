/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";

function ScholarshipDetails() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
    <>
      <Container ml={false} mr={false} mt={false}>
        <Box rounded="none" style={{ height: `calc(100vh - 100px)` }}>
          <div
            className={`flex items-center ${language === "ar" ? "mr-60" : "ml-60"}`}
          >
            <div className="relative flex w-full flex-col items-center lg:w-1/2">
              <img
                src="/images/meeting.jpg"
                alt={t.photo}
                className="rounded-lg"
              />
              <div
                className={`absolute ${language === "ar" ? "-left-96" : "-right-96"} top-[40px] h-[100%] w-4/5 rounded-xl bg-bgPrimary p-4 shadow-md`}
              >
                <Text font={"bold"} size={"xl"}>
                  {t.scholarship}
                </Text>
                <Text
                  size={"sm"}
                  color={"gray"}
                  font={"medium"}
                  className="mt-2"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  assumenda tempore labore blanditiis consequatur perferendis
                  inventore, cumque consequuntur maxime atque culpa excepturi
                  quia accusantium veniam nihil eveniet nobis fuga quibusdam?
                  Asperiores rerum porro aliquam perferendis eveniet aliquid
                  assumenda, provident magnam dolor voluptatem maxime doloribus
                  debitis qui labore illum animi consequatur ipsam excepturi
                  voluptates quam quis cum. Repudiandae modi corporis eveniet.
                  Eligendi enim tenetur voluptatem quod quidem sed! Fugiat, nisi
                  est possimus voluptatum vero temporibus maxime nostrum odio?
                  Eaque, numquam accusamus doloremque deleniti sapiente earum
                  corporis ex placeat! Expedita, nesciunt architecto?
                  Accusantium debitis corrupti atque voluptatem et molestias,
                  hic dolor, facere expedita sequi aspernatur? Praesentium,
                  dolore totam. Eius assumenda blanditiis suscipit repudiandae
                  ipsa aperiam. Ullam fuga corrupti, omnis eius quibusdam
                  debitis. Consequatur eos eaque dolor modi unde odio dicta
                  laborum similique cupiditate dignissimos ducimus dolores
                  aperiam fugit facere fugiat amet nam assumenda, voluptatibus
                  excepturi rem. Possimus libero eum corrupti officiis nemo?
                  Doloremque dolores beatae architecto commodi qui non debitis
                  ut, placeat dolorum animi, suscipit sequi sunt magnam rerum ad
                  excepturi labore illum accusantium quod officiis reiciendis.
                  Fugiat, asperiores minima? Delectus, ipsam? Voluptatum
                  voluptates ut soluta in, accusamus modi molestiae consequatur,
                  delectus labore debitis neque nisi obcaecati sint cupiditate
                  qui amet repellat a distinctio sequi officiis minus. Dolor
                  esse quo dolorem dicta. Dolore est libero dolorum neque
                  ratione perferendis tempore perspiciatis iusto iste
                  voluptates. Officiis laudantium qui sint vitae cupiditate quis
                  laboriosam quasi iure dolore quibusdam, iste facilis optio
                  modi nesciunt nemo? Doloremque itaque totam natus commodi ad
                  dolor ullam. Totam reiciendis culpa reprehenderit nostrum
                  consequuntur est, maxime officiis ad, recusandae repudiandae
                  molestias fuga nisi earum harum adipisci quae quasi error
                  voluptatibus? Minima voluptas ad consequuntur officiis
                  voluptatibus rerum velit eum laboriosam adipisci dolores.
                  Voluptatem sunt quaerat ab deserunt fugiat eius illo
                  obcaecati, rerum unde dicta pariatur accusamus iusto, aut
                  numquam voluptatum.
                </Text>
                <a
                  href="/scholarship-details"
                  className="mt-4 inline-flex items-center font-bold text-primary hover:underline"
                >
                  {t.enrollmentNow}{" "}
                  {language == "ar" ? (
                    <FaArrowLeft size={22} className="mx-1" />
                  ) : (
                    <FaArrowRight size={22} className="mx-1" />
                  )}
                </a>
              </div>
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
}

export default ScholarshipDetails;
