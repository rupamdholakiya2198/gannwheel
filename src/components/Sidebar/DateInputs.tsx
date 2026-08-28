import { equinoxDates } from "../../constants/equinoxDates";

type DateInputsProps = {
  equinox: string;
  current: string;
  onEquinoxChange: (value: string) => void;
  onCurrentChange: (value: string) => void;
  onCalculate: () => void;
};

export default function DateInputs({
  equinox,
  current,
  onEquinoxChange,
  onCurrentChange,
  onCalculate,
}: DateInputsProps) {
  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900/80 p-5 shadow-2xl backdrop-blur sm:p-6">

      <h2 className="mb-6 text-center text-lg font-bold text-cyan-400 sm:mb-8 sm:text-xl">
        PARAMETERS
      </h2>

      <div className="space-y-5">

        {/* Equinox Date */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            📅 Equinox Date
          </label>

          {/* <input
            type="date"
            value={equinox}
            onChange={(e) => onEquinoxChange(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
          /> */}
          <select
  value={equinox}
  onChange={(e) => onEquinoxChange(e.target.value)}
  className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 text-white outline-none transition focus:border-cyan-500"
>
  <option value="">Select Equinox Date</option>

  {equinoxDates.map((date) => (
    <option key={date} value={date}>
      {date.split("-").reverse().join("-")}
    </option>
  ))}
</select>
        </div>

        {/* Current Date */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            📅 Current Date
          </label>

          <input
            type="date"
            value={current}
            onChange={(e) => onCurrentChange(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition duration-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30"
          />
        </div>

        {/* Fixed Time */}

        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-300">
            🕒 Time
          </label>

          <input
            value="23:59"
            readOnly
            className="w-full cursor-not-allowed rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-slate-300"
          />
        </div>

        {/* Calculate Button */}

        <button
          onClick={onCalculate}
          className="mt-3 w-full rounded-xl bg-cyan-500 py-3 text-base font-bold text-slate-900 transition-all duration-300 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/40 active:scale-95 sm:text-lg"
        >
          Calculate
        </button>

      </div>

    </div>
  );
}