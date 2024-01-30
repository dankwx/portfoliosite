import "../../assets/styles/reset.css"; // reset css
import styles from "./Home.module.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PasswordProtection from "../PasswordProtection";
import experienceIco from "../../assets/experience.png";
import efficiencyIco from "../../assets/efficiency.png";
import githubIcon from "../../assets/github-white.png";
import websiteIco from "../../assets/website-white.png";
import minePrint from "../../assets/print.png";
import reactICo from "../../assets/react.png";
import luaIco from "../../assets/lua.png";
import {useState} from 'react';
import React from "react";

export default function Home() {
  
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  
  
  return (
    <div className={styles.mainWrapper}>
      <PasswordProtection correctPassword={"danielzika@12"}>
        <Navbar />
        <div className={styles.home}>
          <div className={styles.description}>
            <a>Daniel Kondlatsch</a>
            <a className={styles.descriptionSmall}>Front-End Developer</a>
            {/* {/* <a>Web</a> */}
          </div>
          <div className={styles.resume}>
            <div className={styles.resumeDescription}>
              <p>
                Comprometido com a programação, segurança web, experiência de usuário
                e acessibilidade
              </p>
              <hr />
            </div>
          </div>
          <div className={styles.badgesWrapper}>
            <div className={styles.badgeItem} onClick={handleModalOpen}>
            <img className={styles.badgeIco} src={experienceIco} alt="" />
            <p className={styles.experienceModal}>1 Ano de Experiência no Mercado</p>
            </div>
             {/* Renderize o Modal com as informações desejadas */}
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={handleModalClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.closeButton} onClick={handleModalClose}>
              {/* botao de fechar  &times; */}Fechar
            </span>
            <p className={styles.modalTitle}>Minhas experiências de trabalho</p>
            <p className={styles.modalDescription}>Trabalhei 1 ano como desenvolvedor Front-End na Compass.uol,
            uma empresa de inovação tecnológica. Minha tarefas, em detalhe, foram:
            </p>
            
            <div className={styles.experienceWrapper}>
            <img
                src="https://funlec.com.br/wp-content/uploads/2023/09/Logo_Poliedro_Horiz_SIST_ENSINO.png"
                alt=""
              />
            <p className={styles.experienceTitle}>Shadow na equipe da Poliedro</p>
            
            <p className={styles.experienceDescription}> Atuei por <strong>6 meses</strong> como shadow
            da equipe da Poliedro, onde fiz pequenas correções e implementações de features simples
            no sistema de livros PDF e provas online que o sistema de educação online Poliedro
            providencia. <br />Usei <strong>React</strong>, <strong>Styled Components</strong> e   
            <strong> Scrum</strong> como metodologia ágil pelo sistema
            <strong> Azure DevOps</strong> (Kanbam, Pipelines e Git) da Microsoft.
            <hr />
            </p>
            </div>
            <div className={styles.experienceWrapper}>
            <img
                src="https://logodownload.org/wp-content/uploads/2017/11/sicredi-logo-1.png"
                alt=""
              />
            <p className={styles.experienceTitle}>Front-end Developer na equipe da Sicredi</p>
            
            <p className={styles.experienceDescription}> Atuei por <strong>6 meses</strong> como
            desenvolvedor Front-end na equipe da Sicredi, migrando seu projeto inteiramente em
            <strong> Angular</strong>, para React. Também criei pequenas features nas páginas de consulta por CPF.
            Utilizei <strong>React</strong>, <strong>Styled Components</strong> com versionamento e controle de Pipelines pelo <strong>GitLab</strong>,
            também utilizei <strong>Scrum</strong> como metodologia ágil da equipe.
            </p>
            </div>
          </div>
        </div>
      )}
            <div className={styles.badgeItem}>
              <img className={styles.badgeIco} src={efficiencyIco} alt="" />
              <p>Projetos Pessoais com Casos Reais</p>
            </div>
          </div>
          <div className={styles.aboutWrapper}>
            <div className={styles.profileSection}>
              <img
                src="https://i.pinimg.com/564x/b7/b3/c4/b7b3c4d875429de1696f17a32b5eb253.jpg"
                alt=""
              />
            </div>
            <div className={styles.aboutDescription}>
            <p>
              Estou criando sites para a internet, para meus jogos favoritos e
              para meus familiares desde 2012. Após começar minha graduação em 
              Engenharia de Software e conseguir minha primeira experiência
              no mercado como desenvolvedor React, fiquei mais maduro em
              questões de acessibilidade e segurança em páginas. Também
              consolidou ainda mais minha vontade de continuar desenvolvendo
              projetos na área de tecnologia
            </p>
            </div>
            
          </div>
          <div className={styles.projectsWrapper}>
            <div className={styles.titleSection}>
              <h1>Projetos</h1>
            </div>
            <div className={styles.projectItem}>
              <div className={styles.sectionLeft}>
                <p>Minecraft Smart Hub</p>
                <div className={styles.projectLinks}>
                  <div className={styles.linkItem}>
                    <img src={githubIcon} alt="" />
                    <a
                      href="https://github.com/dankwx/minecraft-irl-interaction"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a
                      href="https://www.google.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className={styles.projectDescription}>
                  <p>
                    Meu projeto mais ambicioso. Este projeto permite a interação
                    de um mundo no Minecraft com a internet. Uma Smart House, só
                    que no Minecraft
                  </p>
                  <div className={styles.projectBadges}>
                    <div className={styles.badgeItem}>
                      <img src={reactICo} alt="" />
                      <p>React.js</p>
                    </div>
                    <div className={styles.badgeItem}>
                      <img src={luaIco} alt="" />
                      <p>Lua</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sectionRight}>
                <img src={minePrint} alt="" />
              </div>
            </div>
            <div className={styles.projectItem}>
              <div className={styles.sectionLeft}>
                <p>CopiaCola</p>
                <div className={styles.projectLinks}>
                  <div className={styles.linkItem}>
                    <img src={githubIcon} alt="" />
                    <a
                      href="https://github.com/dankwx/minecraft-irl-interaction"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a
                      href="https://www.google.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className={styles.projectDescription}>
                  <p>
                    Projeto feito para uma necessidade. Facilita a transferência
                    de textos por telefone a computador e vice-versa, mantendo a
                    estrutura do texto.
                  </p>
                  <div className={styles.projectBadges}>
                    <div className={styles.badgeItem}>
                      <img src={reactICo} alt="" />
                      <p>React.js</p>
                    </div>
                    <div className={styles.badgeItem}>
                      <img src={luaIco} alt="" />
                      <p>Lua</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sectionRight}>
                <img src="https://picsum.photos/1000/1200" alt="" />
              </div>
            </div>
            <div className={styles.projectItem}>
              <div className={styles.sectionLeft}>
                <p>Diário</p>
                <div className={styles.projectLinks}>
                  <div className={styles.linkItem}>
                    <img src={githubIcon} alt="" />
                    <a
                      href="https://github.com/dankwx/minecraft-irl-interaction"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                  <div className={styles.linkItem}>
                    <img src={websiteIco} alt="" />
                    <a
                      href="https://www.google.com.br/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </div>
                </div>
                <div className={styles.projectDescription}>
                  <p>
                    Um projeto simples que fiz a um tempo atrás usando React,
                    para eu guardar anotações e pensamentos, não contém
                    informações pessoais ou sensíveis.
                  </p>
                  <div className={styles.projectBadges}>
                    <div className={styles.badgeItem}>
                      <img src={reactICo} alt="" />
                      <p>React.js</p>
                    </div>
                    <div className={styles.badgeItem}>
                      <img src={luaIco} alt="" />
                      <p>Lua</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sectionRight}>
                <img src="https://picsum.photos/1000/1300" alt="" />
              </div>
            </div>
          </div>
          <div className={styles.slideWrapper}></div>
          <Footer />
        </div>
      </PasswordProtection>
    </div>
  );
}
