import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { SiFirebase, IoLogoVercel } from "react-icons/io5";
import { SiMongodb, SiNextdotjs } from "react-icons/si";

const brandsData = [
  {
    id: 4,
    name: "Firebase",
    href: "https://firebase.google.com",
    image: "/svg/firebase.svg",
  },
  {
    id: 1,
    name: "MongoDB",
    href: "https://mongodb.com",
    image: "/svg/next.svg",
  },
  {
    id: 2,
    name: "Nextjs",
    href: "https://nextjs.org",
    image: "/svg/github.svg",
  },

  {
    id: 5,
    name: "Github",
    href: "https://Github.com",
    image: "/svg/github.svg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16 mx-auto">
      <div className="container  border rounded-xl w-full ">
        <div className="-mx-20 flex flex-wrap w-full">
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light px-8 py-8 dark:bg-gray-dark sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
    </div>
  );
};

// const SingleBrand = ({ brand }) => {
//   const { href, src, name } = brand;
//   return (
//     <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
//       <a
//         href={href}
//         target="_blank"
//         rel="nofollow noreferrer"
//         className="flex-col justify-center items-center relative h-16 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
//       >
//         <Image src={src} alt={name} fill className=" dark:block w-full" />
//         <h1 className="text-white text-xl mr-5">{name}</h1>
//       </a>
//     </div>
//   );
// };
