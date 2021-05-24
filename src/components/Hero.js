import Navigation from "@/components/Navigation"
import Twitch from "@/components/Twitch"

export default function Hero() {
  return (
    <div className="bg-gray-50">
      <div className="relative overflow-hidden">
        <div className="relative pb-16">
          <Navigation />

          <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hello, Welcome to</span>
                <span className="block text-purple-600">Chiefpansancolt</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                You can find articles about pretty much anything, watch chief stream games or checkout videos and clips
                Chief has made from past gameplay.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="flex-1 w-full bg-gray-800" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="relative rounded-lg shadow-lg">
              <Twitch/>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-purple-600 sm:text-4xl">
              Chief's Social Outreach
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Here are some stats on Chief's following on most popular networks.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-gray-50 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-800" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-5">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Twitter</dt>
                    <dd className="order-1 text-5xl font-extrabold text-purple-600">124</dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Instagram</dt>
                    <dd className="order-1 text-5xl font-extrabold text-purple-600">253</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">eFuse</dt>
                    <dd className="order-1 text-5xl font-extrabold text-purple-600">103</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">YouTube</dt>
                    <dd className="order-1 text-5xl font-extrabold text-purple-600">54</dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Twitch</dt>
                    <dd className="order-1 text-5xl font-extrabold text-purple-600">76</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
