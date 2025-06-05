import Footer from "../../components/Footer/Footer";
import Navbar from "../Home/Components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
const Summary = () => {

    const {
        register,
        handleSubmit,
        formState: {errors , isSubmitting},
        reset
    } = useForm()
    

    const generateSummary = async (data) =>{
        toast.loading('Generating...' , {theme : 'dark'})
        await new Promise((resolve) =>{
            setTimeout(() => {
                resolve()
            }, 2000);
        }).then(() =>{
            toast.dismiss();
            toast.success('Generated!!!' , {theme : 'dark'})
            console.log(data.paragraph)
            reset()
        })
    }

  return (
    <div>
      <Navbar />
      <main>
        <section id="heading" className="w-[60%] mx-auto text-center py-12 h-[18rem]">
            <h1 className="font-semibold text-5xl" >Tired of Long Paragraphs? Let AI Instantly Summarize and Save You Time!</h1>
        </section>
        <section id="input=form" className="w-[60%] mx-auto px-22">
            <form onSubmit={handleSubmit(generateSummary)} className="flex items-start gap-5" >
                <fieldset className="border p-1 rounded w-full" >
                    <legend className="px-1 mx-1 font-semibold">Paragraph</legend>
                    <textarea {...register('paragraph' , {
                        required:{
                            value : true,
                            message : 'This field is required'
                        }
                    })} type="text" placeholder="Paste your paragraph here" className="w-full outline-none px-2 h-auto" />
                </fieldset>
                <button className="bg-purple-800 px-6 py-1 mt-4 rounded text-white cursor-pointer" >Generate</button>
            </form>
        </section>
      </main>
      <Footer />
      <ToastContainer/>
    </div>
  );
};

export default Summary;
