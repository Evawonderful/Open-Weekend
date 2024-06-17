import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import logimage from '../assets/logimage.png';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement password reset logic here
        setSubmitted(true);
    };

    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-gray-100 flex flex-col justify-center items-center p-4">
                {!submitted ? (
                    <>
                        <h2 className="text-2xl mb-4">Reset your password</h2>
                        <form onSubmit={handleSubmit} className="w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Enter your mail"
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                                Reset Password
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center">
                        <FontAwesomeIcon icon={faEnvelope} className="text-6xl text-orange-400 mb-4" />
                        <p className="text-lg mb-4">Check your mail</p>
                        <p className="text-sm text-gray-600">
                            Password reset instructions have been sent to your mail.
                        </p>
                    </div>
                )}
            </div>
            <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${logimage})` }}></div>
        </div>
    );
};

export default ForgotPassword;
