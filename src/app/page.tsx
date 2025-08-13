import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-cyan-400">
          สวัสดี, Tailwind CSS!
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          ตอนนี้คุณพร้อมที่จะสร้างเว็บสวยๆ ด้วย Next.js และ Tailwind แล้ว
        </p>
        <button className="mt-8 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-semibold transition-colors">
          เริ่มต้นกันเลย!
        </button>
      </div>
    </main>
  );
}
