"use client"
import * as React from 'react';
import styled from 'styled-components';

const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Email:', email, 'Password:', password);
}

const LoginWRap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
`

export default function LoginPage(){
    return (
        <LoginWRap>
                <form onSubmit={login}>
                    <label>
                        이메일 :
                        <input type="email" name="email" placeholder="test@test.com" />
                    </label>
                    <label>
                        비밀번호 :
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">로그인</button>
                </form>
        </LoginWRap>
    );
};