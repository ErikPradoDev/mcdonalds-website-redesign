import './HeaderModule.sass';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const onShowClickBtnMenu = () => {
        if (showMenu == false) {
            setShowMenu(true);
        } else setShowMenu(false);
    };

    return (
        <header>
            <div className="marginAuto">
                <div className="fDiv">
                    <svg width="80" height="80" viewBox="0 0 139 119" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_42)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M138.934 115.495C138.322 85.7159 133.527 57.0541 125.428 34.7924C117.265 12.3661 107.076 0.0135498 96.7461 0.0135498C90.3268 0.0135498 84.2971 4.68654 78.8158 13.9112C75.4214 19.6326 72.2579 27.1446 69.5072 35.9852C66.7478 27.1446 63.5901 19.6326 60.1899 13.9112C54.7145 4.68654 48.6819 0.0135498 42.2626 0.0135498C31.9235 0.0135498 21.7403 12.3661 13.5805 34.7924C5.48415 57.0541 0.686961 85.7159 0.0750462 115.493L0 118.987H20.7445L20.7849 115.614C21.5902 53.3978 36.4003 13.9372 42.4329 13.9372C46.4969 13.9372 56.8821 41.2618 58.4581 108.913L58.5389 112.246H80.4697L80.5477 108.913C82.1208 41.2618 92.5089 13.9343 96.5729 13.9343C102.608 13.9343 117.413 53.3949 118.221 115.611L118.264 118.987H139L138.934 115.495Z" fill="#FEBE14" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M137.363 115.533C136.757 85.9206 131.989 57.4523 123.95 35.3581C116.157 13.9137 106.239 1.61609 96.7461 1.61609C86.3551 1.61609 76.5702 16.0625 69.5072 41.5272C62.4413 16.0654 52.6536 1.61898 42.2568 1.61898C32.7692 1.61898 22.8487 13.9166 15.0497 35.3552C7.01394 57.4494 2.25139 85.9206 1.64525 115.533L1.60773 117.378H19.1945L19.2147 115.593C20.0316 52.5425 34.9196 12.3282 42.4329 12.3282C48.8695 12.3282 58.5649 45.8767 60.0312 108.87L60.0774 110.64H78.9342L78.9746 108.87C80.4409 45.8796 90.142 12.3282 96.5729 12.3282C104.089 12.3282 118.977 52.5425 119.791 115.593L119.814 117.378H137.401L137.363 115.533Z" fill="#FEBE14" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.0663 6.98512V10.5433C31.8109 11.6177 18.1958 57.513 17.4482 115.57L10.4718 108.425V108.246C12.6886 51.3208 28.1943 7.43856 42.0663 6.98512Z" fill="#FEBE14" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M41.7084 3.45583H42.9004C53.1847 4.14898 62.9724 21.5875 69.4899 48.528V100.589C66.9499 46.8153 55.6468 6.97646 42.2828 6.97646C39.5263 6.97646 36.7005 8.70934 33.9238 11.9267V6.90714C36.5215 4.79014 39.1366 3.60601 41.7084 3.45583ZM101.413 8.5707V13.5585C99.7566 11.5744 98.1229 10.5173 96.5729 10.5173C86.6726 10.5173 78.4954 53.3194 77.2052 108.832L69.513 100.95V100.826C72.0242 46.9337 83.3417 6.97646 96.7259 6.97646C98.273 6.97646 99.8432 7.5252 101.413 8.5707Z" fill="#FEBE14" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M135.571 114.73V115.547L128.577 108.39L128.548 108.419C126.511 55.5808 113.022 13.9397 100.008 7.76781V3.98436C116.674 9.51513 134.217 56.2624 135.568 114.73H135.571Z" fill="#FEBE14" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_42">
                                <rect width="139" height="119" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
                <div className="sDiv">
                    <ul id='normal'>
                        <li> Cardápio </li>
                        <li> App </li>
                        <li> Recompensas </li>
                        <li> McDiaFeliz </li>
                    </ul>
                </div>
                <div className="tDiv">
                    <div className="circleSvg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#FEBE14" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                    </div>

                    <div className="circleSvg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#FEBE14" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </div>

                    <button className='view' onClick={onShowClickBtnMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#FEBE14" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                        </svg>
                    </button>

                    {showMenu &&
                        <div className='menuResponsiveContainer'
                        >
                            <motion.ul id='responsive'
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ ease: "easeOut", duration: 1.5 }}
                                viewport={{ once: true }}>
                                <li> Cardápio </li>
                                <li> App </li>
                                <li> Recompensas </li>
                                <li> McDiaFeliz </li>
                            </motion.ul>
                        </div>
                    }

                </div>
            </div>
        </header>
    )
}