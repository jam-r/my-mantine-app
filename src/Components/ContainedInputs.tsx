import {
  Button,
  Checkbox,
  createStyles,
  rem,
  Select,
  TextInput,
  Box,
  Text,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
  },

  input: {
    // height: rem(54),
    // paddingTop: rem(18),
  },

  label: {
    // position: "absolute",
    pointerEvents: "none",
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
}));

export function ContainedInputs() {
  const handleSendMessage = () => {
    calcularPrecio();
    const phoneNumber = "56967468133"; // Número de teléfono del destinatario
    let message = "¡Hola! quiero encargar una torta con el siguiente detalle: "; // Mensaje a enviar
    message += "\n*Porciones:*  " + form.values.porciones;
    message += "\n*Sabores Bizcocho:*  " + form.values.saborBiscocho;
    message += "\n*Rellenos:*  " + form.values.relleno;
    message +=
      "\n*Tarjeta con dedicatoria:*  " +
      (tarjetaDedicatoria ? "Si" : "No");
    message += "\n*Topper:*  " + (topper ? "Si" : "No");
    message +=
      "\n*Mini botella de whiskey:*  " +
      (botellaWhiskey ? "Si" : "No");
    message +=
      "\n*Rosas naturales:*  " + (rosasNaturales ? "Si" : "No");
    message +=
      "\n*Relleno de nutella:*  " + (rellenoNutella ? "Si" : "No");
    message +=
        "\n*Requerimientos especiales:*  " + form.values.requerimientosEspeciales;
    message +=
        "\n*Valor:*  " + precioTotal;
    // Crear la URL con el esquema de WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    // Abrir la ventana de WhatsApp
    window.open(whatsappUrl);
  };
  const precioBase = 15000;
  const precioTarjeta = 3000;
  const precioTopper = 3000;
  const precioWhiskey = 3000;
  const precioRosas = 3000;
  const precioNutella = 3000;
  let [tarjetaDedicatoria, setTarjetaDedicatoria] = useState(false);
  let [topper, setTopper] = useState(false);
  let [botellaWhiskey, setBotellaWhiskey] = useState(false);
  let [rosasNaturales, setRosasNaturales] = useState(false);
  let [rellenoNutella, setRellenoNutella] = useState(false);
  let [precioTotal, setPrecioTotal] = useState(precioBase);

  
  const actualizarTarjetaDedicatoria = (tarjetaDedicatoria: boolean | ((prevState: boolean) => boolean)) => {
    setTarjetaDedicatoria(tarjetaDedicatoria);
    if(tarjetaDedicatoria){
        precioTotal += precioTarjeta;
    }else{
        precioTotal -= precioTarjeta;
    }
    setPrecioTotal(precioTotal);
  };

  const actualizarTopper = (topper: boolean | ((prevState: boolean) => boolean)) => {
    setTopper(topper);
    if(topper){
        precioTotal += precioTopper;
    }else{
        precioTotal -= precioTopper;
    }
    setPrecioTotal(precioTotal);
  };

  const actualizarBotellaWhiskey = (botellaWhiskey: boolean | ((prevState: boolean) => boolean)) => {
    setBotellaWhiskey(botellaWhiskey);
    if(botellaWhiskey){
        precioTotal += precioWhiskey;
    }else{
        precioTotal -= precioWhiskey;
    }
    setPrecioTotal(precioTotal);
  };

  const actualizarRosasNaturales = (rosasNaturales: boolean | ((prevState: boolean) => boolean)) => {
    setRosasNaturales(rosasNaturales);
    if(rosasNaturales){
        precioTotal += precioRosas;
    }else{
        precioTotal -= precioRosas;
    }
    setPrecioTotal(precioTotal);
  };
  
  const actualizarRellenoNutella = (rellenoNutella: boolean | ((prevState: boolean) => boolean)) => {
    setRellenoNutella(rellenoNutella);
    if(rellenoNutella){
        precioTotal += precioNutella;
    }else{
        precioTotal -= precioNutella;
    }
    setPrecioTotal(precioTotal);
  };

  

  const calcularPrecio = () => {
    precioTotal = precioBase; 
    if (tarjetaDedicatoria) {
      precioTotal += precioTarjeta;
    }
    if (topper) {
      precioTotal += precioTopper;
    }
    if (botellaWhiskey) {
      precioTotal += precioWhiskey;
    }
    if (rosasNaturales) {
      precioTotal += precioRosas;
    }
    if (rellenoNutella) {
      precioTotal += precioNutella;
    }
    setPrecioTotal(precioTotal);
  };

  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      porciones: "",
      saborBiscocho: "",
      relleno: "",
      requerimientosEspeciales: "",
    },
    validate: {
      porciones: isNotEmpty(),
      saborBiscocho: isNotEmpty(),
      relleno: isNotEmpty(),
    },
  });

  const rellenos: {value: string; label: string} [] = [
    { value: "Chocolate blanco", label: "Chocolate blanco" },
    { value: "Chocolate semi amargo", label: "Chocolate semi amargo" },
    { value: "Manjar", label: "Manjar" },
    { value: "Mermelada de berries", label: "Mermelada de berries" },
    { value: "Mermelada de duraznos", label: "Mermelada de duraznos" },
    { value: "Mermelada de frutilla", label: "Mermelada de frutilla" },
    { value: "Mocca", label: "Mocca" },
  ];
  
  const sabores: {value: string; label: string} [] = [
    { value: "Chocolate", label: "Chocolate" },
    { value: "Limon", label: "Limon" },
    { value: "Naranja", label: "Naranja" },
    { value: "Red velvet", label: "Red velvet" },
    { value: "Vainilla", label: "Vainilla" },
    { value: "Zanahoria", label: "Zanahoria" },
  ];

  const porciones : {value: string; label: string} [] = [
    { value: "6 a 8", label: "6 a 8" },
    { value: "10 a 12", label: "10 a 12" },
    { value: "15", label: "15" },
    { value: "20", label: "20" },
    { value: "25", label: "25" },
    { value: "30", label: "30" },
    { value: "40", label: "40" },
    { value: "50", label: "50" },
    { value: "60", label: "60" },
  ];


  return (
    <div>
      <form onSubmit={form.onSubmit(handleSendMessage)}>
        <Box maw={400} >
          <Select
            mt="md"
            withinPortal
            withAsterisk
            required
            data={porciones}
            placeholder="Elige una opcion"
            label="Porciones"
            classNames={classes}
            {...form.getInputProps("porciones")}
          />

          <Select
            mt="md"
            withinPortal
            withAsterisk
            required
            data={sabores}
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
            data={rellenos}
            {...form.getInputProps("relleno")}
            placeholder="Elige una opcion"
            label="Rellenos"
            classNames={classes}
          />

          <Checkbox
            mt="md"
            label="Tarjeta con dedicatoria (+3000)"
            onChange={(event) => actualizarTarjetaDedicatoria(event.currentTarget.checked)}
            checked={tarjetaDedicatoria}
          />

          <Checkbox
            mt="md"
            label="Topper (+3000)"
            onChange={(event) => actualizarTopper(event.currentTarget.checked)}
            checked={topper}
          />

          <Checkbox
            mt="md"
            label="Mini botella de whiskey (+3000)"
            onChange={(event) => actualizarBotellaWhiskey(event.currentTarget.checked)}
            checked={botellaWhiskey}
          />

          <Checkbox
            mt="md"
            label="Rosas naturales (+3000)"
            onChange={(event) => actualizarRosasNaturales(event.currentTarget.checked)}
            checked={rosasNaturales}
          />

          <Checkbox
            mt="md"
            label="Relleno de nutella (+3000)"
            onChange={(event) => actualizarRellenoNutella(event.currentTarget.checked)}
            checked={rellenoNutella}
          />

          <TextInput
            mt="md"
            label="Requerimientos especiales"
            classNames={classes}
            placeholder="Escribe tus requerimientos especiales" 
            {...form.getInputProps("requerimientosEspeciales")}
          />
          {/* <h1>Precio Final:</h1> */}
          <Text  
            mt="md" c="green.8" fw={700} fz="xl">Precio Final: ${precioTotal}</Text>
          <Button mt="md" type="submit">
            Enviar por whatsapp
          </Button>
        </Box>
      </form>
    </div>
  );
}
