import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <div className={styles.about}>
            <h1>
              Me chamo Guilherme, tenho 25 anos<br />
              e sou um Desenvolvedor Web Frontend.
            </h1>
            <h4>
              Sou formado em Técnico em Informática (ETEC Jaú),<br />
              e atualmente estou cursando Técnico em Desenvolvimento<br />
              de Sistemas (ETEC Jaú).<br /><br />
              Estou em busca de um estágio ou o primeiro emprego<br />
              como Desenvolvedor Web Frontend Jr.
            </h4>
          </div>
          <div className={styles.imgProfile}>
            <img
              src={`https://github.com/guilhermelima18.png`}
              alt="Foto de perfil"
            />
          </div>
        </main>

        <section>
          <h4>Tecnologias</h4>
          <div className={styles.technology}>
            <span>
              <i style={{color: '#DD4B25'}} className="fab fa-html5"></i>
              HTML5
            </span>
            <span>
              <i style={{color: '#026EB4'}} className="fab fa-css3-alt"></i>
              CSS3<br />
              (Bootstrap, Materialize, Sass)
            </span>
            <span>
              <i style={{color: '#EFD81D'}} className="fab fa-js-square"></i>
              Javascript<br />
              (Jquery, React.JS)
            </span>
            <span>
              <i style={{color: '#CECACA'}} className="fab fa-github-square"></i>
              Git e Github
            </span>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};