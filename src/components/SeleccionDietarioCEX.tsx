import { Console } from 'console';
import React, { useState } from 'react';
import { ReactDOM } from 'react';
import { useForm } from 'react-hook-form';
import { getServicios, IServicios } from '../data/servicios';

export default function SeleccionDietarioCex() {
  const [servicios, setServicios] = React.useState<IServicios[]>([]);
  const [serviciosLoading, setServiciosLoading] = React.useState(true);

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
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Fecha">Fecha</label>
      <input
        placeholder="Fecha"
        type="date"
        {...register('fecha')}
        defaultValue={date}
        onChange={handleDateChange}
      />

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

      <label htmlFor="Agenda">Agenda</label>
      <input
        placeholder="Agenda"
        type="text"
        {...register('Agenda')}
        disabled={AgendaDisable}
      />

      <div style={{ color: 'red' }}>
        {Object.keys(errors).length > 0 &&
          'There are errors, check your console.'}
      </div>
      <input type="submit" />
    </form>
  );
}
