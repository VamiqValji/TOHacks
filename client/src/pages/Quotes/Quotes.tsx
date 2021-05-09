import React from 'react';
import { SimpleGrid, Box, Image, Text} from "@chakra-ui/react"

interface QuotesProps {}

const Quotes: React.FC<QuotesProps> = () => {
    


    return (
    <>
        <SimpleGrid columns={3} spacingX="40px" spacingY="20px" mx="auto" paddingLeft="50px"> 

        <Box boxSize="sm" paddingLeft="50px">
            <Image href="" src="https://media-exp1.licdn.com/dms/image/C4D0BAQHn4aocql7v5g/company-logo_200_200/0/1519875704421?e=2159024400&v=beta&t=yHLBt0uw3z0didNTowbtHKSTrmgfr4POMafuDNRXvHM" alt="Intact Insurance" align="50% 50%;"/>
            <a href="https://www.intact.ca/on/en/personal-insurance/vehicle/car.html" target="_blank"><Text>Intact Insurace</Text> </a>
        </Box>
        
        <Box>
        <Image src="https://engineerscanada.ca/sites/default/files/affinity/tdinsurance_logo_col.png" alt="Intact Insurance" align="50% 50%;"/>
            <a href="https://www.tdinsurance.com/melochemonnex" target="_blank"> <Text >TD Insurace</Text></a>
        </Box>
        

        </SimpleGrid>

    </>);
}

export default Quotes;