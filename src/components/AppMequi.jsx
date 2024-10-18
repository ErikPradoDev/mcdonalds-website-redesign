import './AppMequiModule.sass'
import LogoRed from '../img/logo-red.webp'
import { motion } from 'framer-motion';

export default function AppMequi() {
    return (
        <motion.section className='marginAuto' id='app'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeOut", duration: 1.5 }}
            viewport={{ once: true }}
        >
            <img id='logoRed' src={LogoRed} alt="" width='100px' />
            <div className="">
                <p className="title"> Você já baixou o nosso App? É grátis! </p>
                <p className="txt"> Peça seu delivery, veja o menu, baixe promoções, peça e retire, encontre os
                    restaurantes mais próximos, tenha todos os cupons na sua mão e muito mais.</p>
            </div>
            <div className="lineBtn">
                <button className='btnWhite'> Instalar via App Store</button>
                <button className='btnWhite'> Instalar via Play Store</button>
            </div>
        </motion.section>
    )
}