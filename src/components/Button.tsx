import { useState } from 'react';

interface Props {
  color: string
  children: string
}

const Button = ({ color, children }: Props) => {
  const [count, setCount] = useState<number>(1)

  const buttonClick = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={buttonClick} type="button" style={{ backgroundColor: color }} >
      {children} - {count}
    </button>
  );
}

export default Button;
