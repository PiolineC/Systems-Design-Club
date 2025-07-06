export default function ApplyPage() {
  return (
    <div className="max-w-3xl mx-auto p-4 text-center space-y-8">
      <h1 className="text-4xl font-extrabold text-indigo-400">Apply to Join</h1>
      <p className="text-lg text-gray-300">
        We're currently closed to new members. 
        <br></br>Recruiting will reopen at the beginning of the next school year.
      </p>

      <div className="bg-indigo-950/40 border border-indigo-700 rounded-lg p-6 text-gray-300">
        <p className="text-lg font-medium">
          The Quorum is a community of engineers, builders, and systems nerds.
        </p>
        <p className="mt-2 text-sm text-gray-400">
          We meet weekly to dive into topics like systems design, networking, and career growth.
        </p>
      </div>

      <p className="text-sm text-gray-400 italic">
        Applications will reopen in Fall 2025. Check back then!
      </p>

      {<div className="max-w-sm mx-auto">
        <input 
          type="email" 
          placeholder="Get notified when we're recruiting" 
          className="w-full px-4 py-2 border rounded bg-black/20 border-indigo-700 text-white placeholder-gray-400"
        />
        <button className="mt-2 w-full bg-indigo-800 hover:bg-indigo-600 text-gray-300 font-semibold py-2 rounded">
          Notify Me
        </button>
      </div>}
    </div>
  );
}
