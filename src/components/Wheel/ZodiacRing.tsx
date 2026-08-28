// const majorLabels = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

// export default function ZodiacRing() {
//   const center = 350;
//   const outer = 300;

//   return (
//     <>
//       {/* Background */}
//       <circle cx={center} cy={center} r={outer} fill="#0f172a" />

//       {/* Outer Ring */}
//       <circle
//         cx={center}
//         cy={center}
//         r={outer}
//         fill="none"
//         stroke="#00d4ff"
//         strokeWidth="3"
//       />

//       {/* Concentric Rings */}
//       {[250, 200, 150, 100, 50].map((r) => (
//         <circle
//           key={r}
//           cx={center}
//           cy={center}
//           r={r}
//           fill="none"
//           stroke="#1e293b"
//           strokeWidth="1"
//         />
//       ))}

//       {/* Harmonic Tick Marks every 11.25° */}
//       {Array.from({ length: 32 }).map((_, i) => {
//         const deg = i * 11.25;
//         const rad = ((deg - 90) * Math.PI) / 180;

//         const x1 = center + Math.cos(rad) * 290;
//         const y1 = center + Math.sin(rad) * 290;

//         const x2 = center + Math.cos(rad) * 300;
//         const y2 = center + Math.sin(rad) * 300;

//         return (
//           <line
//             key={deg}
//             x1={x1}
//             y1={y1}
//             x2={x2}
//             y2={y2}
//             stroke="#FFD700"
//             strokeWidth="2"
//           />
//         );
//       })}

//       {/* Major 30° Lines + Labels */}
//       {majorLabels.map((deg) => {
//         const rad = ((deg - 90) * Math.PI) / 180;

//         const x1 = center;
//         const y1 = center;

//         const x2 = center + Math.cos(rad) * outer;
//         const y2 = center + Math.sin(rad) * outer;

//         const tx = center + Math.cos(rad) * 320;
//         const ty = center + Math.sin(rad) * 320;

//         return (
//           <g key={deg}>
//             <line
//               x1={x1}
//               y1={y1}
//               x2={x2}
//               y2={y2}
//               stroke="#23304d"
//               strokeWidth="1"
//             />

//             <text
//               x={tx}
//               y={ty}
//               fill="#00d4ff"
//               textAnchor="middle"
//               dominantBaseline="middle"
//               fontSize="13"
//             >
//               {deg}°
//             </text>
//           </g>
//         );
//       })}
//     </>
//   );
// }

const majorLabels = [0,   11.25, 22.5, 33.75, 45,
  56.25, 60, 67.5, 78.75,
  90, 101.25, 112.5, 120,
  123.75, 135, 146.25, 157.5,
  168.75, 180, 191.25, 202.5,
  213.75, 225, 236.25, 240,
  247.5, 258.75, 270, 281.25,
  292.5, 300, 303.75, 315,
  326.25, 337.5, 348.75,];

const importantDegrees = [
  11.25, 22.5, 33.75, 45,
  56.25, 60, 67.5, 78.75,
  90, 101.25, 112.5, 120,
  123.75, 135, 146.25, 157.5,
  168.75, 180, 191.25, 202.5,
  213.75, 225, 236.25, 240,
  247.5, 258.75, 270, 281.25,
  292.5, 300, 303.75, 315,
  326.25, 337.5, 348.75, 360,
];

export default function ZodiacRing() {
  const center = 350;
  const outer = 300;

  return (
    <>
      {/* Background */}
      <circle
        cx={center}
        cy={center}
        r={outer}
        fill="#111827"
      />

      {/* Outer Ring */}
      <circle
        cx={center}
        cy={center}
        r={outer}
        fill="none"
        stroke="#00D4FF"
        strokeWidth="3"
      />

      {/* Inner Rings */}
      {[250, 200, 150, 100, 50].map((r) => (
        <circle
          key={r}
          cx={center}
          cy={center}
          r={r}
          fill="none"
          stroke="#23304d"
        />
      ))}

      {/* Tick Marks */}
      {Array.from({ length: 96 }).map((_, i) => {
        const degree = i * 3.75;

        const rad = ((degree - 90) * Math.PI) / 180;

        const isImportant = importantDegrees.some(
          (d) => Math.abs(d - degree) < 0.001
        );

        const innerRadius = isImportant ? 282 : 292;

        const x1 = center + Math.cos(rad) * innerRadius;
        const y1 = center + Math.sin(rad) * innerRadius;

        const x2 = center + Math.cos(rad) * outer;
        const y2 = center + Math.sin(rad) * outer;

        return (
          <line
            key={degree}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={isImportant ? "#FFD700" : "#38bdf8"}
            strokeWidth={isImportant ? 3 : 1}
          />
        );
      })}

      {/* Major Lines */}
{/* Major Lines */}
{/* Major Lines */}
{majorLabels.map((deg) => {
  const rad = ((deg - 90) * Math.PI) / 180;

  const x2 = center + Math.cos(rad) * outer;
  const y2 = center + Math.sin(rad) * outer;

  // Same radius for every label
  const labelRadius = 325;

  const tx = center + Math.cos(rad) * labelRadius;
  const ty = center + Math.sin(rad) * labelRadius;

  return (
    <g key={deg}>
      <line
        x1={center}
        y1={center}
        x2={x2}
        y2={y2}
        stroke="#1f3556"
      />

      <text
        x={tx}
        y={ty}
        fill="#00d4ff"
        fontSize="12"
        fontWeight="bold"
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {deg.toFixed(deg % 1 === 0 ? 0 : 2).replace(/\.00$/, "")}°
      </text>
    </g>
  );
})}
    </>
  );
}