import { useState } from "react";
import { signOut } from "firebase/auth";

import DateInputs from "../components/Sidebar/DateInputs";
import ResultCards from "../components/Sidebar/ResultCards";
import GannWheel from "../components/Wheel/GannWheel";
import HarmonicTable from "../components/Table/HarmonicTable";
import { auth } from "../auth/firebase";
import { calculateDegree } from "../utils/calculateDegree";

export default function Dashboard() {
  const [equinox, setEquinox] = useState("");

  const [elapsed, setElapsed] = useState(0);
  const [degree, setDegree] = useState(0);
  const [harmonic, setHarmonic] = useState(0);
  const today = new Date().toISOString().split("T")[0];

 // default selection
  const [current, setCurrent] = useState(today);

const handleCalculate = () => {
  if (!equinox || !current) {
    alert("Please select both dates.");
    return;
  }

  const result = calculateDegree(equinox, current);

  setElapsed(result.elapsedDays);
  setDegree(result.degree);

  const importantDegrees = [
    0, 11.25, 22.5, 33.75, 45, 56.25, 60, 67.5, 78.75, 90,
    101.25, 112.5, 120, 123.75, 135, 146.25, 157.5,
    168.75, 180, 191.25, 202.5, 213.75, 225, 236.25,
    240, 247.5, 258.75, 270, 281.25, 292.5, 300,
    303.75, 315, 326.25, 337.5, 348.75
  ];

  const nextImportantDegree =
    importantDegrees.find((d) => d >= result.degree) ?? 0;

  setHarmonic(nextImportantDegree);
};

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">

      {/* Header 🌌 */}

      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-900/80 backdrop-blur">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">

          <div className="text-center sm:text-left">

            <h1 className="text-2xl font-bold tracking-wide sm:text-3xl">
              HMS GANN DEGREE CALCULATOR
            </h1> 

            <p className="mt-1 text-sm text-cyan-400">
                  Sun_Earth Cyclic Degree Calculator
            </p>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">

            <div className="rounded-xl border border-cyan-500 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 sm:px-5">
              Time : 23:59 Fixed
            </div>

            <button
              onClick={handleLogout}
              className="rounded-xl border border-red-500 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500 hover:text-white sm:px-5"
            >
              Logout
            </button>

          </div>

        </div>

      </header>

      {/* Main */}

      {/* <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

  <div className="grid gap-6 xl:grid-cols-12">

    

    <div className="space-y-6 xl:col-span-3">

      <DateInputs
        equinox={equinox}
        current={current}
        onEquinoxChange={setEquinox}
        onCurrentChange={setCurrent}
        onCalculate={handleCalculate}
      />

      <HarmonicTable currentDegree={degree} />

    </div>

    

    <div className="space-y-30 xl:col-span-9">

      

      <ResultCards
        elapsed={elapsed}
        degree={degree}
        harmonic={harmonic}
      />

     

      <GannWheel degree={degree} />

    </div>

  </div>

</main> */}

<main className="mx-auto max-w-[1700px] px-6 py-6">

  <div className="grid gap-6 lg:grid-cols-12">

    {/* LEFT */}

    <div className="space-y-20 lg:col-span-3">

      <DateInputs
        equinox={equinox}
        current={current}
        onEquinoxChange={setEquinox}
        onCurrentChange={setCurrent}
        onCalculate={handleCalculate}
      />

      <ResultCards
        elapsed={elapsed}
        degree={degree}
        harmonic={harmonic}
      />

    </div>

    {/* RIGHT */}

    <div className="space-y-6 lg:col-span-9">

      <HarmonicTable
        currentDegree={degree}
      />

      <GannWheel degree={degree} />

    </div>

  </div>

</main>
    </div>
  );
}