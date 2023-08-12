import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { ContainedInputs } from "./ContainedInputs";
import { PhotoDetail } from "./PhotoDetail";

const PRIMARY_COL_HEIGHT = rem(300);

function Detail() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;

  return ( 
    <Container my="md">
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <PhotoDetail></PhotoDetail>
        <Grid gutter="md">
          <Grid.Col>
            <ContainedInputs></ContainedInputs>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  
  // <ContainedInputs></ContainedInputs>
  )
}

export default Detail;
