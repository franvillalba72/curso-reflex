import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Image, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import NextHead from "next/head"



export default function Component() {
  const state = useContext(StateContext)
  const router = useRouter()
  const { colorMode, toggleColorMode } = useColorMode()
  const focusRef = useRef();
  
  // Main event loop.
  const [addEvents, connectError] = useContext(EventLoopContext)

  // Set focus to the specified element.
  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  })

  // Route after the initial page hydration.
  useEffect(() => {
    const change_complete = () => addEvents(initialEvents.map((e) => ({...e})))
    router.events.on('routeChangeComplete', change_complete)
    return () => {
      router.events.off('routeChangeComplete', change_complete)
    }
  }, [router])


  return (
    <Fragment>
  <Fragment>
  {isTrue(connectError !== null) ? (
  <Fragment>
  <Modal isOpen={connectError !== null}>
  <ModalOverlay>
  <ModalContent>
  <ModalHeader>
  {`Connection Error`}
</ModalHeader>
  <ModalBody>
  <Text>
  {`Cannot connect to server: `}
  {(connectError !== null) ? connectError.message : ''}
  {`. Check if server is reachable at `}
  {`http://localhost:8000`}
</Text>
</ModalBody>
</ModalContent>
</ModalOverlay>
</Modal>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  <Box>
  <HStack sx={{"position": "sticky", "bg": "#171F26", "paddingX": "1em", "paddingY": "1em", "zIndex": "999", "top": "0"}}>
  <Box sx={{"fontFamily": "Comfortaa", "fontSize": "1.5em"}}>
  <Text as={`span`} sx={{"color": "#14A1F0"}}>
  {`villalba`}
</Text>
  <Text as={`span`} sx={{"color": "#087EC4"}}>
  {`dev`}
</Text>
</Box>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "2em", "padding": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`2em`}>
  <Avatar name={`Francisco Villalba`} size={`xl`} src={`avatar.png`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4"}}>
  {`Francisco Villalba`}
</Heading>
  <Text sx={{"marginTop": "0px !important", "color": "#C3C7CB"}}>
  {`@elmurciano`}
</Text>
  <HStack sx={{"color": "#C3C7CB"}}>
  <Link as={NextLink} href={`https://twitter.com/elmurciano`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/x-twitter.svg`} sx={{"width": "1em", "height": "1em"}}/>
</Link>
  <Link as={NextLink} href={`https://facebook.com/franvillalbagarcia`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/facebook.svg`} sx={{"width": "1em", "height": "1em"}}/>
</Link>
  <Link as={NextLink} href={`https://instagram.com/franvillalba`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <Image src={`icons/instagram.svg`} sx={{"width": "1em", "height": "1em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+25`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`Desarrollador`}
</Text>
  {` Python y Java`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`Full Stack Developer`}
</Text>
  {` JavaScript y React`}
</Box>
</Flex>
  <Text sx={{"color": "#C3C7CB"}}>
  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec augue eget nisl ultrices aliquam. Nulla facilisi. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec augue eget nisl ultrices aliquam. Nulla facilisi. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            `}
</Text>
</VStack>
  <VStack spacing={`.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`http://twitch.tv`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "color": "#F1F2F4", "background-color": "#171F26", "_hover": {"background-color": "#087EC4"}}}>
  <HStack>
  <Image src={`icons/twitch.svg`} sx={{"width": "2em", "height": "2em", "margin": ".8em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0px !important"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`Directos de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`http://youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "color": "#F1F2F4", "background-color": "#171F26", "_hover": {"background-color": "#087EC4"}}}>
  <HStack>
  <Image src={`icons/youtube.svg`} sx={{"width": "2em", "height": "2em", "margin": ".8em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0px !important"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`Tutoriales semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.com/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "color": "#F1F2F4", "background-color": "#171F26", "_hover": {"background-color": "#087EC4"}}}>
  <HStack>
  <Image src={`icons/twitch.svg`} sx={{"width": "2em", "height": "2em", "margin": ".8em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0px !important"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`El chat de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4"}}>
  {`Contacto`}
</Heading>
  <Link as={NextLink} href={`mailto:francisco.villalba@franvillalbaweb.es`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em", "color": "#F1F2F4", "background-color": "#171F26", "_hover": {"background-color": "#087EC4"}}}>
  <HStack>
  <Image src={`icons/email.svg`} sx={{"width": "2em", "height": "2em", "margin": ".8em"}}/>
  <VStack alignItems={`start`} spacing={`.5em`} sx={{"margin": "0px !important"}}>
  <Text sx={{"fontSize": "1em", "color": "#F1F2F4"}}>
  {`Email`}
</Text>
  <Text sx={{"fontSize": ".8em", "color": "#C3C7CB"}}>
  {`francisco.villalba@franvillalbaweb.es`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em", "paddingBottom": "2em", "color": "#A3ABB2"}}>
  <Avatar name={`Francisco Villalba`} size={`md`} src={`avatar.png`}/>
  <Text>
  <Link as={NextLink} href={`http://franvillalbaweb.es`} isExternal={true} sx={{"fontSize": ".8em", "textDecoration": "none", "_hover": {}}}>
  {`© 1995 -2023 villalbadev | Francisco Villalba`}
</Link>
</Text>
  <Text sx={{"fontSize": ".8em", "marginTop": "0px !important"}}>
  {`✨ Making your dreams come true since 1995`}
</Text>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Reflex App`}
</title>
  <meta content={`A Reflex app.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
