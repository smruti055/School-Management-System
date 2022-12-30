import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [userdetails, setUserdetails] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const {name, value} = e.target;
        setUserdetails({
            ...userdetails,
            [name]: value,
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/login', userdetails)
        .then(res => {
            alert(res.data.status)
            const {status} = res.data;
            if(status === 'login successful') {
                navigate('/home');
            }
            if(status === 'user not found') {
                navigate('/register');
            }
            if(status == 'incorrect password') {
                setUserdetails({...userdetails, password: ""});
            }
        })
    }
  return (
    <section className="bg-blue-300">
        <div className="flex flex-col items-center justify-center px-6 py-8 h-screen">
            <div className="w-full  shadow border max-w-md bg-gray-900 border-gray-700">
                <div className="p-6 space-y-6">
                    <h1 className="font-bold text-4xl text-white">
                        LOGIN
                    </h1>
                    <form className="space-y-6" action="post">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-white">Email</label>
                            <input type="email" name="email" id="email" value={userdetails.email} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-grey-900 focus:ring-blue-500 focus:border-blue-500"  required />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                            <input type="password" name="password" id="password" value={userdetails.password} onChange={changeHandler} className="border text-sm rounded-lg focus:ring-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-grey-900 focus:ring-blue-500 focus:border-blue-500" required />
                        </div>
                        <div>
                            <a href="#" className="text-sm text-gray-400 font-medium hover:underline">Forgot password?</a>
                        </div>
                        {/* <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" className="mr-2 w-4 h-4 border rounded focus:ring-3 bg-gray-700 border-gray-600 focus:ring-primary-600 ring-offset-gray-800" required />
                            </div>
                            
                        </div> */}
                        <button type="submit" onClick={handleLogin} className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:bg-primary-700 focus:ring-primary-800">LOGIN</button>
                        <p className="text-sm text-white">
                            Don't have an account? <a href="/register" className="font-medium hover:underline dark:text-primary-500">SIGN UP HERE</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default LoginPage