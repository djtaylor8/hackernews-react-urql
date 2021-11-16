import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { getToken, deleteToken } from '../token';

const Header = (props) => {
    const navigate = useNavigate();
    const isLoggedIn = !!getToken();

    return (
        <div className='flex pa1 justify-between nowrap orange'>
            <div className='flex flex-fixed black'>
                <div className='fw7 mr1'>Hacker News</div>
                <Link to ='/' className='ml1 no-underline black'>
                    new 
                </Link>
                {isLoggedIn && (
                    <div className='flex'>
                        <div className='ml1'>|</div>
                        <Link to='/create' className='ml1 no-underline black'>
                         submit
                        </Link>
                    </div>
                )}
                </div>
                <div className='flex flex-fixed'>
                    {isLoggedIn ? (
                        <div
                            className='ml1 pointer black'
                            onClick={() => {
                                deleteToken()
                                navigate('/')
                            }}
                        >
                            logout
                        </div>
                    ) : (
                        <Link to='/login' className='ml1 no-underline black'>
                            login
                        </Link>
                    )}
                </div>
            </div>
    );
};

export default Header;