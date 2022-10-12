import { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

import {
  Main, Title, Description, GetStart, StartButton, HowToStartButton, Image,

  ConnectContainer, SectionTitle, SectionDescription, CarrouselContainer,
  ConnectDevelopers, EachTool, ToolDescription, ToolName, ToolsDesc, 
  ArrowButtonLeft, ArrowButtonRight,

  FindDeveloperSection, PerfilDescription, Perfil, PerfilImage, PerfilLeft, PerfilData,

  JoinToProjects, ProjectsContainer, ProjectCard, ProjectName, ProjectInf, ProjectDevs, Areas
} from '../styles/Home'

// Assets
import {
  SiNotion, SiSlack, SiTrello, SiDiscord
} from 'react-icons/si'

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ['React.js', 'Design', 'HTML 5', 'CSS 3', 'TypeScript', 'Next.js'],
  datasets: [
    {
      label: 'Frontend Developer',
      data: [2, 9, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
  // <Radar data={data} />
};


const Home: NextPage = () => {
  // This works perfectly, but still existing some logical errors
  const [current, setCurrent] = useState(0)
  const move = (direction: number) => {    
    // direction == 0 -> left else right
    const elem = document.getElementById('Carrousel')?.childNodes
    //elem.clientWidth    
    if (elem !== undefined) {
      if (direction === 1) {
        elem[current+3].scrollIntoView({ behavior: 'smooth'});
        elem?.length > current + 3 ? setCurrent(current+3) : null
      } else if (direction === 0 && current > 0) {
        elem[current-3].scrollIntoView({ behavior: 'smooth'});
        elem?.length < current - 3 ? setCurrent(current-3) : null
      }
    }

  }

  const imageTest = "https://www.elsoldemexico.com.mx/doble-via/or4grl-spacex-sn8-starship-test-prueba-1.jpg/ALTERNATES/LANDSCAPE_768/spacex%20sn8%20starship%20test%20prueba%20(1).jpg"

  return (
    <>
      <Header />
      <Main>
        <Title>Find Your First Real Team Of Developers And Organize Your Work As A Pro</Title>
        <Description>
          This space is created for you, because we pass the 
          same path that you are goind trouth right now
          and we want to make this easies for you. Perfect to 
          made Networking.
        </Description>
        <GetStart>
          <StartButton>Get Started</StartButton>
          <HowToStartButton>How It Workd?</HowToStartButton>
        </GetStart>
        <Image src={imageTest} alt="font image" />
      </Main>
      {/*
      <FindProjects></FindProjects>
      <SyncTools></SyncTools>
      <QandA></QandA>*/}
      <ConnectContainer>
        <SectionTitle>Sync With Your Favorite Tools</SectionTitle>
        <SectionDescription>    
          Smart Integrations To Make Easiest Work With Your New Team      
        </SectionDescription>
        <CarrouselContainer>
          <ArrowButtonLeft>
            <IoIosArrowDropleftCircle onClick={()=>move(0)}/>
          </ArrowButtonLeft>
          <ArrowButtonRight>
            <IoIosArrowDroprightCircle onClick={()=>move(1)}/>
          </ArrowButtonRight>
          <ConnectDevelopers id="Carrousel">
            <EachTool>
              <SiNotion />
              <ToolDescription>
                <ToolName>GitHub</ToolName>
                <ToolsDesc>Connect your current repository</ToolsDesc>
              </ToolDescription>
            </EachTool>

            <EachTool>
              <SiSlack />
              <ToolDescription>
                <ToolName>Slack</ToolName>
                <ToolsDesc>Keep in touch with your team</ToolsDesc>
              </ToolDescription>
            </EachTool>

            <EachTool>
              <SiTrello />
              <ToolDescription>
                <ToolName>Trello</ToolName>
                <ToolsDesc>Set reall goals</ToolsDesc>
              </ToolDescription>
            </EachTool>

            <EachTool>
              <SiDiscord />
              <ToolDescription>
                <ToolName>Discord</ToolName>
                <ToolsDesc>Keep in touch with your team</ToolsDesc>
              </ToolDescription>
            </EachTool>
          </ConnectDevelopers>
        </CarrouselContainer>
      </ConnectContainer>
      <FindDeveloperSection>
        <SectionTitle>Find Developers In Base Of Your Needs</SectionTitle>        
        <PerfilDescription>
          <Perfil>
            <PerfilLeft>          
              <PerfilImage src={imageTest} alt="profile image" />
              <p>Serbrylex</p>
            </PerfilLeft>
            <PerfilData>
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=serbrylex&layout=compact&theme=dracula" alt="asdf"/>
            </PerfilData>
          </Perfil>
          <Perfil>
            <PerfilLeft>          
              <PerfilImage src={imageTest} alt="profile image" />
              <p>Serbrylex</p>
            </PerfilLeft>
            <PerfilData>
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=serbrylex&layout=compact&theme=dracula" alt="asdf"/>
            </PerfilData>
          </Perfil>
          <Perfil>
            <PerfilLeft>          
              <PerfilImage src={imageTest} alt="profile image" />
              <p>Serbrylex</p>
            </PerfilLeft>
            <PerfilData>
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=serbrylex&layout=compact&theme=dracula" alt="asdf"/>
            </PerfilData>
          </Perfil>
          <Perfil>
            <PerfilLeft>          
              <PerfilImage src={imageTest} alt="profile image" />
              <p>Serbrylex</p>
            </PerfilLeft>
            <PerfilData>
              <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=serbrylex&layout=compact&theme=dracula" alt="asdf"/>
            </PerfilData>
          </Perfil>
        </PerfilDescription>
      </FindDeveloperSection>
      <JoinToProjects>
          <SectionTitle>Join To An Exist Project</SectionTitle>
          <ProjectsContainer>
            <ProjectCard>
              <ProjectName>Super Web</ProjectName>
              <ProjectInf>
                <p>State: Process</p> <p>Members: 32/40</p>
              </ProjectInf>
              <ProjectDevs>
                <Areas>
                  Frontend: <b>10/15</b>
                </Areas>
                <Areas>
                  Backend: <b>12/15</b>
                </Areas>
                <Areas>
                  Designer: <b>10/10</b>
                </Areas>
              </ProjectDevs>
            </ProjectCard>
            <ProjectCard className="className">
              <ProjectName>Super Web</ProjectName>
              <ProjectInf>
                <p>State: Process</p> <p>Members: 32/40</p>
              </ProjectInf>
              <ProjectDevs>
                <Areas>
                  Frontend: <b>10/15</b>
                </Areas>
                <Areas>
                  Backend: <b>12/15</b>
                </Areas>
                <Areas>
                  Designer: <b>10/10</b>
                </Areas>
              </ProjectDevs>
            </ProjectCard>
            <ProjectCard>
              <ProjectName>Super Web</ProjectName>
              <ProjectInf>
                <p>State: Process</p> <p>Members: 32/40</p>
              </ProjectInf>
              <ProjectDevs>
                <Areas>
                  Frontend: <b>10/15</b>
                </Areas>
                <Areas>
                  Backend: <b>12/15</b>
                </Areas>
                <Areas>
                  Designer: <b>10/10</b>
                </Areas>
              </ProjectDevs>
            </ProjectCard>
          </ProjectsContainer>
      </JoinToProjects>
      <footer>
        holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </footer>
    </>
  )
}

export default Home
