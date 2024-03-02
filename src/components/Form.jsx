import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
function Form() {

    const schema = yup.object().shape(
        {
            Name: yup.string().required("*Your Name is required"),
            Email: yup.string().email().required("*The email must include @ "),
            Message: yup.string().min(5).required("*The minumum length of caracters must be 5")
        }
    )

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    }
    );
    const onSubmit = (data) => {
        console.log(data);
        alert("Submitted");
    };


    return (
        <form className="flex flex-col gap-1 lg:mt-10  lg:w-[40%] lg:pr-8  " onSubmit={handleSubmit(onSubmit)} action="">

            <input className=" outline-none focus:outline-red-300  bg-[#D9D9D9] p-3 rounded-[10px]" type="text" name="Name" id="Name" placeholder="Name" {...register("Name")} />
            <p>{errors.Name?.message}</p>

            <input className=" outline-none focus:outline-red-300 bg-[#D9D9D9] p-3 rounded-[10px]" type="email" name="Email" id="Email" placeholder="Email" {...register("Email")} />
            <p>{errors.Email?.message}</p>
            {/*Messsage */}

            <textarea className=" outline-none focus:outline-red-300 resize-none h-[15rem] bg-[#D9D9D9] p-3  rounded-[10px]   border " type="text" name="Message" id="Message" placeholder="Message"  {...register("Message")} ></textarea>

            <p>{errors.Message?.message}</p>
            <div className="flex  lg:justify-end justify-center  mt-4">
                <button className=" cursor-pointer w-[7rem] bg-[#021C4E]  p-3    lg:px-5 hover:opacity-70 active:scale-90   transition-all	duration-[400ms] text-white rounded-[20px]" type="submit"  >Send</button>

            </div>




        </form>



    );
}
export default Form;