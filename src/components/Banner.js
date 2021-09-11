import { Stage, Layer, Shape } from "react-konva";

export default function Banner() {
  return (
    <div className="py-12 bg-red-600 grid md:grid-cols-2 justify-items-center ">
      <div className="opacity-5 absolute top-0 left-0 z-0">
        <Stage width={window.innerWidth - 200} height={window.innerHeight - 200}>
          <Layer>
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(0, 450);
                context.lineTo(250, 225);
                context.quadraticCurveTo(0, 0, 0, 0);
                context.fillStrokeShape(shape);
              }}
              fill="#000"
            />
          </Layer>
        </Stage>
      </div>
      <div className="opacity-10 absolute top-30 left-0 z-0">
        <Stage width={window.innerWidth - 200} height={window.innerHeight - 200}>
          <Layer>
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(0, 450);
                context.lineTo(250, 225);
                context.quadraticCurveTo(0, 0, 0, 0);
                context.fillStrokeShape(shape);
              }}
              fill="#F48B18"
            />
          </Layer>
        </Stage>
      </div>
      <div className="relative max-w-7xl py-4 mx-auto z-0">
        <main className="mt-5 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-10 lg:px-8 xl:mt-5">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-xl tracking-tight font-bold text-white sm:text-5xl md:text-4xl">
              <span className="block xl:inline">Welcome to Frendzy</span>
            </h1>
            <p className="text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Create your own or join an existing Frendzy. With Frendzy you can
              create your own local event on an instant or discover what’s
              happening your neighbourhood. Time to Frendzy!
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="/"
                  className="w-full whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border 
                  border-transparent rounded-full shadow-sm text-base font-medium text-black bg-indigo-100 hover:bg-indigo-200"
                >
                  <img
                    className="h-6 mr-2 w-auto object-contain"
                    src="./apple.png"
                    alt=""
                  />
                  Apple Store
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="/"
                  className="w-full whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border 
                  border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gray-900 hover:bg-gray-800"
                >
                  <img
                    className="h-6 mr-2 w-auto object-contain"
                    src="./playstore.png"
                    alt=""
                  />
                  Play Store
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-full w-full object-contain sm:h-72 md:h-full lg:w-full lg:h-full"
          src="./home.gif"
          alt="Frendzy"
        />
      </div>
    </div>
  );
}
