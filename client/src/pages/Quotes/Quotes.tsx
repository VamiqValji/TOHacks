import React from 'react';
import { 
    StackDivider,
    Box, 
    Image,
    Text,   
    Stack,
    Button,
    Flex,
    Heading,
        } from "@chakra-ui/react"
import PleaseLogin from '../../components/pleaseLogin/PleaseLogin';
import { usersInterface } from '../../ts/interface/userInterface';
import { useSelector } from 'react-redux';
import { SearchIcon } from '@chakra-ui/icons';

interface QuotesProps {}


const Quotes: React.FC<QuotesProps> = () => {

    
    const userState:usersInterface = useSelector((state:any) => state.user);

    if (userState.userId === "") {
        return <PleaseLogin />;
    }
    
    return (
    <>  
        <Flex justifyContent={"center"} m={8}>
            <Heading size="2xl">Quotes</Heading>
        </Flex>
        <Stack className = "container" mt = {"30px"} direction={["column", "row"]} divider={<StackDivider borderColor="gray.200" opacity="20%" />} spacing={12} width = {"75vw"} >
   
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" ml={"46px"}>
      <Image className="whiteFilterDropShadow" p ={"3"}src={"https://www.intactspecialty.com/sites/Corporate/images/logos/Intact-ss.png"} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
              </Box>
              </Box>
              <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/5_stars.svg/1200px-5_stars.svg.png"} />
              </Box>
              <Box>
              <a className="textA" href="https://www.intact.ca/on/en/personal-insurance/vehicle/car.html" rel="noreferrer" target="_blank"><Text  >Intact Insurace</Text> </a>
              <Flex justifyContent={"center"}> <Text  mb={"auto"} pl ={"20px"}>Phone Number: 1-833-251-2128</Text> </Flex>
            </Box>
        </Box>

      
        
        
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image p ={"3"} src={"https://www.pngkey.com/png/full/265-2654620_td-insurance-td-charitable-foundation-png-logo.png"}  filter = {"drop-shadow(0 0 0.75rem green)"}/>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
              </Box>
              </Box>
              <Image src={"https://upload.wikimedia.org/wikipedia/commons/f/fa/Star_rating_4_of_5.png"} />
              </Box>
              <Box>
              <a className="textA" href="https://www.tdinsurance.com/melochemonnex" rel="noreferrer" target="_blank"><Text  >TD Insurace</Text> </a>
              
              <Flex justifyContent={"center"}>  <Text mb={"auto"} pl ={"20px"}>Phone Number: 1-877-777-7136</Text></Flex>
            </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image p ={"3"} src={"https://legion.ca/images/default-source/member-logos/logo-belair-en-lk-850-pixels.png?sfvrsn=dbf905f1_0"}  />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
              </Box>
              </Box>
              <Image src={"https://upload.wikimedia.org/wikipedia/commons/e/eb/Star_rating_3.5_of_5.png"} />
              </Box>
              <Box>
              <a className="textA" href="https://apps.belairdirect.com/AutoQuote/retrieve/retrievequote.do?method=load&organization_source=belairdirect&language=EN&province=ON&distributor=bel" rel="noreferrer" target="_blank"><Text  >Belairdirect Insurace</Text> </a>
              <Flex justifyContent={"center"}> <Text mb={"0px"} pl ={"20px"}>Phone Number: 1-833-938-3475</Text> </Flex>
            </Box>
        </Box>
        
        </Stack>
        <Button rightIcon={<SearchIcon />} className="botButton" mcolorScheme="teal" mt={"30px"} size="md" onClick={()=> window.open("https://www.fsco.gov.on.ca/en/auto/brochures/pages/brochure_claims.aspx", "_blank")}>
             Need More Info?
        </Button>

    </>);
}

export default Quotes;