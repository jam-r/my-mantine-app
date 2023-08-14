import {
  Container,
  Grid,
  SimpleGrid,
} from "@mantine/core";
import { ContainedInputs } from "./ContainedInputs";
import { PhotoDetail } from "./PhotoDetail";


function Detail() {

  return ( 
    <Container>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <PhotoDetail></PhotoDetail>
        <Grid gutter="md">
          <Grid.Col>
            <ContainedInputs></ContainedInputs>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  )
}

export default Detail;
