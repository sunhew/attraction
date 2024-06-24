import React from 'react';
import Main from '../components/section/Main';
import '../assets/scss/style.scss';

const Home = () => {
    return (
        <Main
            title="맛있는 레시피"
            description="우리의 레시피 사이트에서 매일 새로운 요리 영감을 찾아보세요."
        >
            <section className="intro">
                <h2>맛있는 레시피에 오신 것을 환영합니다</h2>
                <p>전 세계의 맛있는 레시피를 찾을 수 있는 최고의 사이트 입니다.</p>
            </section>
            <section className="featured-recipes">
                <h2>추천 레시피</h2>
                <div className="recipes">
                    <div className="recipe-card">
                        <h3>스파게티 카르보나라</h3>
                    </div>
                    <div className="recipe-card">
                        <h3>치킨 알프레도</h3>
                    </div>
                    <div className="recipe-card">
                        <h3>비프 타코</h3>
                    </div>
                </div>
            </section>
            <section className="user-reviews">
                <h2>사용자 리뷰</h2>
                <div className="reviews">
                    <div className="review">
                        <p>"와! 신난다!! 따라하기 쉽고 맛있는 결과를 얻었어요!"</p>
                        <span>- 행복한 요리사</span>
                    </div>
                    <div className="review">
                        <p>"이 사이트는 매일 요리 영감을 얻기 위한 저의 일상입니다."</p>
                        <span>- 요리사123</span>
                    </div>
                </div>
            </section>
        </Main>
    );
};

export default Home;
