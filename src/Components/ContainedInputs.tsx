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

  const handleSendMessage = () => {
    const phoneNumber = "56967468133"; // Número de teléfono del destinatario
    let message = "¡Hola! quiero encargar una torta con el siguiente detalle: "; // Mensaje a enviar
    message += "\n*Porciones:*  " + form.values.porciones;
    message += "\n*Sabores Bizcocho:*  " + form.values.saborBiscocho;
    message += "\n*Rellenos:*  " + form.values.relleno;
    message += "\n*Tarjeta con dedicatoria:*  " + (form.values.tarjetaDedicatoria?"Si":"No");
    message += "\n*Topper:*  " + (form.values.topper?"Si":"No");
    message += "\n*Mini botella de whiskey:*  " + (form.values.botellaWhiskey?"Si":"No");
    message += "\n*Rosas naturales:*  " + (form.values.rosasNaturales?"Si":"No");
    message += "\n*Relleno de nutella:*  " + (form.values.rellenoNutella?"Si":"No");
    message += "\n*Requerimientos especiales:*  " + (form.values.requerimientosEspeciales);
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
        porciones: "",
        saborBiscocho: "",
        relleno: "",
        tarjetaDedicatoria: false,
        topper: false,
        botellaWhiskey: false,
        rosasNaturales: false,
        rellenoNutella: false,
        requerimientosEspeciales: "",
    },
    validate: {
        porciones: (value) => (""===value.trim() ?  "Seleccione porciones"  :null),
        saborBiscocho: (value) => (""===value.trim() ?"Seleccione sabor biscocho"  :null ),
        relleno: (value) => (""===value.trim() ?"Seleccione relleno" :  null),
    },
  });
  return (
    <div>
      <form onSubmit={form.onSubmit(handleSendMessage)}>
        <Box maw={400} mx={"auto"}>
          <Select
            mt="md"
            withinPortal
            withAsterisk
            required
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
            {...form.getInputProps("porciones")}
          />

          <Select
            mt="md"
            withinPortal
            withAsterisk
            required
            data={[
              "Chocolate",
              "Limon",
              "Naranja",
              "Red velvet",
              "Vainilla",
              "Zanahoria",
            ]}
            {...form.getInputProps("saborBiscocho")}
            placeholder="Elige una opcion"
            label="Sabores Bizcocho"
            classNames={classes}
          />

          <Select
            mt="md"
            withinPortal
            withAsterisk
            required
            data={[
              "Chocolate blanco",
              "Chocolate semi amargo",
              "Manjar",
              "Mermelada de berries",
              "Mermelada de duraznos",
              "Mermelada de frutilla",
              "Mocca",
            ]}
            {...form.getInputProps("relleno")}
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
            {...form.getInputProps("tarjetaDedicatoria", { type: "checkbox" })}
          />
          <Checkbox mt="md" label="Topper" 
            {...form.getInputProps("topper", { type: "checkbox" })}/>
          <Checkbox mt="md" label="Mini botella de whiskey" 
            {...form.getInputProps("botellaWhiskey", { type: "checkbox" })}/>
          <Checkbox mt="md" label="Rosas naturales" 
            {...form.getInputProps("rosasNaturales", { type: "checkbox" })}/>
          <Checkbox mt="md" label="Relleno de nutella" 
            {...form.getInputProps("rellenoNutella", { type: "checkbox" })}/>

          <TextInput
            mt="md"
            label="Requerimientos especiales"
            placeholder="Escribe tus requerimientos especiales"
            {...form.getInputProps("requerimientosEspeciales")}
          />

          <Button mt="md" type="submit" >
            Enviar por whatsapp
          </Button>
        </Box>
      </form>
    </div>
  );
}
