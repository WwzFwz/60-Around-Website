import React from "react";


export default function Page() {

  return (
    //contoh//
    <div>
      <section className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
      style={{backgroundImage: `url(/photo/PhotoReference/TerminalCoffe-1.jpeg)`}}>
        <div>
          <h1 className="text-4xl font-bold">Terminal Coffee</h1>
          <p className="mt-2 text-lg">Temani mu mengerjakan tugas dengan secangkir kopi arabica press terbaik sekota Bandung!</p>
        </div>
      </section>

      <section className="bg-yellow-100 py-8">
        <div className="flex justify-center mb-6">
            <input type="text" placeholder="Scenery Cafe" className="w-80 p-3 border-2 border-orange-500 rounded-l-lg text-lg" />
            <button className="bg-orange-500 text-white p-3 rounded-r-lg hover:bg-orange-600">Search</button>
        </div>
        <div className="flex justify-center space-x-4">
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">Entertainment</button>
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">Foodies</button>
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">Study</button>
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">Sport & Health</button>
            <button className="bg-orange-200 text-gray-800 py-2 px-4 rounded hover:bg-orange-300">Household</button>
        </div>
      </section>
    </div>
  );  
}

