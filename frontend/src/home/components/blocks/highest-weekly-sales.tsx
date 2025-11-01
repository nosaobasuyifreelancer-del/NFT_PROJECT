export default function HighestWeeklySales() {
  return (
    <div className="flex flex-col gap-4 p-6 min-h-0 min-w-0">
      <div className="flex flex-col lg:gap-1">
        <span className="font-medium leading-tight text-xl">
          Highest Weekly Sales
        </span>
      </div>

      {/* Card */}
      <div className="relative overflow-hidden rounded-lg shadow-sm h-[400px]">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://i2.seadn.io/base/8cef6e396e474b7e83666bd3be3e1305/96686fbf63dc48658c843dbcdbc5f6/2396686fbf63dc48658c843dbcdbc5f6.png?w=1000")`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 text-white">
          <span className="text-lg font-semibold">#1 Bored Ape Yacht Club</span>
          <span className="text-sm opacity-80">Total sales: 245 ETH</span>
        </div>
      </div>
    </div>
  );
}
