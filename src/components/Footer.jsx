import './FooterModule.sass'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    const [showWhoAre, setShowWhoAre] = useState(false);

    const onShowClickBtnWhoAre = () => {
        if (showWhoAre == false) {
            setShowWhoAre(true);
        } else setShowWhoAre(false);
    };

    const [showContact, setShowContact] = useState(false);

    const onShowClickBtnContact = () => {
        if (showContact == false) {
            setShowContact(true);
        } else setShowContact(false);
    };

    const [showMequi, setShowMequi] = useState(false);

    const onShowClickBtnMequi = () => {
        if (showMequi == false) {
            setShowMequi(true);
        } else setShowMequi(false);
    };

    const [showFamily, setShowFamily] = useState(false);

    const onShowClickBtnFamily = () => {
        if (showFamily == false) {
            setShowFamily(true);
        } else setShowFamily(false);
    };


    return (
        <motion.footer className="marginAuto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            viewport={{ once: true }}>

            <div className="lineDctFooter"></div>
            <div className="infoColumnResponsive">
                <button onClick={onShowClickBtnWhoAre}> Quem Somos  </button>

                {showWhoAre &&
                    <motion.div className="containerInfo"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <ul>
                            <li> Institucional </li>
                            <li> Franquias </li>
                            <li> Trabalhe Conosco </li>
                            <li> Privacidade </li>
                            <li> Desenvolvimento Sustentável e Compromisso Social </li>
                            <li> Potas Abertas </li>
                            <li> Publicidade Responsável </li>
                        </ul>
                    </motion.div>
                }

                <button onClick={onShowClickBtnFamily}> Família  </button>

                {showFamily &&
                    <motion.div className="containerInfo"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <ul>
                            <li> Lançamentos </li>
                            <li> McLanche Feliz </li>
                            <li> Méqui Box </li>
                            <li> Compromissos com as Famílias </li>
                        </ul>
                    </motion.div>
                }


                <button onClick={onShowClickBtnMequi}> Méqui Pra Você  </button>
                {showMequi &&
                    <motion.div className="containerInfo"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <ul>
                            <li> App do Méqui </li>
                            <li> McDelivery </li>
                            <li> Méqui no iFood </li>
                            <li> Peça e Retire </li>
                            <li> Gift Card </li>
                            <li> Méqui Zap </li>
                            <li> Drive-Thru </li>
                            <li> Use Méqui </li>
                        </ul>
                    </motion.div>
                }

                <button onClick={onShowClickBtnContact}> Contato  </button>
                {showContact &&
                    <motion.div className="containerInfo"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ ease: "easeOut", duration: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <ul>
                            <li> Contato </li>
                        </ul>
                    </motion.div>
                }

            </div>

            <div className='infoColumn'>
                <div className='column'>
                    <p className='title'> Quem Somos </p>
                    <ul>
                        <li> Institucional </li>
                        <li> Franquias </li>
                        <li> Trabalhe Conosco </li>
                        <li> Privacidade </li>
                        <li> Desenvolvimento Sustentável e Compromisso Social </li>
                        <li> Potas Abertas </li>
                        <li> Publicidade Responsável </li>
                    </ul>
                </div>
                <div className='column'>
                    <p className='title'> Família </p>
                    <ul>
                        <li> Lançamentos </li>
                        <li> McLanche Feliz </li>
                        <li> Méqui Box </li>
                        <li> Compromissos com as Famílias </li>
                    </ul>
                </div>
                <div className='column'>
                    <p className='title'> Méqui pra Você </p>
                    <ul>
                        <li> App do Méqui </li>
                        <li> McDelivery </li>
                        <li> Méqui no iFood </li>
                        <li> Peça e Retire </li>
                        <li> Gift Card </li>
                        <li> Méqui Zap </li>
                        <li> Drive-Thru </li>
                        <li> Use Méqui </li>
                    </ul>
                </div>
                <div className='column'>
                    <p className='title'> Contato </p>
                    <ul>
                        <li> Contato</li>
                    </ul>
                </div>


            </div>



            <div className="lineDctFooter"></div>
            <div className="info">
                <div className="fDiv">
                    <p className="txt"> Privacidade </p>
                    <p className="txt"> Termos e Condições </p>
                </div>

                <div className="sDiv">
                    <p className="txt">  	&copy; McDonald's 2024 </p>
                </div>
            </div>
        </motion.footer>
    )
}