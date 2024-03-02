// src/pages/HomePage.js
import React from 'react';
import Nav from '../components/Nav';
import Container from '../components/Container';
import Cards from '../components/Cards';
import Cardimg from '../components/Cardimg';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const People =[ {
    name:"Oussama Lamrabet",
    info:"On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même",
    img:"/images/tree.jpg",
    email:"mailto:oussama@gmail.com"
},
    {
        name: "Oussama Lamrabet",
        info: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même",
        img: "/images/tree.jpg",
        email: "mailto:oussama@gmail.com"
    },
    {
        name: "Oussama Lamrabet",
        info: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même",
        img: "/images/tree.jpg",
        email: "mailto:oussama@gmail.com"
    },


];

const HomePage = () => {
    return (
        <div id='Home' className="App ">
            <div className="image" >
                <Nav />



                <Container />

            </div>
            <Cards />
            <div id='About' className=' flex  justify-center flex-wrap gap-10 pt-16 pb-10 bg-[#FAFAFA]' >

                <div className="  text-center w-full mb-[5rem]">
                    <h2 className=" text-[#252B42] font-bold text-[2.5em] "> About us </h2>
                    <p className="text-[#737373]" >Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics </p>
                </div>

                <div className='flex flex-wrap justify-center gap-10' >
                    {People.map(
                        (person, key) => {
                            return <Cardimg key={key} name={person.name} info={person.info} img={person.img} email={person.email} />

                        })
                    }
                </div>

            </div>
            <Contact />
            <Footer />


        </div>
    );
};

export default HomePage;
