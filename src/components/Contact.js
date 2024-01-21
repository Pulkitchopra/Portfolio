import React, {useState} from 'react'
import Resume from '../Pulkit Chopra Resume.pdf'
import axios from 'axios';

const Contact = (props) => {

    const [name, setName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const[subject, setSubject] = useState(" ");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email, subject);

        const data = {
            Name: name,
            Email:email,
            Subject: subject
        }
        axios.post('https://sheet.best/api/sheets/ac4194d7-97d0-4160-9426-b1fa1001b9fa', data).then((response) => {
            console.log(response);
            setName('');
            setEmail('');
            setSubject('');
        })

    }

    return (
        <section className='pb-8' id='contact' style={{ backgroundColor: props.webMode === 'light' ? 'rgb(248,248,248) ' : 'rgb(32,32,43)' }} >
            <h1 className='text-3xl text-center font-bold' style={{ color: props.webMode === 'light' ? 'black' : 'white' }}>Contact Page</h1>

            <div className='flex mt-8 m-16 p-6 rounded-3xl sm:grid sm:grid-cols-1 sm:gap-y-6 sm:m-6'>
                <div className='ml-36 text-lg contact-left md:ml-1 lg:ml-36 sm:ml-3' >
                    {/* <h1 className='text-3xl font-bold m-6 sm:text-xl md:text-xl lg:text-3xl '>Contact Us Page</h1> */}
                    <p className='text-xl m-6 my-6 sm:text-sm md:text-md md:m-1 lg:text-xl lg:m-6'><i className="fa-solid fa-location-dot mx-3" style={{color: '#1655c0'}} ></i>New Delhi</p>
                    <p className='text-xl m-6 my-6 sm:text-sm md:text-md md:m-1 lg:text-xl lg:m-6'><i className="fa-solid fa-envelope mx-3" style={{color: '#1655c0'}}></i>pulkitchopra1999@gmail.com</p>
                    <div className='text-2xl m-3 my-8 sm:text-lg' >
                        <a href='https://www.linkedin.com/in/pulkit-chopra-04775a169/'><i className="fa-brands fa-linkedin mx-6 cursor-pointer hover:text-gray-600"></i></a>
                        <a href='https://github.com/Pulkitchopra'><i className="fa-brands fa-github cursor-pointer hover:text-gray-600"></i></a>
                    </div>
                    <a href={Resume} download className=' bg-blue-600 p-3 rounded-xl m-6 text-xl font-semibold text-white sm:text-sm'>Download CV</a>
                </div>

                <div className='flex contact-right '>
                    <form className='form-group' onSubmit={handleSubmit}>
                        <div className='md:w-80 sm:w-60 m-6 sm:ml-1'>
                        <label>Name: </label>
                            <input type='text' name='name' placeholder='Enter your Name' required onChange={(e) => setName(e.target.value)} value={name} />
                        </div>
                        <div className='sm:w-60 m-6 sm:ml-1'>
                        <label>Email: </label>
                            <input type='text' name='email' placeholder='Enter your Email' required  onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>

                        <div className='sm:w-60 m-6 sm:ml-1'>
                        <label>Subject: </label>
                            <textarea name='subject' id=' ' cols={30} rows={5} placeholder='Write Subject' required onChange={(e) => setSubject(e.target.value)} value={subject} ></textarea>
                        </div>
                        <button className=' bg-blue-600 p-3 rounded-xl m-6 text-lg text-white font-semibold'>Submit</button>


                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
