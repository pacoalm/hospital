import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getServicios, IServicios } from '../data/servicios';
import Grid from '@mui/material/Grid';
import ReactLoading from 'react-loading';

export default function SeleccionDietarioCex() {
  const [servicios, setServicios] = React.useState<IServicios[]>([]);
  const [serviciosLoading, setServiciosLoading] = React.useState(true);
  const [agendasLoading, setAgendasLoading] = React.useState(false);

  React.useEffect(() => {
    let cancelled = false;
    const doGetServicios = async () => {
      const Servicios = await getServicios();
      if (!cancelled) {
        setServicios(Servicios);
        setServiciosLoading(false);
      }
    };
    doGetServicios();
    return () => {
      cancelled = true;
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {};
  console.log(errors);

  var curr = new Date();
  curr.setDate(curr.getDate());
  var datetoday = curr.toISOString().substr(0, 10);

  const [date, setDate] = useState(datetoday);
  const [AgendaDisable, setAgendaDisable] = useState(true);

  const handleDateChange = async (e) => {
    setDate(e.target.value);
  };
  const handleServChange = async (e) => {
    setAgendaDisable(e.target.value === '0');
    setAgendasLoading(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container columns={{ md: 12 }}>
        <Grid item xs={11}>
          <label htmlFor="Fecha">Fecha</label>
          <input
            placeholder="Fecha"
            type="date"
            {...register('fecha')}
            defaultValue={date}
            onChange={handleDateChange}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>

      <Grid container columns={{ md: 12 }}>
        <Grid item xs={11}>
          <label htmlFor="Servicio">Servicio</label>
          <select {...register('Servicio')} onChange={handleServChange}>
            <option value="0"> -- Seleccione un servicio -- </option>
            {/* Mapping through each fruit object in our fruits array
          and returning an option element with the appropriate attributes / values.
         */}
            {servicios.map((servicio) => (
              <option value={servicio.sid}>{servicio.descripcion}</option>
            ))}
          </select>
        </Grid>
        <Grid item xs={1}>
          {serviciosLoading && <ReactLoading type="bubbles" color="#681c41" />}
        </Grid>
      </Grid>

      <Grid container columns={{ md: 12 }} alignItems="flex-end">
        <Grid item xs={11}>
          <label htmlFor="Agenda">Agenda</label>
          <input
            placeholder="Agenda"
            type="text"
            {...register('Agenda')}
            disabled={AgendaDisable}
          />
        </Grid>
        <Grid item xs={1} paddingLeft={1} paddingBottom={2}>
          {agendasLoading && (
            <ReactLoading
              type="spinningBubbles"
              color="#681c41"
              height={32}
              width={32}
            />
          )}
        </Grid>
      </Grid>
      <div style={{ color: 'red' }}>
        {Object.keys(errors).length > 0 &&
          'There are errors, check your console.'}
      </div>
      <Grid container columns={{ md: 12 }}>
        <Grid item xs={11}>
          <input type="submit" />
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </form>
  );
}
