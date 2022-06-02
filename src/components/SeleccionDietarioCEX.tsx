import { Console } from 'console';
import React from 'react';
import { ReactDOM } from 'react';
import { useForm } from 'react-hook-form';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function SeleccionDietarioCex() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await sleep(2000);
    if (data.username === 'bill') {
      alert(JSON.stringify(data));
    } else {
      alert('There is an error');
    }
  };
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">User Name</label>
      <input placeholder="Bill" {...register('username')} />

      <label htmlFor="lastName">Last Name</label>
      <input placeholder="Luo" {...register('lastName')} />

      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="text"
        {...register('email')}
      />

      <div style={{ color: 'red' }}>
        {Object.keys(errors).length > 0 &&
          'There are errors, check your console.'}
      </div>
      <input type="submit" />
    </form>
  );
}
