// Home.jsx

import React, { useEffect } from 'react';
import Main from '../components/section/Main';
import '../assets/scss/style.scss';

const Home = () => {
    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const particles = [];
        const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function createParticle(x, y, color) {
            return {
                x,
                y,
                color,
                radius: Math.random() * 5 + 1,
                alpha: 1,
                speed: Math.random() * 5 + 1,
                angle: Math.random() * 2 * Math.PI,
            };
        }

        function updateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += Math.cos(p.angle) * p.speed;
                p.y += Math.sin(p.angle) * p.speed;
                p.alpha -= 0.01;

                if (p.alpha <= 0) {
                    particles.splice(i, 1);
                } else {
                    ctx.globalAlpha = p.alpha;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
                    ctx.fillStyle = p.color;
                    ctx.fill();
                }
            }
            requestAnimationFrame(updateParticles);
        }

        function handleClick(event) {
            const x = event.clientX;
            const y = event.clientY;
            const color = colors[Math.floor(Math.random() * colors.length)];
            particles.push(createParticle(x, y, color));
        }

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('click', handleClick);
        updateParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <Main
            title="밴드 플레이리스트"
            description="국내 인디밴드 페이지 입니다."
        >
            <canvas id="canvas"></canvas>
            <button id="sound-button" className="button button--icon button--active">
                <svg className="button__copy" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10.5 2.5 4.4 7.3h-3C.6 7.3 0 7.9 0 8.7v6.7c0 .8.6 1.4 1.4 1.4h3l6.2 4.7c1.1.8 2.6.1 2.6-1.3V3.8c0-1.3-1.6-2.1-2.7-1.3z" />
                    <path d="M17.6 7.8c-.5-.4-1.3-.4-1.7.2-.4.5-.3 1.3.2 1.7a3 3 0 0 1-.1 4.7c-.5.4-.6 1.1-.2 1.5l.1.1c.4.5 1.2.6 1.6.2a5.3 5.3 0 0 0 .1-8.4z" />
                    <path d="M20.3 4.4c-.5-.4-1.2-.3-1.7.2-.4.5-.4 1.3.2 1.7 1.7 1.4 2.8 3.5 2.8 5.8s-1.1 4.4-2.8 5.8c-.5.4-.6 1.2-.2 1.7.4.5 1.2.6 1.7.2a9.8 9.8 0 0 0 0-15.4z" />
                    <line x1="0" y1="0" x2="24" y2="24" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
                <span className="button__border"></span>
                <span className="button__background"></span>
            </button>

            <button id="start-button" className="button button--secondary">
                <span className="button__copy">Start!</span>
                <span className="button__border"></span>
                <span className="button__background"></span>
            </button>

            <ul id="control-list">
                <li className="control-list__item">
                    <button className="control-list__button button button--icon button--light" data-id="shiny">
                        <svg className="button__copy" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M4.5 4.1l-3.6.4-.3.2a237 237 0 002.8 2.8L2.7 11l.1.3c.1.1.3.1.4 0l3.1-1.8a1405.7 1405.7 0 003.5 1.8c.1-.1.2-.2.1-.3l-.7-3.5 2.7-2.4.1-.4-.3-.2-3.6-.4L6.6.8 6.3.6 6 .8 4.5 4.1z" />
                            <path d="M16.9 6.9l-2.8.3-.2.2.1.3 2.1 1.9-.6 2.7.1.3h.3l2.4-1.4 2.4 1.4h.3l.1-.3-.6-2.7 2.1-1.9.1-.3-.2-.2-2.8-.3-1.2-2.5-.2-.2-.2.2-1.2 2.5z" />
                            <path d="M10.1 16.6l-3.2.4-.3.2.1.3 2.4 2.2-.7 3.2.1.3h.3l2.8-1.6a127.9 127.9 0 003.1 1.6c.3-.1.3-.2.3-.3l-.7-3.2 2.4-2.2.1-.3a50.8 50.8 0 01-3.5-.6L12 13.7l-.3-.2-.3.2-1.3 2.9z" />
                        </svg>
                        <span className="button__border"></span>
                        <span className="button__background"></span>
                    </button>
                </li>
                <li className="control-list__item">
                    <button className="control-list__button button button--icon button--light" data-id="glasses">
                        <svg className="button__copy" width="24" height="24" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11 9.1c-3.2-.8-6.3-1-10.2-.6-1.2.2-1.1 2 .1 2.2.3.8.5 2.4.9 3.3 1 2.3 5.6 2 7.4.8 1.1-.7 1.5-2.3 1.9-3.5.2-.7 1.6-.7 1.8 0 .5 1.2.8 2.8 1.9 3.5 1.7 1.1 6.4 1.4 7.4-.8.4-.9.5-2.4.8-3.3 1.1-.2 1.3-2 .1-2.2-3.9-.5-7-.2-10.2.6a6 6 0 0 1-1.9 0zm-6 .1c-1.2 0-2.9.2-3.1 1.1-.5 1.4.4 4.2 2.4 4.2-1.1-.6-2-2.7-1.7-3.9C2.8 9.9 4 9.4 5 9.2zm11.6.1c-1.1.1-2.7.4-2.9 1.2-.4 1.4.5 3.9 2.4 3.9-1.1-.5-2.1-2.5-1.7-3.7.1-.7 1.2-1.2 2.2-1.4z" clipRule="evenodd" />
                        </svg>
                        <span className="button__border"></span>
                        <span className="button__background"></span>
                    </button>
                </li>
                <li className="control-list__item">
                    <button className="control-list__button button button--icon button--light" data-id="bow">
                        <svg className="button__copy" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M16.9 6.7c2.5-1.5 4.7-2.9 4.5-3.7v-.1h-.2c-3.5 0-6.5 3.9-7.6 5.6l.2.2a54 54 0 0 1 3.1-2z" />
                            <path d="m7.1 6.7 3.2 2 .2-.2C9.4 6.9 6.4 3 2.9 2.9h-.4v.5l.1-.1c.3.9 2.3 2.1 4.5 3.4z" />
                            <path d="m21.7 3.3-.1-.2-.1.2c-.3.9-2.2 2-4.5 3.4l-.1.1-3.8 2.4v2.4h.1a16 16 0 0 0 6.4 1.5l2.7-.3c.8-.2 1.3-.8 1.5-1.6.2-2.4-.5-5.5-2.1-7.9z" />
                            <path d="M11.1 8.6h1.8V12h-1.8V8.6z" />
                            <path d="m10.9 11.7.1-2.4L7.2 7 7 6.8C4.7 5.4 2.9 4.3 2.5 3.4l-.1-.2-.1.2a12.7 12.7 0 0 0-2 7.9 2 2 0 0 0 1.5 1.6l2.7.3c2 0 4.1-.5 6.4-1.5z" />
                            <path d="M10.9 12.1v-.3l-.2.1c-1.8.8-3.5 1.2-5.1 1.4-1.7 2-2.8 4-3.1 6v.2l4.1-2.2h.1L9 21.1l2.6-8.9-.7-.1c.1.1 0 .1 0 0z" />
                            <path d="M18.4 13.3c-1.7-.2-3.4-.6-5.2-1.4l-.2-.1v.3l-.1.1h-.5l2.6 8.9 2.3-3.8h.1l4.1 2.2v-.2c-.3-2.1-1.3-4-3.1-6z" />
                        </svg>
                        <span className="button__border"></span>
                        <span className="button__background"></span>
                    </button>
                </li>
                <li className="control-list__item">
                    <button className="control-list__button button button--icon button--light" data-id="hat">
                        <svg className="button__copy" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M12 19.6c6.6 0 12-2.7 12-6 0-2-1.9-3.7-4.9-4.8l.4 1.5.2 1.8c0 .7-.3 1.3-.8 1.8-1.5 1.5-4.7 2.1-7.3 2.1-3.3 0-7.2-.9-7.2-3.5l.2-1.9.2-.9.2-1c-3 1.1-5 2.9-5 4.9 0 3.3 5.4 6 12 6z" />
                            <path d="m4.9 11.3-.1 1.1c0 2.1 3.4 3.1 6.8 3.1 3.7 0 7.6-1.2 7.6-3.4l-.1-1.1c-1.2 1.6-4.6 2.4-7.5 2.4-2.6 0-5.5-.6-6.7-2.1z" />
                            <path d="M11.6 12.9c3.3 0 6.6-.9 7.4-2.6-.4-2.5-1.9-5.9-7-5.9S5.4 8 5 10.6c.7 1.6 3.6 2.3 6.6 2.3z" />
                        </svg>
                        <span className="button__border"></span>
                        <span className="button__background"></span>
                    </button>
                </li>
            </ul>

            <ul id="social-list">
                <li className="social-list__item">
                    <a href="https://dribbble.com/nicofonseca" target="_blank" rel="noopener noreferrer">
                        <span className="hidden-text">Dribbble</span>
                        <svg width="40" height="40" viewBox="0 0 512 512">
                            <path d="M256 0a256 256 0 0 0 0 512c141 0 256-114.7 256-256S397 0 256 0Zm169 118a217.6 217.6 0 0 1 49.5 136c-7.2-1.3-79.4-16-152.1-6.9-1.7-3.6-3.1-7.5-4.8-11.4a655.5 655.5 0 0 0-14.4-31.6c80.5-32.8 117.2-80 121.9-86ZM256 37.8c55.5 0 106.3 20.8 145 55-4 5.5-37 49.6-114.7 78.8-35.9-65.8-75.6-119.7-81.7-128 16.4-3.9 33.6-5.8 51.4-5.8Zm-93 20.5c5.8 7.8 44.7 62 81 126.3C142 212 51.7 211.3 42 211.3a219.7 219.7 0 0 1 121-153Zm-125.8 198v-6.7a799 799 0 0 0 224.6-31 648.8 648.8 0 0 1 17.8 37.1l-8.6 2.5C158.3 294.6 98.3 394 93.3 402.3c-34.7-38.6-56-90-56-146ZM256 474.8a217 217 0 0 1-134.1-46.1c3.9-8 48.3-93.6 171.6-136.6l1.4-.6a903.9 903.9 0 0 1 46.6 165.8 215.1 215.1 0 0 1-85.5 17.5Zm121.9-37.5a940.5 940.5 0 0 0-42.5-155.8c68.6-10.8 128.6 7 136 9.5A216.8 216.8 0 0 1 378 437.3Z" />
                        </svg>
                    </a>
                </li>
                <li className="social-list__item">
                    <a href="https://www.linkedin.com/in/nicofonseca/" target="_blank" rel="noopener noreferrer">
                        <span className="hidden-text">Linkedin</span>
                        <svg width="40" height="40" viewBox="0 0 512 512">
                            <path d="M256 0a256.1 256.1 0 0 1 0 512 256.1 256.1 0 0 1 0-512Zm-80 399.9v-200h-66.5v200H176Zm239.6 0V285.2c0-61.4-32.8-90-76.5-90a66 66 0 0 0-60 33V200h-66.4c1 18.8 0 200 0 200h66.5V288.2c0-6 .4-12 2.2-16.2 4.8-12 15.7-24.3 34-24.3 24.1 0 33.7 18.3 33.7 45.2v107h66.5ZM143.2 103.5c-22.8 0-37.6 15-37.6 34.6 0 19.2 14.4 34.5 36.7 34.5h.4c23.2 0 37.6-15.3 37.6-34.5-.4-19.6-14.4-34.6-37.1-34.6Z" />
                        </svg>
                    </a>
                </li>
            </ul>

            <svg id="svg" preserveAspectRatio="xMidYMid slice" width="1920" height="1080" viewBox="0 0 1920 1080">
                <rect id="background" x="0" y="0" width="1920" height="1080" fill="transparent" />
                <g id="particles"></g>
                <g id="sing-circles">
                    <circle className="sing-circle" cx="960" cy="540" r="320" stroke="rgba(255,255,255,0.6)" strokeWidth="7" fill="transparent"></circle>
                    <circle className="sing-circle" cx="960" cy="540" r="250" stroke="transparent" fill="rgba(255,255,255,0.45)"></circle>
                    <circle className="sing-circle" cx="960" cy="540" r="280" stroke="rgba(255,255,255,0.5)" strokeWidth="4" fill="transparent"></circle>
                </g>
                <g id="jigglypuff">
                    <path id="jigglypuff-background" fill="transparent" d="M740 320h420v400H740z" />
                    {/* Add the rest of the SVG paths and shapes here */}
                </g>
                <g id="stars" transform="translate(960 540)">
                    {/* Add the stars paths here */}
                </g>
            </svg>
        </Main>
    );
};

export default Home;
