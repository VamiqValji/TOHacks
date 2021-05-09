import React from 'react';
import { 
    StackDivider,
    Box, 
    Image,
    Text,   
    Stack,
    Button
        } from "@chakra-ui/react"

interface QuotesProps {}

const Quotes: React.FC<QuotesProps> = () => {
    


    return (
    <>


              
        <Stack direction={["column", "row"]} divider={<StackDivider borderColor="gray.200" opacity="20%" />}>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={"https://www.intactspecialty.com/sites/Corporate/images/logos/Intact-ss.png"}  />

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
            </Box>
        </Box>

      
        
        
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={"https://www.pngkey.com/png/full/265-2654620_td-insurance-td-charitable-foundation-png-logo.png"}  />
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
              <a className="textA" href="https://www.tdinsurance.com/melochemonnex" rel="noreferrer" target="_blank"><Text  >Intact Insurace</Text> </a>
            </Box>
        </Box>

        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={"https://legion.ca/images/default-source/member-logos/logo-belair-en-lk-850-pixels.png?sfvrsn=dbf905f1_0"}  />
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
              <a className="textA" href="https://apps.belairdirect.com/AutoQuote/retrieve/retrievequote.do?method=load&organization_source=belairdirect&language=EN&province=ON&distributor=bel" rel="noreferrer" target="_blank"><Text  >Intact Insurace</Text> </a>
            </Box>
        </Box>
        </Stack>
        <Button className="botButton" colorScheme="teal" size="xs" onClick={()=> window.open("https://www.fsco.gov.on.ca/en/auto/brochures/pages/brochure_claims.aspx", "_blank")}>
             Need More Info?
        </Button>

    </>);
}

export default Quotes;