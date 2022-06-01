export default function Schedule() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-purple-900 text-center lg:max-w-xl lg:text-left">
            Chief's Stream Schedule
          </h2>
          <div className="flow-root self-center mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              <div className="col-span-1">
                <div className="block text-lg font-bold">
                  Tuesday, Thursday, Saturday - (8pm - 12am)
                </div>
                <div className="block text-base prose prose-purple">
                  Stream schedule can change, I could stream more or less but will try to stick to
                  these days. Follow <a href="https://twitter.com/chiefpansancolt">Twitter</a>,{' '}
                  <a href="https://efuse.gg/u/Chiefpansancolt">eFuse</a>, or{' '}
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
