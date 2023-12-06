import Card from './Card';
const Main = () => {
  return (
    <>
      <section className="gap-2  flex flex-col items-center mt-16">
        <h2 className="font-bold text-3xl uppercase">Our Services :</h2>
        <p className="font-medium max-w-sm text-center">
          Experience industry-leading services with a proven track record of
          excellence.
        </p>
        <div className="grid grid-cols-3 gap-7 mt-5 ">
          <Card
            title="Epoxy Coating Floors"
            img="/assets/yellow-floor.png"
            text="Seal and enhance your floors with epoxy coatings. Ideal for various industries, including engineering, pharmaceuticals, clean rooms, laboratories, car parks, hospitals, packing, storage, manufacturing, automotive, and assembly."
          />
          <Card
            title="Self-Leveling Epoxy Floors"
            img="/assets/yellow-floor.png"
            text="Experience a seamless and durable flooring solution with self-leveling epoxy. Transform old concrete surfaces into smooth, flawless floors. Perfect for engineering, pharmaceuticals, clean rooms, laboratories, car parks, hospitals, packing, storage areas, manufacturing, automotive, and assembly industries."
          />
          <Card
            title="Anti-Static Floors"
            img="/assets/yellow-floor.png"
            text="In sensitive industries that involve electronics static electricity poses serious risks. Our anti-static flooring from Technyat offers a reliable solution, safeguarding both personnel and delicate equipment from harmful electrostatic discharges (ESD).  Ensure a safe and static-free environment with our advanced flooring technology."
          />
          <Card
            title="Food Industry Floors"
            img="/assets/yellow-floor.png"
            text="Our specialized flooring meets the high demands of the food industry. Ideal for food and beverage manufacturing, commercial kitchens, bakeries, ready meals, chemical and pharmaceutical production, pilot plants, clean rooms, wet process areas, and aggressive industrial environments. Experience flooring excellence for a hygienic and reliable environment."
          />
          <Card
            title="Clean room solutions"
            img="/assets/yellow-floor.png"
            text="Combat contamination in clean rooms with our advanced flooring solutions. Designed to meet rigorous standards, our solutions ensure cleanliness and efficiency. Trust us for the best flooring for your clean room."
          />
          <Card
            title="Terrazzo Floors"
            img="/assets/yellow-floor.png"
            text="Terrazzo is a versatile composite material used for exquisite floor and wall treatments. It combines chips of marble, quartz, granite, glass, or other materials, bound together with a cementitious or polymeric binder. This results in a stunning and durable surface. From hospitals and airport terminals to stairs, restaurants, hotel receptions, shopping centers, and universities, terrazzo adds elegance to a variety of spaces."
          />
          <Card
            title="Sport Floors"
            img="/assets/yellow-floor.png"
            text="Optimize Your Sports Facilities with Technyat From floor sanding and maintenance to rubber sports floors and gym flooring, Technyat provides competitive and comprehensive indoor sports solutions. Our expert team conducts free site surveys to determine the best services for your specific needs and budget. Elevate your sports facilities with Technyat's expertise."
          />
          <Card
            title="Polished Concrete"
            img="/assets/yellow-floor.png"
            text="Seamless and Versatile Self-Leveling Solution Our cementitious self-leveling product provides a smooth foundation for various applications. From warehouses and retail stores to hotels, restaurants, and offices, it creates a seamless surface for paints and floors. Suitable for indoor and outdoor use, it is also capable of withstanding permanent water immersion."
          />
          <Card
            title="Roofing Isolation"
            img="/assets/yellow-floor.png"
            text="Our waterproofing services prioritize a proactive health and safety program, ensuring the well-being of our staff, protecting clients' property, and preserving the environment. Waterproofing effectively guards against hydrostatic pressure from water tables, providing comprehensive protection for under slabs and walls."
          />
        </div>
      </section>
    </>
  );
};

export default Main;
