interface IErrorProps {
  res: {
    errors?: Record<string, string[] | undefined>;
    message: string;
  };
}

const Error = ({ res: { errors, message } }: IErrorProps) => {
  const aa = self.crypto.randomUUID();
  return (
    <div>
      {errors &&
        Object.entries(errors).map(([key, value]) => (
          <div key={key} id={`${key}-error`} aria-live='polite'>
            <strong className='capitalize'>{key}: </strong>
            <span className='text-sm font-medium'>{value}</span>
          </div>
        ))}

      <div>
        <span className='text-sm font-medium'>{message}</span>
      </div>
    </div>
  );
};

export default Error;
