import { Check, Sparkles } from 'lucide-react';

/**
 * Illustrative annotation workspace — pure SVG/CSS, no images to download.
 * Decorative: hidden from assistive tech, the hero copy carries the meaning.
 */

const labels = [
  { name: 'Vehicle', color: 'bg-electric-400' },
  { name: 'Pedestrian', color: 'bg-signal' },
  { name: 'Signage', color: 'bg-violet-400' },
  { name: 'Drivable area', color: 'bg-emerald-400' },
];

const reviewSteps = ['Annotated', 'Peer review', 'QA approved'];

function Scene() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" role="presentation">
      <defs>
        <linearGradient id="hv-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#14234a" />
          <stop offset="1" stopColor="#0a1430" />
        </linearGradient>
        <linearGradient id="hv-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d1938" />
          <stop offset="1" stopColor="#070e24" />
        </linearGradient>
        <linearGradient id="hv-scan" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3dd9ff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#3dd9ff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#3dd9ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hv-scan-glow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3dd9ff" stopOpacity="0" />
          <stop offset="1" stopColor="#3dd9ff" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      {/* Sky & ground */}
      <rect width="400" height="160" fill="url(#hv-sky)" />
      <rect y="158" width="400" height="142" fill="url(#hv-ground)" />

      {/* Skyline */}
      <g fill="#1d3061" opacity="0.9">
        <rect x="0" y="92" width="34" height="70" />
        <rect x="36" y="70" width="28" height="92" />
        <rect x="66" y="104" width="38" height="58" />
        <rect x="106" y="84" width="24" height="78" />
        <rect x="270" y="96" width="30" height="66" />
        <rect x="302" y="64" width="26" height="98" />
        <rect x="330" y="100" width="36" height="62" />
        <rect x="368" y="80" width="32" height="82" />
      </g>
      <g fill="#5b8cff" opacity="0.35">
        {[[44, 80], [52, 96], [44, 112], [312, 76], [320, 92], [312, 108], [378, 92], [386, 110], [114, 96], [76, 114]].map(
          ([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="4" height="5" rx="1" />
          ),
        )}
      </g>

      {/* Road with perspective */}
      <polygon points="40,300 360,300 216,160 184,160" fill="#0a1430" />
      <g stroke="#2a4078" strokeWidth="1">
        <line x1="184" y1="160" x2="40" y2="300" />
        <line x1="216" y1="160" x2="360" y2="300" />
      </g>
      <g fill="#8fb4ff" opacity="0.5">
        <polygon points="199,168 201,168 202,180 198,180" />
        <polygon points="198,192 202,192 203,212 197,212" />
        <polygon points="197,230 203,230 205,262 195,262" />
      </g>

      {/* Drivable-area segmentation */}
      <polygon
        points="52,298 348,298 214,164 186,164"
        fill="#34d399"
        fillOpacity="0.07"
        stroke="#34d399"
        strokeWidth="1.2"
        strokeDasharray="5 3"
        className="animate-dash"
      />

      {/* Vehicle */}
      <g>
        <path d="M222 236 q2 -22 18 -26 h44 q16 4 20 26 v14 h-82z" fill="#2a4078" />
        <path d="M238 214 h44 l8 16 h-60z" fill="#5b8cff" opacity="0.35" />
        <rect x="222" y="236" width="82" height="16" rx="4" fill="#1d3061" />
        <circle cx="238" cy="254" r="7" fill="#040817" />
        <circle cx="288" cy="254" r="7" fill="#040817" />
        <rect x="224" y="240" width="10" height="4" rx="1" fill="#c4d6ff" opacity="0.8" />
        <rect x="292" y="240" width="10" height="4" rx="1" fill="#c4d6ff" opacity="0.8" />
      </g>

      {/* Pedestrian */}
      <g fill="#2a4078">
        <circle cx="97" cy="186" r="6" />
        <rect x="90" y="194" width="14" height="26" rx="6" />
        <rect x="91" y="216" width="5" height="18" rx="2" />
        <rect x="98" y="216" width="5" height="18" rx="2" />
      </g>

      {/* Sign */}
      <g>
        <rect x="320" y="160" width="3" height="32" fill="#2a4078" />
        <circle cx="321.5" cy="152" r="10" fill="#1d3061" stroke="#a78bfa" strokeOpacity="0.5" />
        <rect x="316" y="150.5" width="11" height="3" rx="1" fill="#c4d6ff" opacity="0.7" />
      </g>

      {/* Bounding boxes */}
      <g fill="none" strokeWidth="1.6">
        <rect x="214" y="204" width="98" height="60" rx="2" stroke="#5b8cff" fill="#5b8cff" fillOpacity="0.07" />
        <rect x="83" y="174" width="28" height="64" rx="2" stroke="#3dd9ff" fill="#3dd9ff" fillOpacity="0.07" />
        <rect x="308" y="138" width="27" height="58" rx="2" stroke="#a78bfa" fill="#a78bfa" fillOpacity="0.07" />
      </g>
      {/* Corner handles on the active box */}
      <g fill="#ffffff" stroke="#5b8cff" strokeWidth="1">
        {[[214, 204], [312, 204], [214, 264], [312, 264]].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 2.5} y={y - 2.5} width="5" height="5" rx="1" />
        ))}
      </g>

      {/* Label tags */}
      <g fontFamily="Inter, sans-serif" fontSize="8" fontWeight="600">
        <rect x="214" y="191" width="44" height="12" rx="2" fill="#5b8cff" />
        <text x="219" y="200" fill="#fff">vehicle</text>
        <rect x="83" y="161" width="54" height="12" rx="2" fill="#3dd9ff" />
        <text x="88" y="170" fill="#040817">pedestrian</text>
        <rect x="308" y="125" width="27" height="12" rx="2" fill="#a78bfa" />
        <text x="312" y="134" fill="#040817">sign</text>
      </g>

      {/* Cursor dragging the box corner */}
      <path d="M314 266 l0 13 l3.5 -3.2 l2.6 5.6 l2.2 -1 l-2.6 -5.5 l4.8 -0.4z" fill="#fff" stroke="#040817" strokeWidth="0.8" />

      {/* Scan line */}
      <g className="animate-scan" style={{ '--scan-distance': '290px' }}>
        <rect x="0" y="-24" width="400" height="24" fill="url(#hv-scan-glow)" />
        <rect x="0" y="0" width="400" height="1.5" fill="url(#hv-scan)" />
      </g>
    </svg>
  );
}

