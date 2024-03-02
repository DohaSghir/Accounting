function Card(props){
    const data = ["The best products start with Figma", "The best products start with Figma", "The best products start with Figma", "The best products start with Figma", "The best products start with Figma"];

    return(
        <div className="w-[15rem] card shadow-lg border border-[#8813D2] rounded-[20px]   text-center  lg:w-[17rem]  ">


            <div className="rounded-t-[20px] p-5  bg-[#021C4E]   flex items-center justify-center gap-2">
                <img src={props.img} className="  w-[45px] h-[45px] " alt="man" />
                <h5 className="text-white font-bold">{props.title}</h5>

            </div>
            

            <ul className="text-justify pr-2 pl-2 lg:p-3 tracking-tight lg:tracking-normal	  mb-10  mt-10 leading-[1.7rem] text-[#737373] " >
                {data.map(
                    (d, key) => {
                        return <li >{d}</li>
                    }
                )}

            </ul>
        </div>
    );
}
export default Card;