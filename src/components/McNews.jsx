import './McNewsModule.sass';
import { motion } from 'framer-motion';

export default function McNews() {
    return (
        <motion.section id="mcNews" className='marginAuto'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            viewport={{ once: true }}
        >
            <div className="cardContainer">
                <div className="photoSize tasty">
                </div>
                <div className="txtSize">
                    <p className='title'> Ronald McDonald está doido! O Tasty agora
                        é turbo! </p>

                    <p className='txt'> Chegou o novo Tasty Turbo. Delicioso como sempre, e
                        agora, turbinado com 50% mais carne e o delicioso molho
                        tasty.</p>
                </div>

                <button className='btnYellow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                    Pedir pelo App
                </button>


            </div>
            <div className="cardContainer">
                <div className="photoSize brabos">
                </div>
                <div className="txtSize">
                    <p className='title'> Chegaram os Novos Brabos, especiais
                        para os dias de glória. </p>

                    <p className='txt'> Chega dos dias de lutas, os dias de glória chegaram!
                        Comemore com o Novo Brabo ClubHouse e o novo
                        Brabo Melt Onion Rings.</p>
                </div>

                <button className='btnYellow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="#000" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                    Pedir pelo App
                </button>


            </div>
            <div className="cardContainer">
                <div className="photoSize kopenhagen">
                </div>
                <div className="txtSize">
                    <p className='title'> O novo McFlurry Choco&Cream
                        Kopenhagen veio pra ficar. </p>

                    <p className='txt'> Essa exclusividade você só encontra aqui! Essa reunião
                        de ingredientes te promete um sabor único e totalmente
                        inesquecível.</p>
                </div>

                <button className='btnYellow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="#000" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                    Pedir pelo App
                </button>


            </div>
            <div className="cardContainer">
                <div className="photoSize diamante">
                </div>
                <div className="txtSize">
                    <p className='title'> É mais que satisfatório. É extremamente
                        chcrocantemente. </p>

                    <p className='txt'> O McFlurry Chocorante com Diamante Negro chegou
                        trazendo toda aquela cresmosidade da messa com
                        pedacinhos de Diamante Negro.</p>
                </div>

                <button className='btnYellow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"  fill="#000" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                    Pedir pelo App
                </button>


            </div>
        </motion.section>
    )
}