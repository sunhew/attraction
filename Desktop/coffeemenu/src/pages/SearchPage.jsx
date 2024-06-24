import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';
import { useParams } from 'react-router-dom';


const SearchPage = () => {
    const { searchId } = useParams();
    const [searchData, setSearchData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoffeeData = async () => {
            setError(null);
            try {
                const response = await fetch(`https://raw.githubusercontent.com/gnlgk/coffee-menu/main/paiks/menupaiks_2024-05-29.json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                
                 // 데이터의 구조를 확인하고 적절한 속성을 사용합니다.
                 const filteredData = result.filter(item => 
                    item.title && item.title.toLowerCase().includes(searchId.toLowerCase())
                );
                setSearchData(filteredData);
            } catch (error) {
                setError(error.message);
            }
        };
        fetchCoffeeData();
    }, [searchId]);

    return (
        <Main>
                <div className="search__header">
                    <h2><em>☕</em> SEARCH RESULTS FOR : {searchId}</h2>
                </div>
                <div className='info__box container'>
                    {searchData.length > 0 ? (
                        searchData.map((coffee, index) => (
                            <div className='coffee__Box' key={index}>
                                <div className="list__div">
                                    <img className='img' src={coffee.imageURL} alt={coffee.title} />
                                    <h3 className='title'>{coffee.title}</h3>
                                    <div className="tooltip">
                                        <h4>{coffee.title}</h4>
                                        <div className='titleeng'>{coffee.titleE}</div>
                                        <div className='desc'>{coffee.desction}</div>
                                        {coffee.information && (
                                            <div className='info'><strong>영양성분</strong>
                                                {Object.entries(coffee.information).map(([key, value]) => (
                                                    <div key={key}>
                                                        {key} : {value}
                                                    </div>
                                                ))}
                                            </div>
                                        )}                                    
                                        <a href={coffee.address} target="_blank" rel="noopener noreferrer" className='address'>{coffee.address}</a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>메뉴를 불러오는 중입니다...</div>
                    )}
                </div>
        </Main>
    );
}

export default SearchPage;
