import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    text-align: center;
    margin-top: 50px;
`

export const Title = styled.h1`
    font-size: 30px;
    width: 50%;
`

export const Description = styled.p`
    width: 40%;
    margin: 20px 0;
`

export const GetStart = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > button{
        border-radius: 5px;
        border: none;
        padding: 5px 10px;
    }
`

export const StartButton = styled.button`
    background-color: #00A6FB;
`

export const HowToStartButton = styled.button`
`
export const Image = styled.img`
    width: 80%;
    height: auto;
    margin: 20px auto;
`

// Stack of tools Carrousel

export const ConnectContainer = styled.section`
    display: flex;
    flex-direction: column;  
    align-items: center;
    text-align: center;  
`
export const SectionTitle = styled.h2`
    width: 500px;    
`
export const SectionDescription = styled.p`
    width: 300px;
`
export const CarrouselContainer = styled.div`
    width: 80%;
    height: 100px;
    position: relative;
    margin: 20px auto;
`

export const ConnectDevelopers = styled.div`
    width: 100%;
    height: 100%;    
    border: 1px solid white;
    background-color: #051923;
    display: flex;
    border-radius: 20px;
    
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    
    /* Vamos a añadir esto 👇 */
    scroll-snap-type: x mandatory;
    
    ::-webkit-scrollbar {
        display: none;
    }    
`
export const ArrowButtonLeft = styled.div`
    position: absolute;
    z-index: 3;
    font-size: 50px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: black;
    top: 0;
    bottom: 0;
    left: -25px;
    margin: auto 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ArrowButtonRight = styled.div`
    position: absolute;
    z-index: 3;
    font-size: 50px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: -25px;
    margin: auto 0;
`
    
export const EachTool = styled.div`    
    width: auto;
    height: auto;    
    display: flex;
    margin: auto 20px;
    font-size: 20px;
    text-align: start;
    
    background-color: white;
    border-radius: 10px;
    padding: 5px 10px;
    color: black;
`
export const ToolDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
export const ToolName = styled.h3`
    font-size: 17px;
    margin: 0;
`
export const ToolsDesc = styled.p`
    font-size: 15px;
    margin: 5px 0;
    width: 300px;
`