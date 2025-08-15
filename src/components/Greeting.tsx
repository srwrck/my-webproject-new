interface GreetingProps {
  name: string;
}

function Greeting({name}: GreetingProps) {
  return <p>ยินดีต้อนรับ, {name}!</p>;
}

export default Greeting;