import styles from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <a target="_blank" href="https://github.com/guilhermelima18"><i className="fab fa-github"></i></a>
        <a target="_blank" href="https://www.linkedin.com/in/guilherme-lima-922032114/"><i className="fab fa-linkedin"></i></a>
        <a target="_blank" href="https://www.facebook.com/guilherme.lima1996/"><i className="fab fa-facebook-square"></i></a>
      </div>
      <span>Todos os direitos reservados &copy; 2021</span>
    </footer>
  );
};