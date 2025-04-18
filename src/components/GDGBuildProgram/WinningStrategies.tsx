export default function WinningStrategies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12">
          🎯 What Makes Winners Win
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {/* <p className="text-xl text-center mb-8">
            We teach you how top teams succeed:
          </p> */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Collaborate Face-to-Face</h3>
              <p className="text-gray-600">
                Work together on campus for effective communication.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Handle Pressure</h3>
              <p className="text-gray-600">
                Pressure comes when trying to produce A LOT in a small amount of time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4">100% Commitment</h3>
              <p className="text-gray-600">
                Putting 100% to it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 