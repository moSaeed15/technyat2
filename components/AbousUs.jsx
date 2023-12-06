import Image from 'next/image';

const AbousUs = () => {
  return (
    <section className="gap-2 flex  mt-24  items-center relative hero">
      <div className=" bg-yellow h-full w-1/3 flex flex-col pl-20 pt-20 pr-5">
        <h3 className="font-bold text-3xl uppercase">About us:</h3>
        <h4 className="mt-3 text-2xl font-medium italic ">
          "BRINGING YOU THE <br />
          <span className="text-myblue">BEST</span> FLOORING SERVICE"
        </h4>
        <p className="max-w-lg mt-5 font-medium text-md ">
          <span className="text-myblue uppercase">Technyat </span> specific
          construction techniques is one of the leading service providers for
          Epoxy Floor Coating Service, Epoxy Flooring Service, Epoxy Floor
          Screeding Service, Floor Marking Service thermal-water isolation,
          colored renders, polyuria - foam spray roof isolation and a certified
          local supplier for well-known multinational companies.{' '}
          <span className="text-myblue uppercase">Technyat </span> was
          established in 1998 and we are providing a unique engineering
          solutions and services for any technical specific problems on
          different industries nature with a professional technical team, new
          techniques, and modern machines.
        </p>
      </div>{' '}
      <Image
        src="/gallery/hero.png"
        alt="Hero image"
        fill={true}
        className="-z-10"
      />
    </section>
  );
};

export default AbousUs;
