import Reveal from "../components/Reveal";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_KEY,
        import.meta.env.VITE_EMAIL_TEMPLATE_KEY,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Message Sent!");
        },
        (error) => {
          alert(`FAILED: ${error.text}`);
        }
      );
  };

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Reveal>
        <h1 className="text-7xl text-neutral-300">Contact</h1>
      </Reveal>
      <div className="mx-auto w-1/3">
        <Reveal>
          <form ref={form} className="mt-4" onSubmit={sendEmail}>
            <div className="flex flex-col items-start">
              <label className="block mb-2 text-neutral-400 font-bold ml-2">
                Name:
              </label>
              <input
                className="w-full px-4 py-2 rounded-full bg-slate-400 outline-none focus:ring-0"
                placeholder="Your Name"
                type="text"
                name="from_name"
              />
            </div>

            <div className=" mt-4 flex flex-col items-start">
              <label className="block mb-2 text-neutral-400 font-bold ml-2">
                Email:
              </label>
              <input
                className="w-full px-4 py-2 rounded-full bg-slate-400 outline-none focus:ring-0"
                placeholder="Email"
                type="email"
                name="from_email"
              />
            </div>

            <div className=" mt-4 flex flex-col items-start">
              <label className="block mb-2 text-neutral-400 font-bold ml-2">
                Message:
              </label>
              <input
                className="w-full px-4 py-2 rounded-full bg-slate-400 outline-none focus:ring-0"
                placeholder="Message"
                type="text"
                name="message"
              />
            </div>
            <button
              className="mt-8 bg-green-500 w-full rounded-full font-semibold h-11"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
