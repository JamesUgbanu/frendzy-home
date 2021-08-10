import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div className="relative py-12 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl py-4 mx-auto">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-6 lg:mt-10 lg:px-8 xl:mt-18">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-xl tracking-tight font-bold text-white sm:text-5xl md:text-4xl">
              <span className="block xl:inline">Welcome to Frendzy</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 30 }}
                >
                  <a
                    href="#"
                    className="whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border 
                  border-transparent rounded-full shadow-sm text-base font-medium text-black bg-indigo-100 hover:bg-indigo-200"
                  >
                    <img
                      className="h-6 mr-2 w-auto object-contain"
                      src="./apple.png"
                      alt=""
                    />
                    Apple Store
                  </a>
                </motion.div>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 30 }}
                >
                  <a
                    href="#"
                    className="whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border 
                  border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r 
                  from-yellow-500 via-red-500 to-red-500"
                  >
                    <img
                      className="h-6 mr-2 w-auto object-contain"
                      src="./playstore.png"
                      alt=""
                    />
                    Play Store
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-full w-full object-contain sm:h-72 md:h-full lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
