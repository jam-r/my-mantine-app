import {
  Center,
  Container,
  Grid,
  SimpleGrid,
} from "@mantine/core";
import { ContainedInputs } from "./ContainedInputs";
import { PhotoDetail } from "./PhotoDetail";



function Detail() {

  return ( 
    <Container>
      <Center>
      <SimpleGrid  cols={2} spacing="md" breakpoints={[{ maxWidth: 'xs', cols: 1 }]} >
        <PhotoDetail ></PhotoDetail>
        <Grid gutter="md" justify="space-around">
          <Grid.Col >
            <ContainedInputs></ContainedInputs>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
      </Center>
    </Container>
  )
}

export default Detail;
