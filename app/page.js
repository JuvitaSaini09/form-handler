import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          Build Custom Forms
        </h1>
        <p className="text-gray-600 mb-8">
          Create, share, and analyze forms with ease
        </p>
        <Link 
          href="/create"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create New Form
        </Link>
      </div>
    </main>
  );
}
