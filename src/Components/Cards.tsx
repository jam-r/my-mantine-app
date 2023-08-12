import { Badge, Button, Card, Grid, Group, Image, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Grid justify="space-around">
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://www.dpsainiflorist.com/wp-content/uploads/2023/04/DP3028.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button onClick={()=>navigate("/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://www.cakehut.in/image/cache/catalog/2021%20cake%20photos/Double%20Chocolatee-600x600w.jpg.webp"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button  onClick={()=>navigate("/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://preppykitchen.com/wp-content/uploads/2018/04/Funfetti-cake-recipe-new.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button onClick={()=>navigate("/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://assets.winni.in/product/primary/2022/10/76240.png?dpr=2&w=220"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                On Sale
              </Badge>
            </Group>

            <Text size="sm" color="dimmed">
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button onClick={()=>navigate("/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Cards;
