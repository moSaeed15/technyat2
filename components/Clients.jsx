import Image from 'next/image';
const Clients = () => {
  return (
    <section className="gap-2  flex flex-col items-center mt-16">
      <h2 className="font-bold text-3xl uppercase">Our Clients:</h2>
      <div className="grid grid-cols-6 gap-10 mt-5 place-items-center">
        <Image src="/assets/0.jpg" alt="JTI" width={150} height={150} />
        <Image
          src="/assets/10.jfif"
          alt="Art Pharma"
          width={150}
          height={150}
        />
        <Image
          src="/assets/Gandour.jpg"
          alt="Gandour"
          width={150}
          height={150}
        />
        <Image src="/assets/beyti.png" alt="Beyti" width={150} height={150} />
        <Image
          src="/assets/download.png"
          alt="Temry"
          width={150}
          height={150}
        />
        <Image src="/assets/EIPICO.jpg" alt="EIPICO" width={150} height={150} />
        <Image
          src="/assets/Givaudan.png"
          alt="Givaudan"
          width={150}
          height={150}
        />
        <Image
          src="/assets/jplogoinfinalpngsmall.png"
          alt="Jamjoom Pharma"
          width={150}
          height={150}
        />
        <Image
          src="/assets/Loutus.png"
          alt="Lotus Garments Group"
          width={150}
          height={150}
        />
        <Image src="/assets/sews-eg.jpg" alt="Suez" width={150} height={150} />
        <Image
          src="/assets/mask.jpg"
          alt="apex pharma"
          width={150}
          height={150}
        />
        <Image
          src="/assets/Unilever-logo.png"
          alt="Unilever"
          width={150}
          height={150}
        />
        <Image
          src="/assets/elsewdey.png"
          alt="elsewdey"
          width={150}
          height={150}
        />
        <Image
          src="/assets/americana.png"
          alt="americana"
          width={150}
          height={150}
        />
        <Image src="/assets/z.png" alt="grace" width={150} height={150} />
        <Image src="/assets/henkel.svg" alt="henkel" width={150} height={150} />
        <Image
          src="/assets/farm.png"
          alt="farm frities"
          width={150}
          height={150}
        />
        <Image
          src="/assets/greenlandlogo.jpg"
          alt="greenland logo"
          width={150}
          height={150}
        />
      </div>
    </section>
  );
};

export default Clients;
