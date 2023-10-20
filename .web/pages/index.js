import { Fragment, useContext, useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { Event, getAllLocalStorageItems, getRefValue, getRefValues, isTrue, preventDefault, refs, spreadArraysOrObjects, uploadFiles, useEventLoop } from "/utils/state"
import { EventLoopContext, initialEvents, StateContext } from "/utils/context.js"
import "focus-visible/dist/focus-visible"
import { Avatar, Box, Button, Center, Flex, Heading, HStack, Link, Modal, ModalBody, ModalContent, ModalHeader, ModalOverlay, Spacer, Text, useColorMode, VStack } from "@chakra-ui/react"
import NextLink from "next/link"
import { ExternalLinkIcon, LinkIcon } from "@chakra-ui/icons"
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
  <HStack sx={{"position": "sticky", "bg": "lightgray", "paddingX": "1em", "paddingY": ".5em", "zIndex": "999", "top": "0"}}>
  <Avatar name={`Francisco Villalba`} size={`sm`} src={`avatar.png`}/>
  <Text>
  {`villalbatech`}
</Text>
</HStack>
  <Center>
  <VStack sx={{"maxWidth": "600px", "width": "100%", "marginY": "1em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`2em`}>
  <Avatar name={`Francisco Villalba`} size={`xl`} src={`avatar.png`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`}>
  {`Fran Villalba`}
</Heading>
  <Text sx={{"marginTop": "0px !important"}}>
  {`@elmurciano`}
</Text>
  <HStack>
  <Link as={NextLink} href={`https://x.com/elmurciano`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon sx={{"width": "1em", "height": "1em"}}/>
</Link>
  <Link as={NextLink} href={`https://facebook.com/franvillalbagarcia`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon sx={{"width": "1em", "height": "1em"}}/>
</Link>
  <Link as={NextLink} href={`https://instagram.com/franvillalba`} isExternal={true} sx={{"textDecoration": "none", "_hover": {}}}>
  <LinkIcon sx={{"width": "1em", "height": "1em"}}/>
</Link>
</HStack>
</VStack>
</HStack>
  <Flex sx={{"width": "100%"}}>
  <Box sx={{"fontSize": ".8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`+25`}
</Text>
  {` años de experiencia`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ".8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`Desarrollador`}
</Text>
  {` Python y Java`}
</Box>
  <Spacer/>
  <Box sx={{"fontSize": ".8em"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "blue"}}>
  {`Full Stack Developer`}
</Text>
  {` JavaScript y React`}
</Box>
</Flex>
  <Text>
  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec augue eget nisl ultrices aliquam. Nulla facilisi. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec augue eget nisl ultrices aliquam. Nulla facilisi. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            `}
</Text>
</VStack>
  <VStack spacing={`.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em"}}>
  {`Comunidad`}
</Heading>
  <Link as={NextLink} href={`http://twitch.tv`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ExternalLinkIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Directos de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`http://youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ExternalLinkIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Tutoriales semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.com/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ExternalLinkIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`El chat de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em"}}>
  {`Cursos`}
</Heading>
  <Link as={NextLink} href={`http://twitch.tv`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ExternalLinkIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Twitch`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Directos de lunes a viernes`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`http://youtube.com`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ExternalLinkIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`YouTube`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`Tutoriales semanales`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
  <Link as={NextLink} href={`https://discord.com/`} isExternal={true} sx={{"width": "100%", "textDecoration": "none", "_hover": {}}}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": ".5em", "borderRadius": "1em"}}>
  <HStack>
  <ExternalLinkIcon sx={{"width": "2em", "height": "2em"}}/>
  <VStack alignItems={`start`}>
  <Text sx={{"fontSize": "1em"}}>
  {`Discord`}
</Text>
  <Text sx={{"fontSize": ".8em"}}>
  {`El chat de la comunidad`}
</Text>
</VStack>
</HStack>
</Button>
</Link>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em"}}>
  <Avatar name={`Francisco Villalba`} size={`md`} src={`avatar.png`}/>
  <Text>
  <Link as={NextLink} href={`http://franvillalbaweb.es`} isExternal={true} sx={{"fontSize": ".8em", "textDecoration": "none", "_hover": {}}}>
  {`© 1995 -2023 villalbatech by Fran Villalba`}
</Link>
</Text>
  <Text sx={{"fontSize": ".8em", "marginTop": "0px !important"}}>
  {`BUILDING SOLUTIONS FOR THE WEB 🕸 AND DESKTOP 💻 SINCE 1995`}
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
