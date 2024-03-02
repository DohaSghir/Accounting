function DropdownItem(props){
return(

    <li className="" >  
        <div className="mb-3 flex items-center gap-2 hover:opacity-[0.7]">
        <img className="w-[20px] h-[20px]  " src={props.img} alt="" />
        <a href={ "#" + props.link } >{props.link}</a>
        </div>
    </li>
);

}
export default DropdownItem;