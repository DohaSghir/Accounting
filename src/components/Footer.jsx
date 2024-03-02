import Cardfooter from './Cardfooter';

function Footer() {
    const listinfo = [
        
        {   id:1,
            title: "Get In Touch",
            list: ["the quick fox jumps over thelazy dog"]
        },
        {
            id: 2,
            title: "Company info",
            list: ["About Us", "Carrier", "We are hiring", "Blog"]
        },

        {
            title: "Features",
            list: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"]
        },

        {
            title: "Resources",
            list: ["IOS & Android", "Watch a Demo", "Customers", "API"]
        },
    ];

    return (
        <div>
        <div className='flex flex-col items-center pl-[3rem] mt-[4rem] lg:flex-row lg:justify-around pb-7 ' >
            


            {
                listinfo.map(
                    (info,key)=>{
                      return  <Cardfooter key={key} title={info.title} list={info.list} />

                    }
                )
            }
            
        </div>
        <div className='w-full  p-[3rem]  bg-[#FAFAFA] text-center ' >
                <p className='text-[#737373] font-medium' >Made With Love By
                    Figmaland All Right Reserved </p>
        </div>
        </div>
    );
}

export default Footer;
