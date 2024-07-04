"use client";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
import Link from "next/link";
import { buttonVariants } from "../../ui/button";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    /* you'll need the secret key to send emails (contact me for access)
     you can get your own version of it  by signing up at https://www.emailjs.com/
    */
    emailjs.init("BC8sGNr9RmNvoZTJW");
    emailjs
      .send("service_l7fduua", "template_wdfz5vk", data)
      .then(function (response) {
        if (response.status == 200) {
          toast.success("Thanks for joining our waitlist!", {
            description:
              "We'll keep you informed and notify you once we launch.",
          });
        }
      });
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28 md:mx-[15%] "
    >
      <div className="mb-12 rounded-sm bg-white dark:bg-inherit px-8 py-11 shadow-three dark:sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
        <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
          Got a feedback? Let us know! We'd love to hear from you.
        </h2>
        <p className="mb-12 text-base font-medium text-body-color">
          Our support team will get back to you ASAP via email.
        </p>
        <form>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4">
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Enter your Message"
                  className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                ></textarea>
              </div>
            </div>
            <div className="w-full px-4">
              <button className={buttonVariants()}>Send feedback</button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default Contact;

{
  /* <>
      <div className="left-1.5 top-3.5 fixed cursor-pointer m-5/2 p-0 border-none rounded-full z-30">
        <Link
          href="/"
          className="left-3 top-3 fixed cursor-pointer m-5/2 p-3 border-none rounded-full z-30 bg-black"
        >
          <GoArrowLeft />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:my-16 my-10 mx-auto max-w-lg "
      >
        <div className="flex flex-wrap mx-2 md:-mx-3 mb-6 items-start">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="name"
            >
              firstName
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 border text-gray-700 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Lokmane Elhakim"
              {...register("firstName")}
            />
            <p className="text-xs italic"></p>
          </div>
        </div>
        <div className="flex flex-wrap mx-2 md:-mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email address
            </label>
            <input
              required
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="lokmaneelhakim@gmail.com"
              {...register("email")}
            />
          </div>
        </div>
        <div className="flex flex-wrap mx-2 md:-mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message / feedback (optional)
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              placeholder="Hi, I am reaching out as a potential customer of your platform. I recently learned about your SaaS offerings and am incredibly excited about the possibilities they hold."
              {...register("message")}
            ></textarea>
          </div>
        </div>
      </form>
      <Toaster richColors />
    </> */
}
