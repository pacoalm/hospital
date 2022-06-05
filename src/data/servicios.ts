export interface IServicios {
  sid: number;
  xkey: string;
  descripcion: string;
}

const Servicios: IServicios[] = [
  {
    sid: 1,
    xkey: '07-CAR',
    descripcion: 'Cardiología',
  },
  {
    sid: 2,
    xkey: '07-CGD',
    descripcion: 'Cirugía General y Digestiva',
  },
  {
    sid: 3,
    xkey: '07-DIG',
    descripcion: 'Digestivo',
  },
  {
    sid: 4,
    xkey: '07-TRA',
    descripcion: 'Traumatología',
  },
];

export const getServicios = async (): Promise<IServicios[]> => {
  await wait(500);
  return Servicios;
};

const wait = async (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
