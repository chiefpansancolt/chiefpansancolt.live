import Navigation from "@/components/Navigation"
import Twitch from "@/components/Twitch"
import stats from "@/data/stats"

export default function Hero() {
  return (
    <div className="bg-gray-100">
      <div className="relative overflow-hidden">
        <div className="relative pb-16">
          <Navigation />

          <div className="mx-auto mt-16 max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hello, Welcome to</span>
                <span className="block text-purple-600">Chiefpansancolt</span>
              </h1>
              <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
                You can find articles about pretty much anything, watch chief stream games or
                checkout videos and clips Chief has made from past gameplay.
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex flex-col" aria-hidden="true">
            <div className="flex-1" />
            <div className="w-full flex-1 bg-gray-800" />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="relative rounded-lg shadow-lg">
              <Twitch />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pt-12 sm:pt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold text-purple-600 sm:text-4xl">
              Chief&apos;s Social Outreach
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Here are some stats on Chief&apos;s following on most popular networks.
            </p>
          </div>
        </div>
        <div className="mt-10 bg-gray-100 pb-12 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-800" />
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-6">
                  {stats.map((stat, index) => (
                    <div
                      key={stat.name}
                      className={`flex flex-col border-gray-100 p-6 text-center sm:border-0 ${
                        index === 0
                          ? "border-b sm:border-r"
                          : index === 4
                          ? "border-t sm:border-l"
                          : "border-t border-b sm:border-l sm:border-r"
                      }`}
                    >
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        <a href={stat.href}>{stat.name}</a>
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-purple-600">
                        {stat.count}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
