import React, { useState, useEffect, useRef } from 'react';
import '../assets/scss/style.scss';
import Main from '../components/section/Main';

const Producerpik = () => {
    const [leftData, setLeftData] = useState([]);
    const [rightData, setRightData] = useState([]);
    const [error, setError] = useState(null);
    const leftColumnRef = useRef(null);
    const rightColumnRef = useRef(null);

    useEffect(() => {
        const fetchLeftData = async () => {
            try {
                const response = await fetch('/data/SeonHwaPik.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setLeftData(result);
            } catch (error) {
                setError(error);
            }
        };

        const fetchRightData = async () => {
            try {
                const response = await fetch('/data/gnlgkPik.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setRightData(result);
            } catch (error) {
                setError(error);
            }
        };

        fetchLeftData();
        fetchRightData();
    }, []);

    useEffect(() => {
        const scrollInterval = 30; // 스크롤 속도
        const scrollStep = 1; // 한 번에 스크롤되는 픽셀 수

        const startScrolling = (element) => {
            let scrollTop = 0;
            setInterval(() => {
                if (element.scrollTop + element.clientHeight >= element.scrollHeight) {
                    scrollTop = 0;
                } else {
                    scrollTop += scrollStep;
                }
                element.scrollTop = scrollTop;
            }, scrollInterval);
        };

        if (leftColumnRef.current) {
            startScrolling(leftColumnRef.current);
        }
        if (rightColumnRef.current) {
            startScrolling(rightColumnRef.current);
        }
    }, [leftData, rightData]);

    if (error) {
        return <div>데이터를 불러오는 중에 에러가 발생했습니다: {error.message}</div>;
    }

    return (
        <Main>
            <div className="producerpik__container">
                <div className="producerpik__content">
                    <h1>Producer's Top 10</h1>
                    <div className="producerpik__columns">
                        <div className="producerpik__column" ref={leftColumnRef}>
                            {leftData.length > 0 ? (
                                <>
                                    {leftData.map(coffee => (
                                        <div key={coffee.rank} className="producerpik__item">
                                            <img src={coffee.img} alt={coffee.title} />
                                            <div className="producerpik__details">
                                                <h3>Top {coffee.rank}</h3>
                                                <p>{coffee.desction}</p>
                                                <h4>{coffee.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                    {leftData.map(coffee => (
                                        <div key={`${coffee.rank}-clone`} className="producerpik__item">
                                            <img src={coffee.img} alt={coffee.title} />
                                            <div className="producerpik__details">
                                                <h3>Top {coffee.rank}</h3>
                                                <p>{coffee.desction}</p>
                                                <h4>{coffee.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div>메뉴를 불러오는 중입니다...</div>
                            )}
                        </div>
                        <div className="producerpik__column" ref={rightColumnRef}>
                            {rightData.length > 0 ? (
                                <>
                                    {rightData.map(coffee => (
                                        <div key={coffee.rank} className="producerpik__item">
                                            <img src={coffee.img} alt={coffee.title} />
                                            <div className="producerpik__details">
                                                <h3>Top {coffee.rank}</h3>
                                                <p>{coffee.desction}</p>
                                                <h4>{coffee.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                    {rightData.map(coffee => (
                                        <div key={`${coffee.rank}-clone`} className="producerpik__item">
                                            <img src={coffee.img} alt={coffee.title} />
                                            <div className="producerpik__details">
                                                <h3>Top {coffee.rank}</h3>
                                                <p>{coffee.desction}</p>
                                                <h4>{coffee.title}</h4>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <div>메뉴를 불러오는 중입니다...</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
};

export default Producerpik;
