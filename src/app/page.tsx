import Image from "next/image";
import missionnaries from "../lib/card/missionnaires.json";
const Home = () => {
  return (
    <>
      <h1 className="mb-5 mt-20">MISIONEROS/AS EN EL SERVICO DEL SEÑOR</h1>
      <div className="grid grid-cols-2 gap-4 ">
        {missionnaries.map((misionary) => (
          <div className=" grid  grid-cols-12  border border-black rounded-md" key={misionary.id}>
            <div className=" col-span-4  ">
              <Image
                src={misionary.image}
                alt=""
                width={100}
                height={100}
                className="object-contain h-[200px] rounded-md w-full"
                loading="lazy"
              />
            </div>

            <div className=" col-span-8 ">
              <h2>{misionary.name}</h2>
              <h2>{misionary.lastName}</h2>
              <h2>{misionary.mission}</h2>
              <p>{misionary.email}</p>

              <h2>{misionary.missionStart}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Home;
