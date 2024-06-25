import HeroComponent from "../components/HeroComponent";
import ButtonComponent from "../components/Button";
import Card from "../components/CardComponent";
function HomePage() {
    return (
        <>
            <main className="main">
                <HeroComponent />
                <section className="flex justify-center flex-col items-center p-8 ">
                    <h2 className="title">Nuestas marcas</h2>
                    <p>Lorem ipsum dolor sit amet consectetur culpa unde molestiae, velit </p>
                    <div className="grid w-2/5 items-center justify-center grid-cols-3 grid-flow-row gap-8">
                        <img className="w-20 justify-self-center	" src="../sheglam-l.png" alt="sheglam" />
                        <img className="w-52" src="../beatycreations-l.png" alt="beaty creations" />
                        <img className="w-52" src="../italiadeluxe-l.avif" alt="italia deluxe" />
                        <img className="w-52" src="../kleancolor-l.png" alt="kleancolor" />
                        <img className="w-52" src="../maybelline-l.png" alt="maybelline" />
                        <img className="w-52" src="../moira-l.png" alt="moira" />
                    </div>
                </section>
                <section className="">

                </section>
                <section className="bg-primary-600 flex justify-center p-8">
                    <div className="w-2/3 flex ">
                    <div className="w-1/5">
                        <h2 className="title text-left">Productos Destacados</h2>
                        <p className="text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam laudantium quas sapiente eum neque aliquid, alias cum ab necessitatibus repudiandae labore dolorem odit numquam possimus animi voluptates nemo voluptatibus!</p>
                        <ButtonComponent text="Ver mas" onClick={() => { }} />
                    </div>
                    <div className="flex">
                        <Card img="" name="" price={12} />
                        <Card img="" name="" price={12} />
                        <Card img="" name="" price={12} />
                    </div>
                    </div>
                </section>
            </main>
        </>
    );
}
export default HomePage;