
import React, { useContext, useState } from 'react';
import { AdminContext } from '../context/Admincontext';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { settoken, backendUrl } = useContext(AdminContext);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const fetchdata = async () => {
        try {
            const { data } = await axios.post(`${backendUrl}/api/user/admin-login`, {
                email,
                password
            });

            if (data.success) {
                localStorage.setItem("token", data.token);
                settoken(data.token);
                navigate("/");
            }
        } catch (error) {
            toast.error("Unauthorized login");
        }
    };

    const submithandler = async (e) => {
        e.preventDefault();
        await fetchdata();
        setemail("");
        setpassword("");
    };

    return (
        <div className='min-h-screen flex items-center'>
            <div className='flex flex-col shadow-lg border border-gray-100 m-auto gap-4 px-8 py-6 rounded-xl'>
                <h1 className='font-bold text-2xl'>Admin Panel</h1>
                <form className='flex flex-col gap-5 text-gray-500' onSubmit={submithandler}>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-sm'>Email Address</p>
                        <input
                            type='email'
                            className='border border-gray-300 w-[270px] p-1.5 rounded'
                            placeholder='email'
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='font-medium text-sm'>Password</p>
                        <input
                            type='password'
                            className='border border-gray-300 p-1.5 rounded'
                            placeholder='password'
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <button className='text-center bg-black text-white p-1.5 rounded'>Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
