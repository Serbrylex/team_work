import Link from 'next/link'
import React, { useState } from 'react'

import {
    Head, Logo, Directions, 
    ProfileButtons, Button, ProfileDes
} from './styles'

const Header = () => {
    
    const [showProfile, setShowProfile] = useState(false)    

    return (
        <Head>
            <Logo>🤩 TEAM WORK</Logo>
            <Directions>
                <Link href="#">Explore Projects</Link>
                <Link href="#">Find Devs</Link>
                <Link href="#">Create Project</Link>
            </Directions>
            <ProfileButtons>
                {showProfile ? 
                    <ProfileDes>
                    <i>🐱‍👤</i> Serbrylex
                    </ProfileDes>:
                    <>
                        <Button>Log In</Button>
                        <Button>Sign Up</Button>
                    </>
                }
            </ProfileButtons>
        </Head>
    )
}

export default Header