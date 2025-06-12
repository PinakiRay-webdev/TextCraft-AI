import { useState } from "react";
import { IoCopy } from "react-icons/io5";
import { RxDownload } from "react-icons/rx";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createNotes } from "../../functions/Notes.mjs";
import { createSummary } from "../../functions/Summary";
import html2pdf from "html2pdf.js";

const Summary = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const user = JSON.parse(localStorage.getItem("userCredentials"));

  const [summaryText, setSummaryText] = useState("");
  const [outputBoxVisibility, setOutputBoxVisibility] = useState("hidden");
  const [paragraph, setParagraph] = useState(""); //can be use later for multiple purposes

  const generateSummary = async (data) => {
    if (!user) {
      toast.error("Create an account first", { theme: "dark" });
      return;
    }
    toast.loading("Summarizing...", { theme: "dark" });
    try {
      setParagraph(data.paragraph); //set the entered paragraph
      const res = await createSummary(data.paragraph);
      toast.dismiss();
      toast.success("Summarized!!!", { theme: "dark" });
      setSummaryText(res);
      setOutputBoxVisibility("block");
    } catch (err) {
      toast.dismiss();
      toast.error(err.message, { theme: "dark" });
    }
  };

  const copyToClipboard = () => {
    const texts = document.createElement("div");
    texts.innerHTML = summaryText;
    const plainText = texts.innerText;
    navigator.clipboard.writeText(plainText);
    toast.success("copied to clipboard!!", { theme: "dark" });
  };

  const generateNotes = async () => {
    toast.loading("Generating notes...", { theme: "dark" });
    try {
      const res = await createNotes(paragraph);
      toast.dismiss();
      toast.success("Notes generated!!!", { theme: "dark" });
      setSummaryText(res);
    } catch (error) {
      toast.dismiss();
      toast.error(error.message, { theme: "dark" });
    }
  };

  const handleReset = () => {
    setSummaryText("");
    setOutputBoxVisibility("hidden");
    reset();
  };

  const downloadPdf = () => {
    if (!summaryText.trim()) return;

    const element = document.createElement("div");
    element.innerHTML = summaryText;

    const opt = {
      margin: 0.5,
      filename: "summary.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div>
      <Navbar />
<main>
  <section
    id="heading"
    className="w-full max-w-3xl mx-auto text-center py-8 px-2 md:py-12 md:px-0"
  >
    <h1 className="font-semibold text-3xl md:text-5xl">
      Tired of Long Paragraphs? Let AI Instantly Summarize and Save You
      Time!
    </h1>
  </section>

  <section className="w-full max-w-3xl mx-auto px-2 md:px-8 my-8">
    <article id="input=form">
      <form
        onSubmit={handleSubmit(generateSummary)}
        className="flex flex-col md:flex-row items-stretch md:items-start gap-4 md:gap-5"
      >
        <fieldset className={`border p-1 rounded w-full ${errors.paragraph ? "border-red-500" : ""}`}>
          <legend className={`px-1 mx-1 font-semibold ${errors.paragraph ? "text-red-500" : ""}`}>
            {errors.paragraph ? errors.paragraph.message : "Paragraph"}
          </legend>
          <textarea
            {...register("paragraph", {
              required: {
                value: true,
                message: "This field is required",
              },
            })}
            placeholder="Paste your paragraph here"
            className={`w-full min-h-[120px] outline-none px-2 py-2 resize-y ${errors.paragraph ? "border-red-500 text-red-500" : ""}`}
          />
        </fieldset>
        <button
          type="submit"
          className="bg-purple-800 px-6 py-2 rounded text-white cursor-pointer w-full md:w-auto"
        >
          Summarize
        </button>
      </form>
    </article>

    {summaryText && (
      <section>
        <article
          id="summary"
          className={`${outputBoxVisibility} mt-8 w-full bg-slate-100 p-4 md:p-5 rounded-2xl`}
        >
          <header className="flex gap-4 justify-end">
            <p
              onClick={copyToClipboard}
              className="text-slate-600 cursor-pointer"
              title="Copy to clipboard"
            >
              <IoCopy />
            </p>
            <p
              onClick={downloadPdf}
              className="text-slate-600 cursor-pointer"
              title="Download"
            >
              <RxDownload />
            </p>
          </header>

          <div
            className="mt-8 space-y-3 text-slate-800 max-h-[70vh] overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: summaryText }}
          />
        </article>

        <article
          id="action-buttons"
          className="w-full mt-3 flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-stretch"
        >
          <button
            onClick={handleReset}
            className="bg-red-500 px-4 py-2 text-white rounded cursor-pointer w-full md:w-auto"
          >
            Reset
          </button>
          <button
            onClick={generateNotes}
            className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded text-white cursor-pointer w-full md:w-auto"
          >
            Generate notes
          </button>
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
