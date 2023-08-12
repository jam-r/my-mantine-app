import {
  Button,
  Checkbox,
  createStyles,
  rem,
  Select,
  TextInput,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: "absolute",
    pointerEvents: "none",
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export function ContainedInputs() {
  const [porciones, setPorciones] = useState("");
  const [saborBiscocho, setSaborBiscocho] = useState("");
  const [relleno, setRelleno] = useState("");
  const [tarjetaDedicatoria, setTarjetaDedicatoria] = useState("");
  const [topper, setTopper] = useState("No");
  const [botellaWhiskey, setBotellaWhiskey] = useState("No");
  const [rosasNaturales, setRosasNaturales] = useState("No");
  const [rellenoNutella, setRellenoNutella] = useState("No");
  const [requerimientosEspeciales, setRequerimientosEspeciales] = useState("");

  const handleSendMessage = () => {
    const phoneNumber = "56967468133"; // Número de teléfono del destinatario
    let message = "¡Hola! quiero encargar una torta con el siguiente detalle: "; // Mensaje a enviar
    message += "\nPorciones:  " + porciones;
    message += "\nSabores Bizcocho:  " + saborBiscocho;
    message += "\nRellenos:  " + relleno;
    message += "\nTarjeta con dedicatoria:  " + tarjetaDedicatoria;
    message += "\nTopper:  " + topper;
    message += "Mini botella de whiskey:  " + botellaWhiskey;
    message += "Rosas naturales:  " + rosasNaturales;
    message += "\nRelleno de nutella:  " + rellenoNutella;
    message += "\nRequerimientos especiales:  " + requerimientosEspeciales;
    // Crear la URL con el esquema de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abrir la ventana de WhatsApp
    window.open(whatsappUrl);
  };

  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <div>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Box maw={400} mx={"auto"}>
          <Select
            mt="md"
            withinPortal
            withAsterisk
            data={[
              "6 a 8",
              "10 a 12",
              "15",
              "20",
              "25",
              "30",
              "40",
              "50",
              "60",
            ]}
            placeholder="Elige una opcion"
            label="Porciones"
            //   onChange={setPorciones('1')}
            classNames={classes}
          />

          <Select
            mt="md"
            withinPortal
            withAsterisk
            data={[
              "Chocolate",
              "Limon",
              "Naranja",
              "Red velvet",
              "Vainilla",
              "Zanahoria",
            ]}
            placeholder="Elige una opcion"
            label="Sabores Bizcocho"
            classNames={classes}
          />

          <Select
            mt="md"
            withinPortal
            withAsterisk
            data={[
              "Chocolate blanco",
              "Chocolate semi amargo",
              "Manjar",
              "Mermelada de berries",
              "Mermelada de duraznos",
              "Mermelada de frutilla",
              "Mocca",
            ]}
            placeholder="Elige una opcion"
            label="Rellenos"
            classNames={classes}
          />

          {/* <DatePickerInput
          mt="md"
          popoverProps={{ withinPortal: true }}
          label="Departure date"
          placeholder="When will you leave?"
          classNames={classes}
          clearable={false}
        /> */}

          <Checkbox
            mt="md"
            label="Tarjeta con dedicatoria"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />
          <Checkbox mt="md" label="Topper" />
          <Checkbox mt="md" label="Mini botella de whiskey" />
          <Checkbox mt="md" label="Rosas naturales" />
          <Checkbox mt="md" label="Relleno de nutella" />

          <TextInput
            mt="md"
            label="Requerimientos especiales"
            placeholder="Escribe tus requerimientos especiales"
            classNames={classes}
            {...form.getInputProps("requerimientosEspeciales")}
          />

          <Button mt="md" type="submit" onClick={handleSendMessage}>
            Enviar por whatsapp
          </Button>
        </Box>
      </form>
    </div>
  );
}
