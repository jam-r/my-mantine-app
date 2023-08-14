import { createStyles, Image, Card, Text, Group, Button, getStylesRef, rem } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import { IconStar } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  price: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  carousel: {
    '&:hover': {
      [`& .${getStylesRef('carouselControls')}`]: {
        opacity: 1,
      },
    },
  },

  carouselControls: {
    ref: getStylesRef('carouselControls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  carouselIndicator: {
    width: rem(4),
    height: rem(4),
    transition: 'width 250ms ease',

    '&[data-active]': {
      width: rem(16),
    },
  },
}));

const images = [
  'https://www.mozart.cl/wp-content/uploads/2018/04/19_MIF_1925_Torta_Bizcocho_Durazno_Chantilly_1080x1080.jpg',
  'https://www.gourmet.cl/wp-content/uploads/2022/09/Bizcocho-torta-ajustada-web-570x458.jpg',
  'https://cocinachilena.cl/wp-content/uploads/2012/02/torta-mermelada-4.jpg',
  'https://www.comedera.com/wp-content/uploads/2022/04/bizcocho-relleno-de-dulce-de-leche.jpg',
];

export function PhotoDetail() {
  const { classes } = useStyles();

  const slides = images.map((image) => (
    <Carousel.Slide key={image}>
      <Image src={image} height={220} />
    </Carousel.Slide>
  ));

  return (
    <Card radius="md" withBorder padding="xl">
      <Card.Section>
        <Carousel
          withIndicators
          loop
          classNames={{
            root: classes.carousel,
            controls: classes.carouselControls,
            indicator: classes.carouselIndicator,
          }}
        >
          {slides}
        </Carousel>
      </Card.Section>

      <Group position="apart" mt="lg">
        <Text fw={500} fz="lg">
          Torta de biscocho
        </Text>

      </Group>

      <Text fz="sm" c="dimmed" mt="sm">
      Delicada y esponjosa torta de biscocho: el placer perfecto en cada bocado. ¡Sorprende tus sentidos con su textura suave y sabor exquisito!
      </Text>

      <Text mt="xl" fw={500} fz="lg">
          Precio base: $15000
        </Text>
    </Card>
  );
}