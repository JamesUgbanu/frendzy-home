import YoutubeEmbed from "../components/YoutubeEmbed";

export default function Product() {
  return (
      <div className="py-12 bg-red-600 overflow-hidden">
        <div className="grid md:grid-cols-2 mx-auto">
          <div className="relative md:ml-10 mx-5">
            <YoutubeEmbed embedId="88vG7IRG03M" />
          </div>
          <div className="mt-5 max-w-7xl sm:mt-12 sm:px-6 md:mt-6 lg:mt-10 lg:px-8 xl:mt-5">
            <p className="text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Create your own or join an existing Frendzy. With Frendzy you can
              create your own local event on an instant or discover what’s
              happening your neighbourhood. Time to Frendzy!
            </p>
          </div>
        </div>
      </div>
  );
}
