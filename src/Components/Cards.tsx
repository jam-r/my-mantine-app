import { Badge, Button, Card, Grid, Group, Image, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Grid justify="space-around">
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder style={{ minHeight: 475 }}>
            <Card.Section>
              <Image
                src="https://www.mozart.cl/wp-content/uploads/2018/04/19_MIF_1925_Torta_Bizcocho_Durazno_Chantilly_1080x1080.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Torta de Bizcocho</Text>
              
            </Group>

            <Text size="sm" color="dimmed" style={{ minHeight: 150 }}>
            Deléitate con nuestra exquisita torta de biscocho, un manjar esponjoso y ligero que funde en tu boca. Su suavidad te transportará a un mundo de sabores inigualables. ¡Una experiencia dulce que no querrás perderte!
            </Text>

            <Text 
            mt="md"  fw={500}>Desde $15000</Text>
            <Button onClick={()=>navigate("/my-mantine-app/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://cocinachilena.cl/wp-content/uploads/2018/06/Torta-de-mil-hojas-receta-chilena-2-scaled.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Torta de mil hojas</Text>
            </Group>

            <Text size="sm" color="dimmed" style={{ minHeight: 150 }}>
            Descubre la elegancia de la torta de mil hojas: capas de hojaldre delicadamente crujiente entrelazadas con suave crema pastelera. Un deleite exquisito que combina texturas y sabores en cada bocado. ¡Experimenta la perfección en cada capa!
            </Text>
            <Text 
            mt="md"  fw={500}>Desde $15000</Text>

            <Button  onClick={()=>navigate("/my-mantine-app/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder  >
            <Card.Section>
              <Image
                src="https://www.recetasnestle.cl/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/f2263ddd6651f62aca52b190f5680c26.webp?itok=-Q_WV-k7"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Torta de panqueques</Text>
            </Group>

            <Text size="sm" color="dimmed"  style={{ minHeight: 150 }}>
            Sumérgete en el placer irresistible de nuestra torta de panqueques: capas esponjosas de panqueques intercaladas con deliciosos rellenos y cubiertas. Una experiencia única que combina la suavidad de los panqueques con la riqueza de los sabores. ¡Disfruta de un festín de capas en cada porción!
            </Text>
            <Text 
            mt="md"  fw={500}>Desde $15000</Text>

            <Button onClick={()=>navigate("/my-mantine-app/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow="sm" padding="lg" radius="md" withBorder >
            <Card.Section>
              <Image
                src="https://content-cocina.lecturas.com/medio/2018/07/19/paso-a-paso-para-hacer-tarta-con-crema-y-fondant-resultado-final_52a175da_800x800.jpg"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>Torta de Fondant</Text>
            </Group>

            <Text size="sm"  color="dimmed"  style={{ minHeight: 150 }}>
            Descubre una delicia única: nuestra torta de fondant. Capas perfectas de bizcocho y arte en fondant se fusionan en un sabor y diseño excepcionales. Cada bocado es una experiencia elegante y sabrosa. ¡Celebra con estilo y sabor en cada rebanada!
            </Text>
            
            <Text 
            mt="md"  fw={500}>Desde $15000</Text>
            <Button onClick={()=>navigate("/my-mantine-app/detail")} variant="light" color="blue" fullWidth mt="md" radius="md">
              Cotizar
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default Cards;
