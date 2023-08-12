import { Button, Checkbox, createStyles, rem, Select, TextInput, Box } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
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
          data={["6 a 8", "10 a 12", "15", "20", "25", "30", "40", "50", "60"]}
          placeholder="Elige una opcion"
          label="Porciones"
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
        <Checkbox
          mt="md"
          label="Topper"
        />
        <Checkbox
          mt="md"
          label="Mini botella de Whiskey"
        />
        <Checkbox
          mt="md"
          label="Rosas naturales"
        />
        <Checkbox
          mt="md"
          label="Relleno de nutella"
        />
        

        <TextInput
          mt="md"
          label="Requerimientos especiales"
          placeholder="Escribe tus requerimientos especiales"
          classNames={classes}
          {...form.getInputProps("requerimientosEspeciales")}
        />

        
        <Button 
          mt="md" type="submit">Submit</Button>
        </Box>
      </form>
    </div>
  );
}
