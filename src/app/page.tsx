import Greeting from '@/components/Greeting';

function HomePage() {
  return (
    <div>
      <h1>สวัสดีชาวโลก!</h1>
      
      <Greeting name="ทีมพัฒนา" />

      <Greeting name="คุณลูกค้า" />
    </div>
  );
}

export default HomePage;