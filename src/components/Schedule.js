export default function Schedule() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="mx-auto max-w-md text-center text-3xl font-extrabold text-purple-900 lg:max-w-xl lg:text-left">
            Chief&apos;s Stream Schedule
          </h2>
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-ml-8 -mt-4 flex flex-wrap justify-between lg:-ml-4">
              <div className="col-span-1">
                <div className="block text-lg font-bold">
                  Tuesday, Thursday, Saturday - (8pm - 12am)
                </div>
                <div className="prose prose-purple block text-base">
                  Stream schedule can change, I could stream more or less but will try to stick to
                  these days. Follow <a href="https://twitter.com/chiefpansancolt">Twitter</a> or{' '}
                  <a href="https://twitch.tv/chiefpansancolt">Twitch</a> for going live
                  notifications
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
