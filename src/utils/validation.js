export const handleNumberChange = (e, setNumber, toast) => {
  const value = e.target.value;
  if (/^\d*$/.test(value)) {
    setNumber(value);
  } else {
    toast.error('Please enter numeric value only!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      pauseOnHover: false,
      draggable: true,
      theme: 'colored',
    });
  }
};