function Waveform() {
  const bars = [6, 10, 16, 9, 20, 26, 14, 8, 18, 24, 12, 6, 10, 22, 28, 16, 9, 14, 20, 11, 7, 12, 18, 9];
  return (
    <div className="flex h-9 items-center gap-[3px]" aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          className={`w-[3px] rounded-full ${i >= 4 && i <= 10 ? 'bg-electric-400' : i >= 13 && i <= 19 ? 'bg-signal' : 'bg-white/20'}`}
          style={{ height: `${h}px` }}
        />
      ))}
    </div>
  );
}

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none" aria-hidden="true">
      {/* Ambient glow */}
      <div className="absolute -inset-10 rounded-[3rem] bg-electric-500/20 blur-3xl" />
      <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-signal/20 blur-3xl" />

      {/* Workspace window */}
      <div className="relative rounded-2xl border border-white/10 bg-navy-900/85 p-2 shadow-[0_40px_120px_-30px_rgba(46,107,255,0.55)] backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-white/5 px-3 pb-2.5 pt-1.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex min-w-0 gap-1 overflow-hidden text-[11px] font-medium">
            <span className="rounded-md bg-white/10 px-2.5 py-1 text-white">frame_0142.jpg</span>
            <span className="hidden rounded-md px-2.5 py-1 text-slate-400 sm:inline">transcript.txt</span>
            <span className="hidden rounded-md px-2.5 py-1 text-slate-400 md:inline">sweep.pcd</span>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
            <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-emerald-300" />
            Live QA
          </span>
        </div>

        <div className="grid grid-cols-1 gap-2 p-1.5 pt-2 sm:grid-cols-[1fr_9.5rem]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/5">
            <Scene />
          </div>

          <div className="hidden flex-col gap-2 sm:flex">
            <div className="rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Classes</p>
              <ul className="space-y-2">
                {labels.map((l) => (
                  <li key={l.name} className="flex items-center gap-2 text-[11px] text-slate-200">
                    <span className={`h-2 w-2 rounded-sm ${l.color}`} />
                    {l.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 rounded-xl border border-white/5 bg-white/[0.03] p-3">
              <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Review</p>
              <ol className="space-y-2.5">
                {reviewSteps.map((s, i) => (
                  <li key={s} className="flex items-center gap-2 text-[11px] text-slate-200">
                    <span
                      className={`flex h-4 w-4 items-center justify-center rounded-full ${
                        i === reviewSteps.length - 1 ? 'bg-emerald-400 text-navy-950' : 'bg-electric-500 text-white'
                      }`}
                    >
                      <Check className="h-2.5 w-2.5" strokeWidth={3} />
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Floating card — text annotation */}
      <div className="absolute -bottom-16 -left-4 hidden w-64 animate-float-slow rounded-xl border border-white/10 bg-navy-850/95 p-3.5 shadow-2xl backdrop-blur-xl sm:block lg:-left-10">
        <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          <Sparkles className="h-3 w-3 text-electric-300" /> Entity labelling
        </p>
        <p className="text-[12px] leading-6 text-slate-200">
          Deliver the{' '}
          <mark className="rounded bg-electric-500/25 px-1 text-electric-200 ring-1 ring-electric-400/40">
            sensor kit <sup className="text-[8px] font-bold">PRODUCT</sup>
          </mark>{' '}
          to{' '}
          <mark className="rounded bg-signal/20 px-1 text-cyan-100 ring-1 ring-signal/40">
            Lisbon <sup className="text-[8px] font-bold">LOC</sup>
          </mark>{' '}
          by{' '}
          <mark className="rounded bg-violet-400/20 px-1 text-violet-100 ring-1 ring-violet-400/40">
            Friday <sup className="text-[8px] font-bold">DATE</sup>
          </mark>
        </p>
      </div>

      {/* Floating card — audio segments */}
      <div className="absolute -right-3 -top-28 hidden w-52 animate-float-delayed rounded-xl border border-white/10 bg-navy-850/95 p-3.5 shadow-2xl backdrop-blur-xl sm:block lg:-right-8">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">Speaker diarization</p>
        <Waveform />
        <div className="mt-2 flex gap-2 text-[10px] font-medium">
          <span className="rounded bg-electric-500/20 px-1.5 py-0.5 text-electric-200">Speaker A</span>
          <span className="rounded bg-signal/15 px-1.5 py-0.5 text-cyan-100">Speaker B</span>
        </div>
      </div>
    </div>
  );
}
