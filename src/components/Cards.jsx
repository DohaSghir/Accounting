import Card from "./Card";

function Cards(){

    return (

        <section id="Goals" className="bg-white flex flex-col items-center pb-10">
            <div className=" mb-16 mt-16   text-center w-[50%]   ">
            <h2 className="text-[#252B42] font-bold text-[2.5em] ">Principle Goals </h2>
            <p className="text-[#737373]" >Problems trying to resolve the conflict between
                the two major realms of Classical physics: Newtonian mechanics </p>
            </div>
            {/*Cards */}
            <div className="p-2 flex  flex-wrap gap-10 justify-center">
                <Card  img="/images/bilanc.svg" title="Bilan & CPC"/>
                <Card img="/images/invoicewhite.png" title="Invoices" />
                <Card img="/images/invoicec.svg" title="Invoices" />


          
            </div>
        </section>

    );
}
export default Cards;