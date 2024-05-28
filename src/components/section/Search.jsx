import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchKeyword, setSearckKeyword] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log(searchKeyword);
        if (searchKeyword) {
            navigate(`/search/${searchKeyword}`);
            setSearckKeyword('');
        }
    }

    return (
        <div id='search'>
            <div className="search__inner">
                <label htmlFor="">
                    <span className='ir'>검색: </span>
                </label>
                <input
                    type="search"
                    id='searchInput'
                    placeholder='검색어를 입력해주세요!'
                    autoComplete='off'
                    className='search__input'
                    onChange={e => setSearckKeyword(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }
                    }
                />
            </div>
        </div>
    )
}

export default Search