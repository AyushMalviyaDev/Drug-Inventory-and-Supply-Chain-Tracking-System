export default function Credit() {
  return (
    <div className="w-[350px] h-[200px] rounded-2xl p-5 text-white 
      bg-gradient-to-br from-indigo-600 to-indigo-500 
      shadow-xl relative overflow-hidden 
      transition duration-300 hover:scale-105">

      {/* Glow */}
      <div className="absolute w-[150%] h-[150%] top-[-50%] left-[-50%] 
        bg-radial from-white/20 to-transparent"></div>

      {/* Logo */}
      <div className="absolute top-5 right-5 text-lg font-bold">
        VISA
      </div>

      {/* Chip */}
      <div className="w-12 h-8 bg-yellow-400 rounded-md mb-5"></div>

      {/* Number */}
      <div className="text-lg tracking-widest mb-5">
        1234 5678 9012 3456
      </div>

      {/* Footer */}
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-xs opacity-80">Card Holder</p>
          <p className="uppercase">Ayush Malviya</p>
        </div>
        <div>
          <p className="text-xs opacity-80">Expires</p>
          <p>12/28</p>
        </div>
      </div>
    </div>
  );
}