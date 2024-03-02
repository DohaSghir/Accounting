function Cardfooter(props) {
    return (
        <div className="">
            <p className={props.title === "Get In Touch" ? `mt-[1rem] lg:text-start text-center mb-[1rem] text-black font-bold text-lg` : `mt-[1rem] mb-[1rem] text-black font-bold text-lg`}>{props.title}</p>
            <ul className="" >
                {props.list.map((info, key) => (
                    <li className={props.title === "Get In Touch" ? `m-auto text-[#737373] font-medium pb-[0.5rem] w-[12rem] text-center lg:text-start  ` : `text-[#737373] font-medium pb-[0.5rem] w-[12rem] `} key={key}>{info}
                        {key === 0 && props.title === "Get In Touch" && (
                            <div className="flex lg:justify-start justify-center gap-5 mt-4">
                                <img src="/images/facebook.svg" alt="" />
                                <img src="/images/instagram.svg" alt="" />
                                <img src="/images/twitter.svg" alt="" />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cardfooter;
