import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  aling-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(360deg);
    transition: transform 0.5s ease-in-out;
    // transform: rotate(20deg);
  }
`

const Logo = () => {
  const b_logo = `/images/B_logo${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image src={b_logo} alt="logo" width={20}  height={20}/>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c'
          fontWeight='bold'
          ml={3}
        >
          Bcondict
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo

