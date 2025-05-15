import TopicCarousel from '@/components/TopicCarousel';

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <section className="text-center">
        <h2 className="text-4xl font-extrabold mb-4">Welcome to the Systems Design Book Club</h2>
        <TopicCarousel />
        <p className="text-lg text-gray-700 mb-6">
          Join us to explore, discuss, and master systems design through curated readings, lectures, and lively meetings.
        </p>
      </section>
    </main>
  );
}
