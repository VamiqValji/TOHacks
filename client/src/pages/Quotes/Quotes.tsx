import React from 'react';
import { SimpleGrid, Container} from "@chakra-ui/react"

interface QuotesProps {}

const Quotes: React.FC<QuotesProps> = ({}) => {
    


    return (
    <>
        <SimpleGrid columns={3} spacingX="40px" spacingY="20px" mx="auto" > 

        <Container>
  There are many benefits to a joint design and development system. Not only
  does it bring benefits to the design team, but it also brings benefits to
  engineering teams. It makes sure that our experiences have a consistent look
  and feel, not just in our design specs, but in production
</Container>
        </SimpleGrid>

    </>);
}

export default Quotes;