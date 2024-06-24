
import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const logos = [
  { src: "http://www.caffebene.co.kr/images/common/logo.png", alt: "카페베네" },
  { src: "http://canbus.kr/images/common/hd_logo.png?refresh=1718266965277", alt: "캔버스" },
  { src: "https://coffeebanhada.com/image/site/index/logo.gif", alt: "커반" },
  { src: "https://www.coffeebay.com/img/main/main_logo_on_tmp.png", alt: "커피베이" },
  { src: "https://composecoffee.com/layouts/KSOTheme_Starter/src/img/logo-dark.svg", alt: "컴포즈" },
  { src: "https://pic.dessert39.com/www/img/common/dessert39_simbol2.svg", alt: "디저트39" },
  { src: "http://www.cafebombom.co.kr/img/plogo.png", alt: "봄봄" },
  { src: "https://www.coffine.co.kr/front/images/common/logo.png", alt: "그루나루" },
  { src: "https://www.hollys.co.kr/websrc/images/layout/logo_210302.gif", alt: "할리스" },
  { src: "https://mmthcoffee.com/img/common/logo2.png", alt: "메머드" },
  { src: "https://paikdabang.com/wp-content/themes/paikdabang/assets/images/logo.png", alt: "빽다방" },
  { src: "https://www.starbucks.co.kr/common/img/common/logo.png", alt: "스타벅스" },
  { src: "https://www.theventi.co.kr/new/upload/frlogo/30927906_VFKq5TZS_20240214014119.gif", alt: "더벤티" },
  { src: "https://www.tomntoms.com/assets/logo-ec2c5c29.png", alt: "탐탐" }
];

const Home = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log(searchKeyword);
    if (searchKeyword) {
      navigate(`/search/${searchKeyword}`);
      setSearchKeyword('');
    }
  };

  return (
    <>
      <div className="wrap">
        <section className='home__text'>
          <div className="widget__wrap">
            <div className="textwidget">
              <h3>What kind of coffee do you want?</h3>
              <p>Find the coffee you want right now</p>
              <div className="search-box">
                <label htmlFor="searchInput"><LuSearch /></label>
                <input
                  type="text"
                  placeholder='Search'
                  autoComplete='off'
                  onChange={e => setSearchKeyword(e.target.value)}
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="home__slider-container">
        <div className="home__slider">
          <div className="home__slide-track">
            {logos.map((logo, index) => (
              <div className="home__slide" key={index}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
            {logos.map((logo, index) => (
              <div className="home__slide" key={index + logos.length}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Home;
