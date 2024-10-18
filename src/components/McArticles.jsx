import './McArticlesModule.sass';
import { motion } from 'framer-motion';

export default function McArticles() {
    return (
        <motion.section className="marginAuto"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className="cardArticle">
                <div className="photoSize bigmac">
                </div>
                <div className="txtSize">
                    <div className="">
                        <p className="title"> Na dúvida de qual pedir? Vem com o clássico
                            que não tem erro.  </p>
                        <p className="txt"><br />  Você já conhece a música: <br />
                            Dois hambúrgueres, <br />
                            Alface, queijo, molho especial, <br />
                            Cebola, picles <br />
                            Num pão com gergelim <br />
                            É o <span> Big Mac </span>(Big Mac).  <br /> <br />
                            Tradicional desde 1967, o BigMac® continua sendo um clássico
                            de sucesso! Peça agora pelo App sem sair de casa.
                        </p>
                    </div>
                    <div className="">
                        <button className='btnYellow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000" class="bi bi-phone-fill" viewBox="0 0 16 16">
                                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                            </svg>
                            Pedir pelo App
                        </button>
                    </div>


                </div>
            </div>
            <div className="cardArticle">
                <div className="photoSize mequimil">
                </div>
                <div className="txtSize">
                    <div className="">
                        <p className="title"> Junta a galera, vem pro Méqui 1000! </p>
                        <p className="txt"> <br /> O Méqui 1000, localizado no casarão da Paulista, é a 1.000ª
                            unidade da rede no Brasil! <br />
                            O ambiente proporciona uma experiência única para os fanáticos
                            fãs do Méqui, construído com um design moderno e um ambiente
                            totalmente interativo, incluindo telas digitais e uma atmosfera
                            voltada para a sua experiência. <br /> <br />

                            Está esperando o que? Junta com a galera e vem pro méqui 1000! <br /> <br />

                            <span>McDica:</span> Poste uma foto e marca @Méqui1000 nas redes sociais
                            e ganhe uma batata grande de brinde!
                        </p>
                    </div>
                    <div className="">
                        <button className='btnYellow'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#000" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                            </svg>

                            Endereço Méqui 1000
                        </button>
                    </div>


                </div>
            </div>
        </motion.section>
    )
}