import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full relative hero flex items-center justify-between">
      <div className="flex flex-col gap-4 ml-32 z-10 relative bg-gray-200 p-10">
        <h1 className="text-black font-bold  text-5xl ">
          Technyat Specfic <br /> Construction Techniques
        </h1>
        <p className="font-medium text-lg max-w-sm">
          Unleash the potential of your space with our expert coatings and
          insulation services.
        </p>
      </div>

      <Image
        src="/assets/hero.png"
        alt="Hero image"
        fill={true}
        className="-z-10"
      />
      <div className=" bg-yellow h-full w-1/4 flex flex-col pl-20 pt-20 pr-5">
        <h2 className="font-bold text-2xl uppercase ">Our Work :</h2>
        <ul className="text-md flex flex-col gap-4  pl-0 pt-2 max-w-xs opacity-90 list-disc text-myblue font-medium">
          <li>
            Our skilled team offers a comprehensive range of industrial flooring
            solutions.
          </li>
          <li>
            With state-of-the-art equipment, we ensure cost-effective and
            efficient services.
          </li>
          <li>
            Experience our specialized foam spray room isolation and thermal
            water isolation services.
          </li>
          <li>
            We deliver exceptional results in epoxy floor coatings, floor
            markings, and colored renders.
          </li>
          <li>
            Trust us for reliable roof insulation and a variety of other
            innovative solutions.
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
