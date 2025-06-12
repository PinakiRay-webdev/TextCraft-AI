import React, { useState } from "react";
import { generateQuiz } from "../../functions/Quiz";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Navbar from "../../components/Navbar/Navbar";
import { WiStars } from "react-icons/wi";
import quizBg from '../../assets/quizBg.png';
import Footer from '../../components/Footer/Footer';

const Quiz = () => {
  const [quiz, setQuiz] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const user = JSON.parse(localStorage.getItem('userCredentials'))

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onGenerate = async (data) => {
    if(!user){
      toast.error('Create account first' , {theme : 'dark'})
      return;
    }
    const paragraph = data.paragraph.trim();
    if (!paragraph) {
      toast.error("Please enter a paragraph first!", { theme: "dark" });
      return;
    }

    try {
      toast.loading("Generating quiz...", { theme: "dark" });
      const result = await generateQuiz(paragraph);
      toast.dismiss();
      setQuiz(result);
      setUserAnswers({});
      setShowScore(false);
      toast.success("Quiz generated successfully!", { theme: "dark" });
      reset();
    } catch (error) {
      toast.dismiss();
      toast.error("Failed to generate quiz", { theme: "dark" });
    }
  };

  const handleSelect = (qIndex, option) => {
    setUserAnswers({ ...userAnswers, [qIndex]: option });
  };

  const handleSubmitQuiz = () => {
    let correct = 0;
    quiz.forEach((q, i) => {
      if (userAnswers[i] === q.answer) correct++;
    });
    setScore(correct);
    setShowScore(true);
  };

  const handleEndTest = () => {
    setQuiz([]);
    setUserAnswers({});
    setScore(0);
    setShowScore(false);
  };

  return (
    <div>
      <Navbar />
      <header className="text-center mt-12 w-[70%] mx-auto relative">
        <h2 className="text-5xl font-semibold capitalize leading-[4rem]">
          Generate impressive quizzes in a flash
        </h2>
        <p className="text-5xl absolute right-10 top-0 text-green-500">
          <WiStars />
        </p>
        <p className="mt-2 text-gray-600 font-semibold">
          Turn any paragraph into an engaging multiple-choice quiz using AI.
          Perfect for learning, revision, or testing your friends!
        </p>
        <button className="bg-green-600 px-5 py-2 rounded font-semibold text-sm text-white mt-8 cursor-pointer">
          Give your first quiz
        </button>
      </header>

      <section className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 rounded-lg my-12 py-8 px-4 lg:py-12 lg:px-12 max-w-6xl mx-auto">
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h4 className="text-2xl font-semibold capitalize mb-4">
            Empower Your Learning Journey with AI-Generated Quizzes
          </h4>
          <ul className="mt-4 text-zinc-700 list-disc list-inside text-left mx-auto lg:mx-0 max-w-xl space-y-2">
            <li>
              Instantly transform any paragraph into engaging, multiple-choice quizzes powered by AI.
            </li>
            <li>
              Perfect for students, teachers, and lifelong learners seeking interactive revision.
            </li>
            <li>
              Make studying fun, effective, and personalized—test yourself or challenge your friends!
            </li>
          </ul>
        </div>
        <div className="w-[50%] hidden lg:block justify-center items-center">
          <img
            className="w-full h-full object-contain"
            src={quizBg}
            alt="Quiz Illustration"
          />
        </div>
      </section>

      <section className="w-[60%] mx-auto mt-10">
        <form onSubmit={handleSubmit(onGenerate)} className="space-y-4">
          <label className="block font-semibold text-lg">
            Enter your paragraph:
          </label>
          <textarea
            {...register("paragraph", {
              required: "Paragraph is required",
              minLength: {
                value: 30,
                message: "Please enter at least 30 characters",
              },
            })}
            rows="6"
            placeholder="Paste or type your paragraph here..."
            className="w-full p-4 border rounded"
          ></textarea>
          {errors.paragraph && (
            <p className="text-red-600 text-sm">{errors.paragraph.message}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded"
          >
            {isSubmitting ? "Generating..." : "Generate Quiz"}
          </button>
        </form>
      </section>

      <section className="mb-12">
        {quiz.map((q, index) => (
          <div
            key={index}
            className="w-[60%] mx-auto my-6 p-4 border rounded bg-gray-50 shadow-sm"
          >
            <p className="font-medium mb-2">
              {index + 1}. {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((option, optIndex) => (
                <label key={optIndex} className="block cursor-pointer">
                  <input
                    type="radio"
                    name={`q${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleSelect(index, option)}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}

        {quiz.length > 0 && !showScore && (
          <div className="w-[60%] mx-auto">
            <button
              onClick={handleSubmitQuiz}
              className="mt-4 px-6 py-2 bg-green-700 text-white rounded"
            >
              Submit Quiz
            </button>
          </div>
        )}

        {showScore && (
          <div className="w-[60%] mx-auto flex flex-col items-start gap-4">
            <p className="mt-6 text-xl font-bold text-green-700">
              ✅ You scored {score} out of {quiz.length}
            </p>
            <button
              onClick={handleEndTest}
              className="px-5 py-2 bg-red-600 text-white rounded font-semibold"
            >
              End Test
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Quiz;
