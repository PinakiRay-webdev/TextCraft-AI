import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import Footer from "../../components/Footer/Footer";
import Navbar from "../Home/Components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSummary } from "../../functions/Summary.mjs";

const Summary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm();

  const [summaryText, setSummaryText] = useState("");
  const [outputBoxVisibility, setOutputBoxVisibility] = useState('hidden')

  const generateSummary = async (data) => {
    toast.loading("Generating...", { theme: "dark" });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    try {
      const res = await createSummary(data.paragraph);
      toast.dismiss();
      toast.success("Generated!!!", { theme: "dark" });
      setSummaryText(res);
      setOutputBoxVisibility('block')
    } catch (err) {
      toast.dismiss();
      toast.error(err.message, { theme: "dark" });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summaryText);
    toast.success("copied to clipboard!!", { theme: "dark" });
  };

  const handleReset = () =>{
    setSummaryText("");
    setOutputBoxVisibility('hidden')
    reset()
  } 

  return (
    <div>
      <Navbar />
      <main>
        <section
          id="heading"
          className="w-[60%] mx-auto text-center py-12 h-[18rem]"
        >
          <h1 className="font-semibold text-5xl">
            Tired of Long Paragraphs? Let AI Instantly Summarize and Save You
            Time!
          </h1>
        </section>

        <section className="w-[60%] mx-auto px-22 my-8">
          <article id="input=form">
            <form
              onSubmit={handleSubmit(generateSummary)}
              className="flex items-start gap-5"
            >
              <fieldset className="border p-1 rounded w-full">
                <legend className="px-1 mx-1 font-semibold">Paragraph</legend>
                <textarea
                  {...register("paragraph", {
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  })}
                  placeholder="Paste your paragraph here"
                  className="w-full outline-none px-2 h-auto"
                />
              </fieldset>
              <button
                type="submit"
                className="bg-purple-800 px-6 py-1 mt-4 rounded text-white cursor-pointer"
              >
                Generate
              </button>
            </form>
          </article>

          {summaryText && (
            <section>
              <article
                id="summary"
                className={`${outputBoxVisibility} mt-8 w-[82%] bg-slate-100 p-5 rounded-2xl`}
              >
                <header className="flex gap-4 justify-end">
                  <p
                    onClick={copyToClipboard}
                    className="text-slate-600 cursor-pointer"
                    title="Copy to clipboard"
                  >
                    <IoCopy />
                  </p>
                  <p className="text-slate-600 cursor-pointer" title="Download">
                    <RxDownload />
                  </p>
                </header>
                <p className="whitespace-pre-line mt-8">{summaryText}</p>
              </article>
              <article id="action-buttons" className="w-[82%] mt-3 mx-3 flex gap-4 justify-center">
              <button onClick={handleReset} className="bg-red-500 px-4 text-white rounded cursor-pointer" >Reset</button>
              <button>Generate notes</button>
              </article>
            </section>
          )}
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Summary;
