import Form from "./Form";

function Contact(){
    return(
        <section id="Contact" className=" ml-6 mt-10 flex flex-col items-center   " >
            <h2 className="text-[#252B42] font-bold text-[2em] " >Contact us !</h2>
            <div className="lg:mt-10 lg:flex lg:w-full lg:items-center w-[90%]   lg:justify-between">
            <img src="/images/contact.svg" alt="" />
            <Form />
            </div>

        </section>


    );
}
export default Contact;