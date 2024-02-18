import Title from './Title';
import React from 'react';
function Contact(){
    return(
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center">
                <form 
                action="https://getform.io/f/1aKP3RbQ"
                method="POST"
                className="flex flex-col w-full md:w-7/12"
                
                >
                    <Title>Contact</Title>
                    <input
                    name="name"
                    type="text"
                    placeholder='Name'
                    className="p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <input
                    name="email"
                    type="text"
                    placeholder='Email'
                    className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"/>
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="5"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    ></textarea>
                    <button type="submit" className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md on-hover:stroke-white">Contact Me!</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;