import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import styles from '../styles/portfolio.module.scss';

export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/guilhermelima18/repos')
      .then(response => response.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h4>Projetos no Github</h4>
        <div className={styles.projects}>
          {
            projects
              .map(({ id, name, description, language }) => {
                return (
                  <div key={id} className={styles.card}>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <footer>
                      <p>{language}</p>
                      <p>
                        <a href={`https://github.com/guilhermelima18/${name}`} target="_blank" rel="noreferrer">Ver mais</a>
                      </p>
                    </footer>
                  </div>
                )
              })
          }
        </div>
      </div>
      <Footer />
    </>
  );
};