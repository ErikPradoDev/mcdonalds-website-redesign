
import Header from './components/Header';
import WelcomeBanner from './img/welcome-banner.png'
import LineDct from './components/LineDct';
import McNews from './components/McNews';
import McArticles from './components/McArticles';
import AppMequi from './components/AppMequi';
import Footer from './components/Footer';
import './AppModule.sass';
import { motion } from 'framer-motion';

function App() {
  return (
    <main>
      <Header />
      <motion.section id='welcome' className='marginAuto'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src={WelcomeBanner} alt="" width='100%' />
        <div className='infoWelcome'>
          <p className='title'> Pega essa dica: </p>
          <p className='txt'> Peça seu Méqui pelo McDelivery <br /> ou Peça e Retire.</p>
          <button className='btnWhite'> Clique Aqui! </button>
        </div>
      </motion.section>

      <LineDct />

      <McNews />

      <LineDct />

      <McArticles />

      <LineDct />

      <AppMequi />

      <Footer />


    </main>
  )
}

export default App
