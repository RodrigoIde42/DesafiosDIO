import React, { useState } from 'react';
import { useGithub } from '../../hooks/GithubHooks.js';
import * as S from './styled';

export default function Header() {

    const { getUser } = useGithub();
    const [ username, setUsername ] = useState();

    const handleSetUsername = (e) => {
        setUsername(e.target.value);
    }

    const submitGetUser = () => {
        if (!username) return;
        return getUser(username);
    }

    return (
        <header>
            <S.Wrapper>
                <input 
                  type="text" 
                  placeholder="Type username to search" 
                  onChange={handleSetUsername}
                />
                <button 
                  type="submit"
                  onClick={submitGetUser}
                >
                    <span>Search</span>
                </button>
            </S.Wrapper>
        </header>
    )
}
