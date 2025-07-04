import Head from 'next/head';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Stitch Design</title>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Lexend:wght@400;700&family=Noto+Sans:wght@400;700"
        />
      </Head>
      <main className="relative flex min-h-screen flex-col bg-slate-50 font-[Lexend,_Noto_Sans,sans-serif]">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-0">
          <div
            className="flex min-h-[480px] flex-col gap-6 md:gap-10 rounded-xl bg-cover bg-center bg-no-repeat items-start justify-end px-6 pb-10 md:px-12 shadow-xl"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDril_yK6VM1dUnCnXrcA2m4eq5BxrNKCTr0gJafdEFhmJtmTCFX0dttuYfdvyVUuusyO4_VuFFeIR5hc0uWQEBOzEKPQo216xMEcW0LZ13n5ti3Nm3pDcXbR69K26GPSNmgTxXPW2rl8YaQDLWFirgt4xD1emv0e0dZ5Brzk4mYonkE66u12-KJX7S26Ac22thaggVofWl64ASxeISL2j6c9b-kyCTxsh90LZPO1lmj-xKoBig7iy8ewL320higtMY0AfPj-Rnjck')",
            }}
          >
            <div className="flex flex-col gap-3 text-white max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Revolutionize Learning with LibEd Core + SIA
              </h1>
              <h2 className="text-base md:text-lg font-normal leading-relaxed">
                AI-enhanced school OS + student/teacher assistant — built for low-bandwidth, mobile-first schools.
              </h2>
              <button className="h-12 px-6 bg-blue-500 hover:bg-blue-600 transition text-white text-base font-semibold rounded-lg mt-4 shadow-md">
                Join the Waitlist
              </button>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-[#0d141c] text-3xl md:text-4xl font-bold max-w-3xl mb-8">
            Core Features
          </h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            {[
              {
                title: 'AI Chatbot (SIA)',
                desc: '24/7 study helper, quiz generator, teacher planner.',
                icon: '🤖',
              },
              {
                title: 'School Ops Tools',
                desc: 'Attendance, grades, timetables, parent communication.',
                icon: '🏫',
              },
              {
                title: 'LMS Lite',
                desc: 'Assignments, quizzes, student dashboard.',
                icon: '📋',
              },
              {
                title: 'Mobile + Multilingual',
                desc: 'Works great in rural/low-resource settings.',
                icon: '🌐',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 border border-[#cedbe8] bg-white p-6 rounded-xl hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <h2 className="text-[#0d141c] text-lg font-semibold">{item.title}</h2>
                <p className="text-[#49739c] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why LibEd Section */}
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-[#0d141c] text-3xl md:text-4xl font-bold max-w-3xl mb-8">Why LibEd?</h1>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
            {[
              {
                title: 'Free for small schools & NGOs',
                desc: 'Accessible education for all.',
                icon: '💸',
              },
              {
                title: 'NEP 2020 & global edtech',
                desc: 'Aligned with modern educational standards.',
                icon: '📘',
              },
              {
                title: 'Open-source & customizable',
                desc: 'Adaptable to your unique needs.',
                icon: '🛠️',
              },
              {
                title: 'Safe AI for education',
                desc: 'Responsible and ethical AI.',
                icon: '🛡️',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-2 border border-[#cedbe8] bg-white p-6 rounded-xl hover:shadow-md transition"
              >
                <div className="text-3xl">{item.icon}</div>
                <h2 className="text-[#0d141c] text-lg font-semibold">{item.title}</h2>
                <p className="text-[#49739c] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Audience and Roadmap */}
        <section className="container mx-auto px-4 py-10 space-y-8">
          <div>
            <h2 className="text-[#0d141c] text-xl font-bold">Who's it for?</h2>
            <p className="text-[#0d141c] mt-2 text-base leading-relaxed">
              Budget-conscious K-12 schools. Coaching centers, vocational programs. NGOs like Teach For India,
              Akanksha.
            </p>
          </div>
          <div>
            <h2 className="text-[#0d141c] text-xl font-bold">Coming Soon</h2>
            <p className="text-[#0d141c] mt-2 text-base leading-relaxed">
              Mobile app for parents & students. WhatsApp integration. Certificate engine.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 text-center bg-gradient-to-b from-slate-100 to-white">
          <h1 className="text-[#0d141c] text-3xl md:text-4xl font-bold max-w-2xl mx-auto">
            Be the first to bring safe, AI-powered education to your school.
          </h1>
          <div className="mt-6">
            <button className="h-12 px-6 bg-blue-500 hover:bg-blue-600 transition text-white text-base font-semibold rounded-lg shadow-md">
              Join the Waitlist Now
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
