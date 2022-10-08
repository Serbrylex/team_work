import { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

import {
  Main, Title, Description, GetStart, StartButton, HowToStartButton, Image,

  ConnectContainer, SectionTitle, SectionDescription, CarrouselContainer,
  ConnectDevelopers, EachTool, ToolDescription, ToolName, ToolsDesc, 
  ArrowButtonLeft, ArrowButtonRight
} from '../styles/Home'

// Assets
import {
  SiNotion, SiSlack, SiTrello, SiDiscord
} from 'react-icons/si'

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from 'react-icons/io'

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
        <Image src="https://www.elsoldemexico.com.mx/doble-via/or4grl-spacex-sn8-starship-test-prueba-1.jpg/ALTERNATES/LANDSCAPE_768/spacex%20sn8%20starship%20test%20prueba%20(1).jpg" alt="font image" />
      </Main>
      {/*<Sync></Sync>
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
      <footer>
        holaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      </footer>
    </>
  )
}

export default Home
