// All clothing item SVG components
// Uses helper base shapes + unique decorations per item
// Shared coordinate system: viewBox 0 0 300 450

import { clothingItems } from "@/lib/gameData";

// ─── BASE SHAPE HELPERS ──────────────────────────────

function TopShape({ color, sleeveColor, children }: { color: string; sleeveColor?: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d="M88 185 Q88 175 150 170 Q212 175 212 185 L215 310 Q150 320 85 310 Z" fill={color} />
      <rect x="68" y="190" width="30" height="70" fill={sleeveColor || color} rx="14" />
      <rect x="202" y="190" width="30" height="70" fill={sleeveColor || color} rx="14" />
      {children}
    </g>
  );
}

function VestShape({ color, children }: { color: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d="M95 185 Q95 175 150 170 Q205 175 205 185 L208 305 Q150 315 92 305 Z" fill={color} />
      {children}
    </g>
  );
}

function SkirtShape({ color, children }: { color: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d="M100 285 L90 370 Q150 385 210 370 L200 285 Q150 278 100 285 Z" fill={color} />
      {children}
    </g>
  );
}

function PantsShape({ color, children }: { color: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d="M102 285 L95 375 Q120 380 140 375 L145 285 Z" fill={color} />
      <path d="M155 285 L160 375 Q180 380 205 375 L198 285 Z" fill={color} />
      {children}
    </g>
  );
}

function ShortsShape({ color, children }: { color: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d="M102 285 L98 340 Q125 348 148 340 L148 285 Z" fill={color} />
      <path d="M152 285 L152 340 Q175 348 202 340 L198 285 Z" fill={color} />
      {children}
    </g>
  );
}

function BootShape({ color, soleColor, children }: { color: string; soleColor?: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d="M100 358 L100 393 Q100 402 112 402 L135 402 Q142 402 142 393 L142 358 Z" fill={color} />
      <path d="M158 358 L158 393 Q158 402 170 402 L193 402 Q200 402 200 393 L200 358 Z" fill={color} />
      <rect x="98" y="399" width="46" height="5" fill={soleColor || "#3D2D1D"} rx="2" />
      <rect x="156" y="399" width="46" height="5" fill={soleColor || "#3D2D1D"} rx="2" />
      {children}
    </g>
  );
}

function ShoeShape({ color, soleColor, children }: { color: string; soleColor?: string; children?: React.ReactNode }) {
  return (
    <g>
      <path d="M105 370 L100 395 Q100 402 112 402 L138 402 Q142 402 142 395 L140 370 Z" fill={color} />
      <path d="M160 370 L158 395 Q158 402 170 402 L196 402 Q200 402 200 395 L198 370 Z" fill={color} />
      <rect x="98" y="399" width="46" height="4" fill={soleColor || "#3D2D1D"} rx="2" />
      <rect x="156" y="399" width="46" height="4" fill={soleColor || "#3D2D1D"} rx="2" />
      {children}
    </g>
  );
}

function Waistband({ color }: { color: string }) {
  return <path d="M102 285 Q150 278 198 285 L198 292 Q150 285 102 292 Z" fill={color} />;
}

function SkirtWaistband({ color }: { color: string }) {
  return <path d="M100 285 Q150 278 200 285 L200 292 Q150 285 100 292 Z" fill={color} />;
}

function Collar({ color }: { color: string }) {
  return <path d="M120 182 Q150 175 180 182" stroke={color} strokeWidth="4" fill="none" />;
}

function VCollar({ color, fill }: { color: string; fill?: string }) {
  return <path d="M130 180 L150 170 L170 180" stroke={color} strokeWidth="4" fill={fill || "none"} strokeLinejoin="round" />;
}

function Buttons({ x, y1, y2, count, color }: { x: number; y1: number; y2: number; count: number; color: string }) {
  const gap = (y2 - y1) / (count - 1);
  return (
    <g>
      {Array.from({ length: count }).map((_, i) => (
        <circle key={i} cx={x} cy={y1 + gap * i} r={3} fill={color} />
      ))}
    </g>
  );
}

function CenterLine({ y1, y2, color }: { y1: number; y2: number; color: string }) {
  return <line x1="150" y1={y1} x2="150" y2={y2} stroke={color} strokeWidth="3" />;
}

// ─── DECORATIVE PATTERN HELPERS ──────────────────────

function DotPattern({ positions, color, r }: { positions: [number, number][]; color: string; r?: number }) {
  return (
    <g>
      {positions.map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={r || 4} fill={color} opacity="0.7" />
      ))}
    </g>
  );
}

function SmallFlowers({ positions, petalColor, centerColor }: { positions: [number, number][]; petalColor: string; centerColor: string }) {
  return (
    <g>
      {positions.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r={5} fill={petalColor} opacity="0.8" />
          <circle cx={cx} cy={cy} r={2} fill={centerColor} />
        </g>
      ))}
    </g>
  );
}

function HorizStripes({ y1, y2, x1, x2, color, gap, width }: { y1: number; y2: number; x1: number; x2: number; color: string; gap: number; width?: number }) {
  const lines = [];
  for (let y = y1; y <= y2; y += gap) {
    lines.push(<line key={y} x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth={width || 2} opacity="0.5" />);
  }
  return <g>{lines}</g>;
}

function VertStripes({ y1, y2, x1, x2, color, gap, width }: { y1: number; y2: number; x1: number; x2: number; color: string; gap: number; width?: number }) {
  const lines = [];
  for (let x = x1; x <= x2; x += gap) {
    lines.push(<line key={x} x1={x} y1={y1} x2={x} y2={y2} stroke={color} strokeWidth={width || 2} opacity="0.5" />);
  }
  return <g>{lines}</g>;
}

function SnowflakeAt({ cx, cy, size, color }: { cx: number; cy: number; size: number; color: string }) {
  return (
    <g opacity="0.7">
      {[0, 60, 120].map((a) => (
        <line key={a} x1={cx - size} y1={cy} x2={cx + size} y2={cy} stroke={color} strokeWidth="1.5" strokeLinecap="round" transform={`rotate(${a} ${cx} ${cy})`} />
      ))}
    </g>
  );
}

// ═══════════════════════════════════════════════════════
// FALL ITEMS
// ═══════════════════════════════════════════════════════

function MushroomBeret() {
  return (
    <g>
      <ellipse cx="150" cy="75" rx="42" ry="18" fill="#A03020" />
      <ellipse cx="150" cy="62" rx="35" ry="22" fill="#C7522A" />
      <ellipse cx="150" cy="55" rx="28" ry="18" fill="#D4623A" />
      <circle cx="135" cy="55" r="4" fill="#FFF8EE" opacity="0.9" />
      <circle cx="155" cy="48" r="3" fill="#FFF8EE" opacity="0.9" />
      <circle cx="168" cy="58" r="3.5" fill="#FFF8EE" opacity="0.9" />
      <circle cx="142" cy="66" r="3" fill="#FFF8EE" opacity="0.8" />
      <circle cx="160" cy="68" r="2.5" fill="#FFF8EE" opacity="0.8" />
      <ellipse cx="150" cy="40" rx="5" ry="4" fill="#F5E6D3" />
    </g>
  );
}

function LeafCrown() {
  return (
    <g>
      <path d="M110 78 Q130 72 150 75 Q170 72 190 78" stroke="#4A7C59" strokeWidth="3" fill="none" />
      <ellipse cx="115" cy="70" rx="12" ry="7" fill="#C7522A" transform="rotate(-30 115 70)" />
      <ellipse cx="133" cy="63" rx="10" ry="6" fill="#E8A838" transform="rotate(-15 133 63)" />
      <ellipse cx="150" cy="60" rx="11" ry="7" fill="#D4623A" />
      <ellipse cx="167" cy="63" rx="10" ry="6" fill="#B88A3D" transform="rotate(15 167 63)" />
      <ellipse cx="185" cy="70" rx="12" ry="7" fill="#C7522A" transform="rotate(30 185 70)" />
      <circle cx="125" cy="60" r="3" fill="#7B4F7B" />
      <circle cx="158" cy="57" r="3" fill="#C7522A" />
      <circle cx="178" cy="62" r="2.5" fill="#7B4F7B" />
    </g>
  );
}

function CozyBeanie() {
  return (
    <g>
      <path d="M105 82 Q105 45 150 38 Q195 45 195 82" fill="#7B4F7B" />
      <path d="M108 72 Q150 65 192 72" stroke="#D4788C" strokeWidth="4" fill="none" />
      <path d="M106 60 Q150 52 194 60" stroke="#E8A838" strokeWidth="4" fill="none" />
      <path d="M102 82 Q150 88 198 82" stroke="#5C2F5C" strokeWidth="6" fill="none" strokeLinecap="round" />
      <circle cx="150" cy="32" r="10" fill="#D4788C" />
      <circle cx="146" cy="28" r="4" fill="#E8A0B0" opacity="0.6" />
    </g>
  );
}

function AcornCap() {
  return (
    <g>
      <path d="M110 80 Q110 55 150 48 Q190 55 190 80" fill="#8B6914" />
      <path d="M120 70 Q135 62 150 65 Q165 62 180 70" stroke="#6B4226" strokeWidth="1.5" fill="none" />
      <path d="M115 75 Q135 68 150 70 Q165 68 185 75" stroke="#6B4226" strokeWidth="1.5" fill="none" />
      <VertStripes y1={58} y2={78} x1={125} x2={175} color="#6B4226" gap={15} width={1} />
      <rect x="147" y="40" width="6" height="10" fill="#4A7C59" rx="2" />
      <ellipse cx="153" cy="38" rx="5" ry="3" fill="#4A7C59" transform="rotate(20 153 38)" />
    </g>
  );
}

function PumpkinHat() {
  return (
    <g>
      <ellipse cx="150" cy="68" rx="40" ry="20" fill="#E87D3E" />
      <ellipse cx="140" cy="55" rx="18" ry="22" fill="#E8A838" />
      <ellipse cx="160" cy="55" rx="18" ry="22" fill="#D4623A" />
      <ellipse cx="150" cy="55" rx="12" ry="24" fill="#E87D3E" />
      {/* Stem */}
      <rect x="147" y="30" width="6" height="12" fill="#4A7C59" rx="2" />
      <ellipse cx="155" cy="30" rx="6" ry="3" fill="#4A7C59" transform="rotate(-15 155 30)" />
      {/* Face */}
      <polygon points="138,52 143,58 133,58" fill="#2D1B0E" />
      <polygon points="162,52 167,58 157,58" fill="#2D1B0E" />
      <path d="M140 65 Q145 62 150 65 Q155 62 160 65" stroke="#2D1B0E" strokeWidth="2" fill="none" />
    </g>
  );
}

function FloralSweater() {
  return (
    <TopShape color="#2D8B6A">
      <Collar color="#1B6B4A" />
      <SmallFlowers positions={[[120,210],[170,220],[140,250],[180,265],[110,275],[160,290]]} petalColor="#D4788C" centerColor="#E8A838" />
      <ellipse cx="145" cy="230" rx="5" ry="3" fill="#1B6B4A" transform="rotate(30 145 230)" />
      <ellipse cx="155" cy="270" rx="5" ry="3" fill="#1B6B4A" transform="rotate(-20 155 270)" />
    </TopShape>
  );
}

function PlaidJacket() {
  return (
    <TopShape color="#D4623A">
      <HorizStripes y1={200} y2={300} x1={88} x2={212} color="#A04020" gap={20} />
      <VertStripes y1={175} y2={315} x1={110} x2={190} color="#8B3018" gap={20} />
      <CenterLine y1={178} y2={315} color="#C7522A" />
      <Buttons x={150} y1={210} y2={270} count={3} color="#E8A838" />
      <VCollar color="#B84420" fill="#C7522A" />
    </TopShape>
  );
}

function PolkaVest() {
  return (
    <VestShape color="#7B4F7B">
      <DotPattern positions={[[120,200],[150,195],[175,205],[110,230],[140,225],[165,230],[190,225],[125,255],[155,250],[180,258],[115,280],[145,278],[170,283],[195,275],[130,300],[160,298]]} color="#D4788C" />
      <path d="M92 305 Q150 315 208 305" stroke="#5C2F5C" strokeWidth="3" fill="none" />
    </VestShape>
  );
}

function CozyCardigan() {
  return (
    <TopShape color="#F5E6D3">
      {/* Cable knit */}
      {[120,140,160,180].map(x => (
        <path key={x} d={`M${x} 190 Q${x+10} 210 ${x} 230 Q${x-10} 250 ${x} 270 Q${x+10} 290 ${x} 310`} stroke="#DDD0B8" strokeWidth="3" fill="none" />
      ))}
      <CenterLine y1={178} y2={315} color="#E8D5B8" />
      <Buttons x={150} y1={200} y2={290} count={4} color="#C7522A" />
      <g transform="translate(125, 210)">
        {[0,72,144,216,288].map(a => <ellipse key={a} cx="0" cy="-6" rx="3" ry="5" fill="#D4788C" transform={`rotate(${a})`} opacity="0.7" />)}
        <circle cx="0" cy="0" r="3" fill="#E8A838" />
      </g>
      <Collar color="#E8D5B8" />
    </TopShape>
  );
}

function HarvestPoncho() {
  return (
    <g>
      {/* Poncho shape - wider, draped */}
      <path d="M60 185 Q60 170 150 165 Q240 170 240 185 L230 310 Q150 325 70 310 Z" fill="#B88A3D" />
      {/* Fringe at bottom */}
      {Array.from({length:12}).map((_,i) => {
        const x = 75 + i * 14;
        return <line key={i} x1={x} y1={308} x2={x} y2={322} stroke="#8B6914" strokeWidth="2" strokeLinecap="round" />;
      })}
      {/* Zigzag pattern */}
      <path d="M80 230 L95 220 L110 230 L125 220 L140 230 L155 220 L170 230 L185 220 L200 230 L215 220 L230 230" stroke="#C7522A" strokeWidth="3" fill="none" />
      <path d="M75 260 L90 250 L105 260 L120 250 L135 260 L150 250 L165 260 L180 250 L195 260 L210 250 L225 260" stroke="#6B4226" strokeWidth="3" fill="none" />
      {/* Neck hole */}
      <ellipse cx="150" cy="172" rx="20" ry="8" fill="#F5E6D3" stroke="#8B6914" strokeWidth="2" />
    </g>
  );
}

function CheckeredSkirt() {
  return (
    <SkirtShape color="#E8A838">
      <VertStripes y1={285} y2={370} x1={108} x2={198} color="#C7522A" gap={18} />
      <HorizStripes y1={300} y2={360} x1={90} x2={210} color="#C7522A" gap={20} />
      <SkirtWaistband color="#B88A3D" />
      <path d="M90 370 Q150 385 210 370" stroke="#C7522A" strokeWidth="3" fill="none" />
    </SkirtShape>
  );
}

function CorduroyPants() {
  return (
    <PantsShape color="#6B4226">
      <VertStripes y1={290} y2={375} x1={105} x2={137} color="#5C3A1E" gap={8} width={1.5} />
      <VertStripes y1={290} y2={375} x1={163} x2={197} color="#5C3A1E" gap={8} width={1.5} />
      <Waistband color="#5C3A1E" />
      <circle cx="150" cy="288" r="3" fill="#E8A838" />
    </PantsShape>
  );
}

function LeafShorts() {
  return (
    <ShortsShape color="#4A7C59">
      <ellipse cx="120" cy="305" rx="8" ry="5" fill="#2D5F4A" transform="rotate(20 120 305)" opacity="0.6" />
      <ellipse cx="135" cy="320" rx="7" ry="4" fill="#3A6B50" transform="rotate(-15 135 320)" opacity="0.6" />
      <ellipse cx="170" cy="308" rx="8" ry="5" fill="#2D5F4A" transform="rotate(-20 170 308)" opacity="0.6" />
      <ellipse cx="185" cy="325" rx="7" ry="4" fill="#3A6B50" transform="rotate(10 185 325)" opacity="0.6" />
      <Waistband color="#2D5F4A" />
    </ShortsShape>
  );
}

function RuffledSkirt() {
  return (
    <SkirtShape color="#9B3F8B">
      <path d="M90 320 Q105 315 120 322 Q135 315 150 322 Q165 315 180 322 Q195 315 210 320" stroke="#B05FA0" strokeWidth="3" fill="none" />
      <path d="M88 345 Q103 338 118 345 Q133 338 150 345 Q167 338 182 345 Q197 338 212 345" stroke="#B05FA0" strokeWidth="3" fill="none" />
      <path d="M86 365 Q103 358 120 365 Q137 358 154 365 Q170 358 186 365 Q202 358 214 365" stroke="#B05FA0" strokeWidth="3" fill="none" />
      <SkirtWaistband color="#7B2F6B" />
      <ellipse cx="145" cy="287" rx="12" ry="6" fill="#D4788C" transform="rotate(-15 145 287)" />
      <ellipse cx="155" cy="287" rx="12" ry="6" fill="#D4788C" transform="rotate(15 155 287)" />
      <circle cx="150" cy="287" r="4" fill="#C7522A" />
    </SkirtShape>
  );
}

function PatchworkPants() {
  return (
    <PantsShape color="#B88A3D">
      {/* Patches */}
      <rect x="108" y="300" width="22" height="25" fill="#C7522A" rx="3" opacity="0.7" />
      <rect x="120" y="335" width="18" height="22" fill="#4A7C59" rx="3" opacity="0.7" />
      <rect x="165" y="310" width="20" height="20" fill="#7B4F7B" rx="3" opacity="0.7" />
      <rect x="175" y="345" width="18" height="20" fill="#E8A838" rx="3" opacity="0.7" />
      {/* Stitch marks */}
      <path d="M108 300 L130 300 L130 325 L108 325 Z" stroke="#6B4226" strokeWidth="1" fill="none" strokeDasharray="3,3" />
      <path d="M165 310 L185 310 L185 330 L165 330 Z" stroke="#6B4226" strokeWidth="1" fill="none" strokeDasharray="3,3" />
      <Waistband color="#8B6914" />
    </PantsShape>
  );
}

function RainBoots() {
  return (
    <BootShape color="#E8A838" soleColor="#6B4226">
      <rect x="98" y="352" width="46" height="8" fill="#D49828" rx="3" />
      <rect x="156" y="352" width="46" height="8" fill="#D49828" rx="3" />
      <line x1="100" y1="375" x2="142" y2="375" stroke="#C7522A" strokeWidth="2" />
      <line x1="158" y1="375" x2="200" y2="375" stroke="#C7522A" strokeWidth="2" />
    </BootShape>
  );
}

function FurBoots() {
  return (
    <BootShape color="#6B4226" soleColor="#3D2D1D">
      <path d="M97 358 Q105 352 110 358 Q115 352 120 358 Q125 352 130 358 Q135 352 140 358 Q145 352 145 358" fill="#F5E6D3" stroke="#E8D5B8" strokeWidth="1" />
      <path d="M155 358 Q163 352 168 358 Q173 352 178 358 Q183 352 188 358 Q193 352 198 358 Q203 352 203 358" fill="#F5E6D3" stroke="#E8D5B8" strokeWidth="1" />
      <rect x="115" y="378" width="12" height="8" fill="none" stroke="#E8A838" strokeWidth="2" rx="2" />
      <rect x="173" y="378" width="12" height="8" fill="none" stroke="#E8A838" strokeWidth="2" rx="2" />
    </BootShape>
  );
}

function FlowerShoes() {
  return (
    <ShoeShape color="#D4788C" soleColor="#8B4060">
      {[[120,385],[178,385]].map(([cx,cy],i) => (
        <g key={i} transform={`translate(${cx}, ${cy})`}>
          {[0,72,144,216,288].map(a => <ellipse key={a} cx="0" cy="-4" rx="2.5" ry="4" fill="#E8A0B0" transform={`rotate(${a})`} />)}
          <circle cx="0" cy="0" r="2.5" fill="#E8A838" />
        </g>
      ))}
      <path d="M110 375 Q120 368 130 375" stroke="#C06080" strokeWidth="2" fill="none" />
      <path d="M168 375 Q178 368 188 375" stroke="#C06080" strokeWidth="2" fill="none" />
    </ShoeShape>
  );
}

function AcornBoots() {
  return (
    <BootShape color="#B88A3D" soleColor="#5C3A1E">
      <path d="M98 358 Q120 350 144 358 L144 365 Q120 357 98 365 Z" fill="#8B6914" />
      <path d="M156 358 Q178 350 202 358 L202 365 Q178 357 156 365 Z" fill="#8B6914" />
      <VertStripes y1={355} y2={370} x1={108} x2={138} color="#7A5530" gap={10} width={1} />
      <VertStripes y1={355} y2={370} x1={166} x2={196} color="#7A5530" gap={10} width={1} />
      <ellipse cx="120" cy="382" rx="5" ry="6" fill="#8B6914" />
      <rect x="117" y="374" width="6" height="4" fill="#6B4226" rx="1" />
      <ellipse cx="178" cy="382" rx="5" ry="6" fill="#8B6914" />
      <rect x="175" y="374" width="6" height="4" fill="#6B4226" rx="1" />
    </BootShape>
  );
}

function MapleClogs() {
  return (
    <ShoeShape color="#C7522A" soleColor="#5C3A1E">
      {/* Maple leaf on each clog */}
      <path d="M118 382 L115 378 L120 380 L118 375 L122 379 L125 374 L125 380 L128 378 L124 385 Z" fill="#E8A838" />
      <path d="M176 382 L173 378 L178 380 L176 375 L180 379 L183 374 L183 380 L186 378 L182 385 Z" fill="#E8A838" />
      <rect x="98" y="399" width="46" height="6" fill="#5C3A1E" rx="3" />
      <rect x="156" y="399" width="46" height="6" fill="#5C3A1E" rx="3" />
    </ShoeShape>
  );
}

// ═══════════════════════════════════════════════════════
// WINTER ITEMS
// ═══════════════════════════════════════════════════════

function SnowflakeBeanie() {
  return (
    <g>
      <path d="M105 82 Q105 42 150 35 Q195 42 195 82" fill="#4A6FAF" />
      <path d="M102 82 Q150 88 198 82" stroke="#3A5A8F" strokeWidth="6" fill="none" strokeLinecap="round" />
      <SnowflakeAt cx={130} cy={58} size={8} color="white" />
      <SnowflakeAt cx={165} cy={62} size={6} color="white" />
      <SnowflakeAt cx={148} cy={72} size={5} color="#C8D8F0" />
      <circle cx="150" cy="29" r="10" fill="white" />
      <circle cx="146" cy="26" r="4" fill="#E8E8F0" opacity="0.6" />
    </g>
  );
}

function EarmuffBand() {
  return (
    <g>
      <path d="M102 85 Q150 72 198 85" stroke="#444" strokeWidth="3" fill="none" />
      {/* Left earmuff */}
      <circle cx="102" cy="95" r="18" fill="#D4788C" />
      <circle cx="102" cy="95" r="12" fill="#E8A0B0" />
      <circle cx="102" cy="95" r="6" fill="#D4788C" opacity="0.5" />
      {/* Right earmuff */}
      <circle cx="198" cy="95" r="18" fill="#D4788C" />
      <circle cx="198" cy="95" r="12" fill="#E8A0B0" />
      <circle cx="198" cy="95" r="6" fill="#D4788C" opacity="0.5" />
    </g>
  );
}

function SantaHat() {
  return (
    <g>
      <path d="M108 82 Q120 40 170 25 Q185 22 190 35 Q180 55 195 80" fill="#C7222A" />
      <path d="M102 82 Q150 88 200 82" stroke="white" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="190" cy="28" r="10" fill="white" />
      <circle cx="186" cy="24" r="4" fill="#F5F0E0" opacity="0.6" />
    </g>
  );
}

function IcicleCrown() {
  return (
    <g>
      <path d="M110 80 Q130 75 150 77 Q170 75 190 80" stroke="#A0C0E0" strokeWidth="3" fill="none" />
      {/* Icicles */}
      {[115,130,142,155,168,180].map((x, i) => (
        <polygon key={i} points={`${x-4},78 ${x},${60 - i%2*8} ${x+4},78`} fill={i%2 === 0 ? "#C8E0F8" : "#A0D0F0"} opacity="0.8" />
      ))}
      {/* Sparkles */}
      <circle cx="125" cy="65" r="2" fill="white" opacity="0.9" />
      <circle cx="160" cy="55" r="1.5" fill="white" opacity="0.9" />
      <circle cx="175" cy="68" r="1.5" fill="white" opacity="0.8" />
    </g>
  );
}

function PineBeret() {
  return (
    <g>
      <path d="M108 80 Q108 50 150 42 Q192 50 192 80" fill="#1B4332" />
      <ellipse cx="150" cy="80" rx="44" ry="8" fill="#2D5F4A" />
      {/* Pine needle texture */}
      {[[125,58],[140,52],[155,50],[170,55],[160,65],[130,68]].map(([x,y],i) => (
        <g key={i}>
          <line x1={x-5} y1={y} x2={x+5} y2={y-2} stroke="#4A7C59" strokeWidth="1.5" />
          <line x1={x-4} y1={y+2} x2={x+4} y2={y} stroke="#4A7C59" strokeWidth="1.5" />
        </g>
      ))}
      {/* Small pinecone */}
      <ellipse cx="150" cy="38" rx="4" ry="6" fill="#6B4226" />
      <path d="M147 35 Q150 32 153 35" stroke="#5C3A1E" strokeWidth="1" fill="none" />
      <path d="M146 38 Q150 35 154 38" stroke="#5C3A1E" strokeWidth="1" fill="none" />
    </g>
  );
}

function PuffyCoat() {
  return (
    <g>
      <path d="M82 185 Q82 170 150 165 Q218 170 218 185 L222 315 Q150 325 78 315 Z" fill="#C72230" />
      {/* Puffy quilting */}
      <HorizStripes y1={195} y2={310} x1={82} x2={218} color="#A01820" gap={25} width={2} />
      {/* Sleeves - puffy */}
      <ellipse cx="72" cy="210" rx="18" ry="30" fill="#C72230" />
      <ellipse cx="228" cy="210" rx="18" ry="30" fill="#C72230" />
      <ellipse cx="72" cy="245" rx="16" ry="25" fill="#C72230" />
      <ellipse cx="228" cy="245" rx="16" ry="25" fill="#C72230" />
      {/* Zipper */}
      <CenterLine y1={178} y2={320} color="#E8A838" />
      {/* Collar - high */}
      <path d="M115 175 Q150 168 185 175 L185 185 Q150 178 115 185 Z" fill="#D43040" />
    </g>
  );
}

function FairisleSweater() {
  return (
    <TopShape color="#E8E8E8">
      {/* Fair isle pattern bands */}
      <path d="M88 200 L100 193 L112 200 L124 193 L136 200 L148 193 L160 200 L172 193 L184 200 L196 193 L208 200 L212 200" stroke="#C72230" strokeWidth="3" fill="none" />
      <path d="M88 210 L100 217 L112 210 L124 217 L136 210 L148 217 L160 210 L172 217 L184 210 L196 217 L208 210" stroke="#1B4332" strokeWidth="3" fill="none" />
      <HorizStripes y1={240} y2={240} x1={88} x2={212} color="#C72230" gap={10} width={2} />
      <path d="M88 255 L100 248 L112 255 L124 248 L136 255 L148 248 L160 255 L172 248 L184 255 L196 248 L208 255" stroke="#C72230" strokeWidth="3" fill="none" />
      <path d="M88 265 L100 272 L112 265 L124 272 L136 265 L148 272 L160 265 L172 272 L184 265 L196 272 L208 265" stroke="#1B4332" strokeWidth="3" fill="none" />
      <HorizStripes y1={290} y2={290} x1={88} x2={212} color="#C72230" gap={10} width={2} />
      <Collar color="#C0C0C0" />
    </TopShape>
  );
}

function VelvetCape() {
  return (
    <g>
      {/* Cape - flowing */}
      <path d="M70 180 Q70 170 150 165 Q230 170 230 180 L240 320 Q150 340 60 320 Z" fill="#5C2F8B" />
      <path d="M75 190 Q150 180 225 190" stroke="#7B4FAF" strokeWidth="2" fill="none" />
      {/* Gold trim */}
      <path d="M60 320 Q150 340 240 320" stroke="#DAA520" strokeWidth="3" fill="none" />
      <path d="M70 180 Q70 170 150 165 Q230 170 230 180" stroke="#DAA520" strokeWidth="3" fill="none" />
      {/* Clasp */}
      <circle cx="150" cy="175" r="6" fill="#DAA520" />
      <circle cx="150" cy="175" r="3" fill="#B8860B" />
      {/* Subtle shimmer */}
      <ellipse cx="120" cy="250" rx="15" ry="30" fill="#7B4FAF" opacity="0.3" />
      <ellipse cx="180" cy="260" rx="12" ry="25" fill="#7B4FAF" opacity="0.2" />
    </g>
  );
}

function SnowflakeHoodie() {
  return (
    <TopShape color="#4A7CAF">
      {/* Hood */}
      <path d="M110 175 Q110 150 150 142 Q190 150 190 175" fill="#4A7CAF" stroke="#3A6A9F" strokeWidth="2" />
      <path d="M115 175 Q150 165 185 175" fill="#3A6A9F" />
      {/* Snowflakes */}
      <SnowflakeAt cx={125} cy={220} size={8} color="white" />
      <SnowflakeAt cx={170} cy={240} size={7} color="white" />
      <SnowflakeAt cx={140} cy={270} size={6} color="#C8D8F0" />
      <SnowflakeAt cx={180} cy={290} size={5} color="white" />
      {/* Pocket */}
      <path d="M120 280 L180 280 L180 305 Q150 310 120 305 Z" fill="#3A6A9F" stroke="#2A5A8F" strokeWidth="1" />
    </TopShape>
  );
}

function ReindeerVest() {
  return (
    <VestShape color="#6B4226">
      {/* Reindeer face */}
      <circle cx="150" cy="235" r="18" fill="#8B6914" />
      <circle cx="142" cy="230" r="3" fill="#2D1B0E" />
      <circle cx="158" cy="230" r="3" fill="#2D1B0E" />
      <circle cx="150" cy="238" r="4" fill="#C72230" />
      {/* Antlers */}
      <path d="M138 218 L132 200 L128 208 M132 200 L138 205" stroke="#5C3A1E" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M162 218 L168 200 L172 208 M168 200 L162 205" stroke="#5C3A1E" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Snow dots */}
      <DotPattern positions={[[115,205],[185,210],[120,270],[175,275],[140,295],[165,300]]} color="white" r={2.5} />
      <path d="M92 305 Q150 315 208 305" stroke="#5C3A1E" strokeWidth="3" fill="none" />
    </VestShape>
  );
}

function SnowPants() {
  return (
    <PantsShape color="#E0E8F0">
      {/* Puffy quilted look */}
      <HorizStripes y1={295} y2={370} x1={95} x2={145} color="#C0D0E0" gap={18} />
      <HorizStripes y1={295} y2={370} x1={155} x2={205} color="#C0D0E0" gap={18} />
      <Waistband color="#4A7CAF" />
      {/* Snow cuffs */}
      <rect x="93" y="368" width="50" height="10" fill="white" rx="4" />
      <rect x="155" y="368" width="52" height="10" fill="white" rx="4" />
    </PantsShape>
  );
}

function PlaidWoolSkirt() {
  return (
    <SkirtShape color="#C72230">
      <VertStripes y1={285} y2={370} x1={105} x2={200} color="#1B4332" gap={22} width={3} />
      <HorizStripes y1={295} y2={365} x1={90} x2={210} color="#1B4332" gap={22} width={3} />
      <VertStripes y1={285} y2={370} x1={115} x2={210} color="#DAA520" gap={22} width={1} />
      <SkirtWaistband color="#8B1820" />
    </SkirtShape>
  );
}

function FleeceLeggings() {
  return (
    <PantsShape color="#808090">
      {/* Soft fleece texture - subtle dots */}
      <DotPattern positions={[[115,300],[125,320],[110,340],[130,355],[170,305],[180,325],[165,345],[185,360]]} color="#909098" r={3} />
      <Waistband color="#606070" />
      {/* Cuffs */}
      <rect x="93" y="370" width="50" height="6" fill="#606070" rx="2" />
      <rect x="157" y="370" width="50" height="6" fill="#606070" rx="2" />
    </PantsShape>
  );
}

function CandyOveralls() {
  return (
    <PantsShape color="#C72230">
      <HorizStripes y1={290} y2={375} x1={95} x2={205} color="white" gap={12} width={4} />
      <Waistband color="#A01820" />
      {/* Bib */}
      <rect x="120" y="250" width="60" height="38" fill="#C72230" rx="5" />
      <HorizStripes y1={255} y2={280} x1={122} x2={178} color="white" gap={12} width={4} />
      {/* Straps */}
      <rect x="125" y="200" width="10" height="55" fill="#A01820" rx="3" />
      <rect x="165" y="200" width="10" height="55" fill="#A01820" rx="3" />
      {/* Pocket */}
      <rect x="135" y="262" width="30" height="18" fill="#A01820" rx="3" />
    </PantsShape>
  );
}

function VelvetSkirt() {
  return (
    <SkirtShape color="#8B1830">
      {/* Velvet sheen */}
      <ellipse cx="140" cy="330" rx="25" ry="35" fill="#A02040" opacity="0.3" />
      <ellipse cx="170" cy="340" rx="20" ry="28" fill="#A02040" opacity="0.2" />
      {/* Gold trim at hem */}
      <path d="M90 370 Q150 385 210 370" stroke="#DAA520" strokeWidth="3" fill="none" />
      <path d="M92 366 Q150 381 208 366" stroke="#DAA520" strokeWidth="1" fill="none" />
      <SkirtWaistband color="#6B1020" />
      {/* Small gold buckle */}
      <rect x="144" y="283" width="12" height="8" fill="#DAA520" rx="2" />
      <rect x="147" y="285" width="6" height="4" fill="#8B1830" rx="1" />
    </SkirtShape>
  );
}

function SnowBoots() {
  return (
    <BootShape color="white" soleColor="#606070">
      <path d="M97 356 Q105 350 110 356 Q115 350 120 356 Q125 350 130 356 Q135 350 140 356 Q145 350 145 356" fill="#E0E8F0" stroke="#C0D0E0" strokeWidth="1" />
      <path d="M155 356 Q163 350 168 356 Q173 350 178 356 Q183 350 188 356 Q193 350 198 356 Q203 350 203 356" fill="#E0E8F0" stroke="#C0D0E0" strokeWidth="1" />
      <line x1="100" y1="380" x2="142" y2="380" stroke="#C0D0E0" strokeWidth="2" />
      <line x1="158" y1="380" x2="200" y2="380" stroke="#C0D0E0" strokeWidth="2" />
      <SnowflakeAt cx={120} cy={375} size={4} color="#A0C0E0" />
      <SnowflakeAt cx={178} cy={375} size={4} color="#A0C0E0" />
    </BootShape>
  );
}

function IceSkates() {
  return (
    <ShoeShape color="#E8E8F0" soleColor="#C0C0C8">
      {/* Laces */}
      {[375,380,385,390].map(y => (
        <g key={y}>
          <line x1="115" y1={y} x2="125" y2={y-2} stroke="#4A7CAF" strokeWidth="1.5" />
          <line x1="173" y1={y} x2="183" y2={y-2} stroke="#4A7CAF" strokeWidth="1.5" />
        </g>
      ))}
      {/* Blades */}
      <rect x="95" y="402" width="50" height="2" fill="#C0C0D0" rx="1" />
      <rect x="155" y="402" width="50" height="2" fill="#C0C0D0" rx="1" />
      <line x1="93" y1="403" x2="90" y2="400" stroke="#C0C0D0" strokeWidth="2" strokeLinecap="round" />
      <line x1="153" y1="403" x2="150" y2="400" stroke="#C0C0D0" strokeWidth="2" strokeLinecap="round" />
    </ShoeShape>
  );
}

function CozySlippers() {
  return (
    <ShoeShape color="#8B6914" soleColor="#5C3A1E">
      {/* Fluffy interior */}
      <path d="M105 372 Q120 368 135 372" fill="#F5E6D3" stroke="#E8D5B8" strokeWidth="1" />
      <path d="M163 372 Q178 368 193 372" fill="#F5E6D3" stroke="#E8D5B8" strokeWidth="1" />
      {/* Bear face on each */}
      <circle cx="120" cy="388" r="5" fill="#6B4226" />
      <circle cx="116" cy="384" r="2.5" fill="#6B4226" />
      <circle cx="124" cy="384" r="2.5" fill="#6B4226" />
      <circle cx="120" cy="389" r="1.5" fill="#2D1B0E" />
      <circle cx="178" cy="388" r="5" fill="#6B4226" />
      <circle cx="174" cy="384" r="2.5" fill="#6B4226" />
      <circle cx="182" cy="384" r="2.5" fill="#6B4226" />
      <circle cx="178" cy="389" r="1.5" fill="#2D1B0E" />
    </ShoeShape>
  );
}

function CandyCaneBoots() {
  return (
    <BootShape color="white" soleColor="#C72230">
      {/* Red stripes */}
      {[360,370,380,390].map(y => (
        <g key={y}>
          <line x1="100" y1={y} x2="142" y2={y} stroke="#C72230" strokeWidth="4" />
          <line x1="158" y1={y} x2="200" y2={y} stroke="#C72230" strokeWidth="4" />
        </g>
      ))}
      <rect x="98" y="352" width="46" height="8" fill="#C72230" rx="3" />
      <rect x="156" y="352" width="46" height="8" fill="#C72230" rx="3" />
    </BootShape>
  );
}

function WoollyBooties() {
  return (
    <ShoeShape color="#F5E6D3" soleColor="#B88A3D">
      {/* Knit texture */}
      <path d="M108 380 Q115 375 122 380 Q129 375 136 380" stroke="#E8D5B8" strokeWidth="2" fill="none" />
      <path d="M108 388 Q115 383 122 388 Q129 383 136 388" stroke="#E8D5B8" strokeWidth="2" fill="none" />
      <path d="M166 380 Q173 375 180 380 Q187 375 194 380" stroke="#E8D5B8" strokeWidth="2" fill="none" />
      <path d="M166 388 Q173 383 180 388 Q187 383 194 388" stroke="#E8D5B8" strokeWidth="2" fill="none" />
      {/* Cuff */}
      <path d="M103 372 Q120 366 140 372" fill="#E8D5B8" stroke="#DDD0B8" strokeWidth="1.5" />
      <path d="M160 372 Q178 366 198 372" fill="#E8D5B8" stroke="#DDD0B8" strokeWidth="1.5" />
      {/* Little buttons */}
      <circle cx="120" cy="375" r="2" fill="#C7522A" />
      <circle cx="178" cy="375" r="2" fill="#C7522A" />
    </ShoeShape>
  );
}

// ═══════════════════════════════════════════════════════
// SPRING ITEMS
// ═══════════════════════════════════════════════════════

function FlowerCrownSpring() {
  return (
    <g>
      <path d="M108 80 Q130 74 150 76 Q170 74 192 80" stroke="#6BAF5B" strokeWidth="3" fill="none" />
      {/* Pastel flowers */}
      {[[112,74,"#F8A0C0"],[128,68,"#A0D0F0"],[142,65,"#F0E080"],[158,65,"#C0A0E0"],[172,68,"#F8A0C0"],[188,74,"#A0E8A0"]].map(([x,y,c],i) => (
        <g key={i}>
          <circle cx={x as number} cy={y as number} r={7} fill={c as string} />
          <circle cx={x as number} cy={y as number} r={3} fill="#F8E880" />
        </g>
      ))}
    </g>
  );
}

function BunnyEars() {
  return (
    <g>
      {/* Headband */}
      <path d="M110 82 Q150 74 190 82" stroke="#F8A0C0" strokeWidth="5" fill="none" />
      {/* Left ear */}
      <ellipse cx="125" cy="40" rx="12" ry="35" fill="#F8A0C0" />
      <ellipse cx="125" cy="40" rx="7" ry="28" fill="#FFD0E0" />
      {/* Right ear */}
      <ellipse cx="175" cy="40" rx="12" ry="35" fill="#F8A0C0" transform="rotate(8 175 40)" />
      <ellipse cx="175" cy="40" rx="7" ry="28" fill="#FFD0E0" transform="rotate(8 175 40)" />
      {/* Small bow */}
      <ellipse cx="148" cy="78" rx="8" ry="4" fill="#C0A0E0" transform="rotate(-20 148 78)" />
      <ellipse cx="154" cy="78" rx="8" ry="4" fill="#C0A0E0" transform="rotate(20 154 78)" />
      <circle cx="150" cy="78" r="3" fill="#8B70AF" />
    </g>
  );
}

function RainHat() {
  return (
    <g>
      <ellipse cx="150" cy="75" rx="52" ry="12" fill="#F8E060" />
      <path d="M110 75 Q110 42 150 35 Q190 42 190 75" fill="#F8E880" />
      <path d="M102 75 Q150 80 198 75" stroke="#E8D040" strokeWidth="3" fill="none" />
      {/* Small flower */}
      <circle cx="175" cy="55" r="5" fill="#F8A0C0" />
      <circle cx="175" cy="55" r="2" fill="#F0E080" />
    </g>
  );
}

function DaisyBeret() {
  return (
    <g>
      <path d="M108 80 Q108 50 150 42 Q192 50 192 80" fill="#A0D0F0" />
      <ellipse cx="150" cy="80" rx="44" ry="8" fill="#80B8E0" />
      {/* Daisies */}
      {[[135,58],[160,52],[148,68]].map(([x,y],i) => (
        <g key={i}>
          {[0,60,120,180,240,300].map(a => <ellipse key={a} cx={x} cy={(y as number)-4} rx="2" ry="4" fill="white" transform={`rotate(${a} ${x} ${y})`} />)}
          <circle cx={x} cy={y} r="2.5" fill="#F8E880" />
        </g>
      ))}
    </g>
  );
}

function ButterflyBow() {
  return (
    <g>
      {/* Headband */}
      <path d="M112 80 Q150 72 188 80" stroke="#C0A0E0" strokeWidth="4" fill="none" />
      {/* Butterfly wings */}
      <ellipse cx="140" cy="68" rx="15" ry="10" fill="#C0A0E0" transform="rotate(-15 140 68)" opacity="0.8" />
      <ellipse cx="160" cy="68" rx="15" ry="10" fill="#F8A0C0" transform="rotate(15 160 68)" opacity="0.8" />
      <ellipse cx="142" cy="62" rx="10" ry="7" fill="#D0B0F0" transform="rotate(-15 142 62)" opacity="0.6" />
      <ellipse cx="158" cy="62" rx="10" ry="7" fill="#FFC0D8" transform="rotate(15 158 62)" opacity="0.6" />
      {/* Body */}
      <ellipse cx="150" cy="70" rx="2" ry="8" fill="#5C3A6B" />
      {/* Antennae */}
      <line x1="150" y1="62" x2="145" y2="52" stroke="#5C3A6B" strokeWidth="1" />
      <line x1="150" y1="62" x2="155" y2="52" stroke="#5C3A6B" strokeWidth="1" />
      <circle cx="145" cy="51" r="1.5" fill="#5C3A6B" />
      <circle cx="155" cy="51" r="1.5" fill="#5C3A6B" />
    </g>
  );
}

function RainbowCardigan() {
  return (
    <TopShape color="#F8F0F0">
      {/* Rainbow stripes */}
      {[["#E85050",195],["#E8A838",210],["#F0E060",225],["#6BAF5B",240],["#4A90D0",255],["#7B4FAF",270],["#D060A0",285]].map(([c,y]) => (
        <line key={y as number} x1="88" y1={y as number} x2="212" y2={y as number} stroke={c as string} strokeWidth="5" opacity="0.6" />
      ))}
      <CenterLine y1={178} y2={315} color="#E8E0E0" />
      <Buttons x={150} y1={200} y2={290} count={4} color="#F8A0C0" />
      <Collar color="#E0D8D8" />
    </TopShape>
  );
}

function FloralBlouse() {
  return (
    <TopShape color="#FFE0EC">
      <SmallFlowers positions={[[120,205],[165,210],[140,235],[185,240],[110,260],[155,265],[130,290],[175,295]]} petalColor="#F090B0" centerColor="#F8E880" />
      {/* Ruffle collar */}
      <path d="M120 178 Q130 172 140 178 Q150 172 160 178 Q170 172 180 178" stroke="#F8C0D0" strokeWidth="2.5" fill="none" />
      {/* Cuffs */}
      <path d="M68 256 Q83 260 98 256" stroke="#F8C0D0" strokeWidth="2" fill="none" />
      <path d="M202 256 Q217 260 232 256" stroke="#F8C0D0" strokeWidth="2" fill="none" />
    </TopShape>
  );
}

function DenimJacket() {
  return (
    <TopShape color="#5B8CB8" sleeveColor="#5088B0">
      {/* Seams */}
      <line x1="120" y1="180" x2="120" y2="310" stroke="#4878A0" strokeWidth="1.5" />
      <line x1="180" y1="180" x2="180" y2="310" stroke="#4878A0" strokeWidth="1.5" />
      <CenterLine y1={178} y2={315} color="#4878A0" />
      {/* Pockets */}
      <rect x="100" y="255" width="35" height="28" fill="#5088B0" stroke="#4878A0" strokeWidth="1.5" rx="2" />
      <rect x="165" y="255" width="35" height="28" fill="#5088B0" stroke="#4878A0" strokeWidth="1.5" rx="2" />
      <Buttons x={150} y1={200} y2={270} count={3} color="#C0C0C8" />
      <VCollar color="#4878A0" fill="#5B8CB8" />
    </TopShape>
  );
}

function GardenApron() {
  return (
    <g>
      {/* Apron body */}
      <path d="M105 195 L95 310 Q150 320 205 310 L195 195 Q150 188 105 195 Z" fill="#6BAF5B" />
      {/* Straps */}
      <rect x="118" y="175" width="10" height="25" fill="#5A9A4A" rx="3" />
      <rect x="172" y="175" width="10" height="25" fill="#5A9A4A" rx="3" />
      {/* Pocket */}
      <path d="M125 260 L175 260 L175 295 Q150 300 125 295 Z" fill="#5A9A4A" stroke="#4A8B3A" strokeWidth="1" />
      {/* Little flower in pocket */}
      <line x1="150" y1="270" x2="150" y2="256" stroke="#4A8B3A" strokeWidth="2" />
      <circle cx="150" cy="253" r="5" fill="#F8A0C0" />
      <circle cx="150" cy="253" r="2" fill="#F8E880" />
      {/* Trim */}
      <path d="M95 310 Q150 320 205 310" stroke="#4A8B3A" strokeWidth="2" fill="none" />
    </g>
  );
}

function LadybugVest() {
  return (
    <VestShape color="#E83030">
      {/* Center line */}
      <CenterLine y1={178} y2={310} color="#1A1A1A" />
      {/* Black dots */}
      <DotPattern positions={[[120,210],[170,215],[130,245],[175,250],[115,275],[160,280],[140,300],[185,295]]} color="#1A1A1A" r={5} />
      {/* Head part at top */}
      <path d="M130 185 Q150 178 170 185" fill="#1A1A1A" />
      <path d="M92 305 Q150 315 208 305" stroke="#C02020" strokeWidth="3" fill="none" />
    </VestShape>
  );
}

function FloralSkirt() {
  return (
    <SkirtShape color="#E0F0D0">
      <SmallFlowers positions={[[115,300],[145,305],[175,298],[130,325],[160,330],[195,320],[110,350],[140,355],[170,348],[200,355]]} petalColor="#F090B0" centerColor="#F8E880" />
      {/* Leaves */}
      {[[125,315],[155,340],[185,335]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="5" ry="3" fill="#6BAF5B" transform={`rotate(${i*30-15} ${x} ${y})`} opacity="0.5" />
      ))}
      <SkirtWaistband color="#8BBF7B" />
    </SkirtShape>
  );
}

function SpringOveralls() {
  return (
    <PantsShape color="#A0C8E0">
      <Waistband color="#80B0D0" />
      {/* Bib */}
      <rect x="120" y="250" width="60" height="38" fill="#A0C8E0" rx="5" stroke="#80B0D0" strokeWidth="1" />
      {/* Straps */}
      <rect x="125" y="200" width="10" height="55" fill="#80B0D0" rx="3" />
      <rect x="165" y="200" width="10" height="55" fill="#80B0D0" rx="3" />
      {/* Daisy on pocket */}
      <rect x="135" y="262" width="30" height="18" fill="#80B0D0" rx="3" />
      <circle cx="150" cy="271" r="4" fill="white" />
      <circle cx="150" cy="271" r="2" fill="#F8E880" />
      {/* Cuffs rolled */}
      <rect x="93" y="368" width="50" height="8" fill="#80B0D0" rx="3" />
      <rect x="157" y="368" width="50" height="8" fill="#80B0D0" rx="3" />
    </PantsShape>
  );
}

function TulipShorts() {
  return (
    <ShortsShape color="#F8A0C0">
      {/* Tulip prints */}
      {[[115,305],[135,325],[175,310],[190,328]].map(([x,y],i) => (
        <g key={i}>
          <path d={`M${x} ${y} L${(x as number)-4} ${(y as number)+8} L${(x as number)+4} ${(y as number)+8} Z`} fill={i%2===0 ? "#E06090" : "#D050A0"} />
          <line x1={x as number} y1={(y as number)+8} x2={x as number} y2={(y as number)+14} stroke="#4A8B3A" strokeWidth="1.5" />
        </g>
      ))}
      <Waistband color="#E08098" />
    </ShortsShape>
  );
}

function GinghamSkirt() {
  return (
    <SkirtShape color="#FFE0EC">
      <VertStripes y1={285} y2={370} x1={100} x2={205} color="#F8B0C8" gap={15} width={6} />
      <HorizStripes y1={290} y2={370} x1={90} x2={210} color="#F8B0C8" gap={15} width={6} />
      <SkirtWaistband color="#E890A8" />
    </SkirtShape>
  );
}

function PastelPants() {
  return (
    <PantsShape color="#C8B0E8">
      {/* Subtle shimmer */}
      <ellipse cx="120" cy="330" rx="12" ry="25" fill="#D8C0F0" opacity="0.4" />
      <ellipse cx="178" cy="335" rx="10" ry="22" fill="#D8C0F0" opacity="0.3" />
      <Waistband color="#B098D0" />
      {/* Small bow at waist */}
      <ellipse cx="148" cy="287" rx="6" ry="3" fill="#F8A0C0" transform="rotate(-15 148 287)" />
      <ellipse cx="155" cy="287" rx="6" ry="3" fill="#F8A0C0" transform="rotate(15 155 287)" />
      <circle cx="151" cy="287" r="2" fill="#D080A0" />
    </PantsShape>
  );
}

function GardenClogs() {
  return (
    <ShoeShape color="#6BAF5B" soleColor="#4A7C3A">
      {/* Little flowers */}
      <circle cx="120" cy="385" r="4" fill="#F8E880" />
      <circle cx="120" cy="385" r="2" fill="#E8A838" />
      <circle cx="178" cy="385" r="4" fill="#F8E880" />
      <circle cx="178" cy="385" r="2" fill="#E8A838" />
      {/* Strap */}
      <path d="M108 375 Q120 370 132 375" stroke="#4A8B3A" strokeWidth="3" fill="none" />
      <path d="M168 375 Q180 370 192 375" stroke="#4A8B3A" strokeWidth="3" fill="none" />
    </ShoeShape>
  );
}

function RainGaloshes() {
  return (
    <BootShape color="#F8E060" soleColor="#E8A838">
      <rect x="98" y="352" width="46" height="8" fill="#E8D040" rx="3" />
      <rect x="156" y="352" width="46" height="8" fill="#E8D040" rx="3" />
      {/* Raindrop prints */}
      {[[112,370],[130,380],[170,372],[188,382]].map(([x,y],i) => (
        <path key={i} d={`M${x} ${(y as number)-4} Q${(x as number)-3} ${y} ${x} ${(y as number)+3} Q${(x as number)+3} ${y} ${x} ${(y as number)-4}`} fill="#A0D0F0" opacity="0.6" />
      ))}
    </BootShape>
  );
}

function DaisySandals() {
  return (
    <ShoeShape color="#E8D5B8" soleColor="#C49464">
      {/* Straps */}
      <path d="M108 378 Q120 373 132 378" stroke="#D4A574" strokeWidth="3" fill="none" />
      <path d="M108 388 Q120 383 132 388" stroke="#D4A574" strokeWidth="3" fill="none" />
      <path d="M168 378 Q180 373 192 378" stroke="#D4A574" strokeWidth="3" fill="none" />
      <path d="M168 388 Q180 383 192 388" stroke="#D4A574" strokeWidth="3" fill="none" />
      {/* Daisies */}
      {[[120,375],[178,375]].map(([x,y],i) => (
        <g key={i}>
          {[0,60,120,180,240,300].map(a => <ellipse key={a} cx={x} cy={(y as number)-3} rx="1.5" ry="3" fill="white" transform={`rotate(${a} ${x} ${y})`} />)}
          <circle cx={x} cy={y} r="2" fill="#F8E880" />
        </g>
      ))}
    </ShoeShape>
  );
}

function ButterflySlippers() {
  return (
    <ShoeShape color="#C0A0E0" soleColor="#8B70AF">
      {/* Mini butterfly on each */}
      {[[120,383],[178,383]].map(([x,y],i) => (
        <g key={i}>
          <ellipse cx={(x as number)-5} cy={y} rx="5" ry="3.5" fill="#D0B0F0" opacity="0.8" />
          <ellipse cx={(x as number)+5} cy={y} rx="5" ry="3.5" fill="#F8C0E0" opacity="0.8" />
          <ellipse cx={x} cy={y} rx="1" ry="3" fill="#5C3A6B" />
        </g>
      ))}
    </ShoeShape>
  );
}

function LaceBoots() {
  return (
    <BootShape color="white" soleColor="#E0D0D0">
      {/* Lace pattern */}
      {[362,370,378,386].map(y => (
        <g key={y}>
          <path d={`M103 ${y} Q110 ${y-3} 117 ${y} Q124 ${y+3} 131 ${y} Q138 ${y-3} 140 ${y}`} stroke="#D0D0D8" strokeWidth="1" fill="none" />
          <path d={`M161 ${y} Q168 ${y-3} 175 ${y} Q182 ${y+3} 189 ${y} Q196 ${y-3} 198 ${y}`} stroke="#D0D0D8" strokeWidth="1" fill="none" />
        </g>
      ))}
      {/* Ribbon */}
      <path d="M115 360 Q120 355 125 360" stroke="#F8A0C0" strokeWidth="2" fill="none" />
      <path d="M173 360 Q178 355 183 360" stroke="#F8A0C0" strokeWidth="2" fill="none" />
    </BootShape>
  );
}

// ═══════════════════════════════════════════════════════
// SUMMER ITEMS
// ═══════════════════════════════════════════════════════

function SunHat() {
  return (
    <g>
      <ellipse cx="150" cy="78" rx="60" ry="14" fill="#E8D5A0" />
      <path d="M112 78 Q112 42 150 35 Q188 42 188 78" fill="#F0E0B0" />
      <path d="M108 78 Q150 84 192 78" stroke="#D4B870" strokeWidth="3" fill="none" />
      {/* Ribbon band */}
      <path d="M112 68 Q150 62 188 68" stroke="#2E9ECE" strokeWidth="5" fill="none" />
      {/* Small bow */}
      <ellipse cx="185" cy="68" rx="6" ry="3" fill="#2E9ECE" />
    </g>
  );
}

function SailorCap() {
  return (
    <g>
      <ellipse cx="150" cy="80" rx="48" ry="10" fill="#1B3A6B" />
      <path d="M108 80 Q108 55 150 48 Q192 55 192 80" fill="white" />
      <path d="M108 75 Q150 70 192 75" stroke="#1B3A6B" strokeWidth="3" fill="none" />
      {/* Anchor emblem */}
      <line x1="150" y1="58" x2="150" y2="68" stroke="#DAA520" strokeWidth="2" />
      <path d="M145 68 Q150 72 155 68" stroke="#DAA520" strokeWidth="2" fill="none" />
      <line x1="147" y1="60" x2="153" y2="60" stroke="#DAA520" strokeWidth="1.5" />
    </g>
  );
}

function TropicalCrown() {
  return (
    <g>
      <path d="M108 80 Q130 74 150 76 Q170 74 192 80" stroke="#2D8B6A" strokeWidth="3" fill="none" />
      {/* Tropical flowers & fruits */}
      <circle cx="118" cy="72" r="7" fill="#FF6B6B" />
      <circle cx="118" cy="72" r="3" fill="#FFAA60" />
      <ellipse cx="138" cy="66" rx="8" ry="6" fill="#FFAA60" transform="rotate(-10 138 66)" />
      <circle cx="155" cy="64" r="6" fill="#FF6BB5" />
      <circle cx="155" cy="64" r="2.5" fill="#FFE060" />
      <ellipse cx="172" cy="67" rx="7" ry="5" fill="#FFE060" transform="rotate(10 172 67)" />
      <circle cx="187" cy="73" r="6" fill="#FF6B6B" />
      {/* Palm leaf */}
      <path d="M148 58 Q145 45 155 40" stroke="#2D8B6A" strokeWidth="2" fill="none" />
      <ellipse cx="155" cy="42" rx="8" ry="4" fill="#4ABA7A" transform="rotate(30 155 42)" />
    </g>
  );
}

function BeachVisor() {
  return (
    <g>
      {/* Visor brim */}
      <ellipse cx="150" cy="82" rx="55" ry="10" fill="#2ECECE" />
      {/* Band */}
      <path d="M105 80 Q150 72 195 80" stroke="#2ECECE" strokeWidth="6" fill="none" />
      <path d="M105 80 Q150 74 195 80" stroke="#1B8B9E" strokeWidth="2" fill="none" />
      {/* Trim */}
      <path d="M95 82 Q150 90 205 82" stroke="#1B8B9E" strokeWidth="2" fill="none" />
    </g>
  );
}

function WatermelonCap() {
  return (
    <g>
      <path d="M108 80 Q108 50 150 42 Q192 50 192 80" fill="#4ABA7A" />
      {/* Pink inner */}
      <path d="M112 78 Q112 55 150 48 Q188 55 188 78" fill="#FF6B8A" />
      {/* Seeds */}
      <ellipse cx="130" cy="62" rx="2" ry="3" fill="#2D1B0E" transform="rotate(-10 130 62)" />
      <ellipse cx="150" cy="58" rx="2" ry="3" fill="#2D1B0E" />
      <ellipse cx="170" cy="62" rx="2" ry="3" fill="#2D1B0E" transform="rotate(10 170 62)" />
      <ellipse cx="140" cy="72" rx="2" ry="3" fill="#2D1B0E" transform="rotate(-5 140 72)" />
      <ellipse cx="160" cy="72" rx="2" ry="3" fill="#2D1B0E" transform="rotate(5 160 72)" />
      {/* Green rind visible at bottom */}
      <path d="M108 78 Q150 84 192 78" stroke="#3A9A5A" strokeWidth="4" fill="none" />
    </g>
  );
}

function HawaiianShirt() {
  return (
    <TopShape color="#FF8C42">
      <SmallFlowers positions={[[120,205],[170,200],[140,230],[185,235],[110,255],[155,260],[130,285],[175,290],[195,270]]} petalColor="#FF6B6B" centerColor="#FFE060" />
      {/* Leaves */}
      {[[130,220],[160,250],[145,280],[180,265]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="3" fill="#4ABA7A" transform={`rotate(${i*25-20} ${x} ${y})`} opacity="0.5" />
      ))}
      <CenterLine y1={178} y2={315} color="#E87830" />
      <VCollar color="#E87830" fill="#FF8C42" />
    </TopShape>
  );
}

function StripedTank() {
  return (
    <VestShape color="white">
      <HorizStripes y1={188} y2={310} x1={92} x2={208} color="#1B3A6B" gap={10} width={4} />
      <path d="M92 305 Q150 315 208 305" stroke="#1B3A6B" strokeWidth="2" fill="none" />
      <Collar color="#C0C0C8" />
    </VestShape>
  );
}

function SeashellVest() {
  return (
    <VestShape color="#F5E6C8">
      {/* Seashells */}
      {[[120,210],[165,220],[140,250],[185,255],[115,280],[160,290]].map(([x,y],i) => (
        <g key={i}>
          <path d={`M${(x as number)-5} ${y} Q${x} ${(y as number)-6} ${(x as number)+5} ${y} Q${x} ${(y as number)+3} ${(x as number)-5} ${y}`} fill={i%2===0 ? "#F8C0A0" : "#E8B090"} opacity="0.7" />
          <line x1={x as number} y1={(y as number)-4} x2={x as number} y2={(y as number)+2} stroke="#D4A080" strokeWidth="0.8" />
        </g>
      ))}
      <path d="M92 305 Q150 315 208 305" stroke="#E8C8A0" strokeWidth="3" fill="none" />
    </VestShape>
  );
}

function TieDyeTee() {
  return (
    <TopShape color="#B898E0">
      {/* Tie-dye swirls */}
      <circle cx="135" cy="225" r="25" fill="#60C8E0" opacity="0.4" />
      <circle cx="170" cy="245" r="22" fill="#FF8CA0" opacity="0.4" />
      <circle cx="145" cy="270" r="20" fill="#FFE060" opacity="0.4" />
      <circle cx="120" cy="250" r="18" fill="#80E880" opacity="0.3" />
      <circle cx="175" cy="280" r="16" fill="#60C8E0" opacity="0.3" />
      <circle cx="155" cy="200" r="15" fill="#FFB060" opacity="0.3" />
      <Collar color="#A080C0" />
    </TopShape>
  );
}

function SailorTop() {
  return (
    <TopShape color="white" sleeveColor="white">
      {/* Navy stripes at bottom */}
      <HorizStripes y1={270} y2={310} x1={88} x2={212} color="#1B3A6B" gap={8} width={3} />
      {/* Sailor collar */}
      <path d="M115 180 L115 210 L150 230 L185 210 L185 180" fill="#1B3A6B" stroke="#1B3A6B" strokeWidth="1" />
      <path d="M117 182 L117 208 L150 226 L183 208 L183 182" fill="none" stroke="white" strokeWidth="2" />
      {/* Red necktie */}
      <path d="M148 190 L150 220 L152 190" fill="#E83030" />
    </TopShape>
  );
}

function BeachShorts() {
  return (
    <ShortsShape color="#2ECECE">
      {/* Wave pattern */}
      <path d="M102 310 Q112 305 122 310 Q132 315 142 310" stroke="#1BA8B8" strokeWidth="2" fill="none" />
      <path d="M155 312 Q165 307 175 312 Q185 317 195 312" stroke="#1BA8B8" strokeWidth="2" fill="none" />
      {/* Drawstring */}
      <Waistband color="#1BA8B8" />
      <path d="M145 288 L148 296" stroke="#1BA8B8" strokeWidth="1.5" />
      <path d="M155 288 L152 296" stroke="#1BA8B8" strokeWidth="1.5" />
    </ShortsShape>
  );
}

function GrassSkirt() {
  return (
    <g>
      {/* Waistband */}
      <path d="M100 290 Q150 283 200 290 L200 298 Q150 291 100 298 Z" fill="#8B6914" />
      {/* Grass strands */}
      {Array.from({length: 20}).map((_, i) => {
        const x = 98 + i * 5.5;
        const h = 60 + Math.sin(i) * 15;
        const sway = Math.sin(i * 0.7) * 5;
        return <line key={i} x1={x} y1={298} x2={x + sway} y2={298 + h} stroke={i%3===0 ? "#4ABA7A" : i%3===1 ? "#6BC85B" : "#3A9A4A"} strokeWidth="3" strokeLinecap="round" />;
      })}
      {/* Small flowers */}
      <circle cx="120" cy="320" r="3" fill="#FF6BB5" />
      <circle cx="170" cy="335" r="3" fill="#FFE060" />
    </g>
  );
}

function TropicalSkirt() {
  return (
    <SkirtShape color="#FF6BB5">
      <SmallFlowers positions={[[115,300],[145,310],[175,298],[130,330],[160,340],[195,325],[110,355],[140,360],[170,350]]} petalColor="#FFE060" centerColor="#FF8C42" />
      {[[120,320],[155,345],[185,335]].map(([x,y],i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="3" fill="#4ABA7A" transform={`rotate(${i*25} ${x} ${y})`} opacity="0.5" />
      ))}
      <SkirtWaistband color="#E05090" />
    </SkirtShape>
  );
}

function DenimCutoffs() {
  return (
    <ShortsShape color="#5B8CB8">
      {/* Frayed edges */}
      <path d="M98 338 L100 342 L103 336 L106 342 L110 337 L113 343 L116 337 L120 342 L125 336 L130 342 L135 337 L140 342 L145 338 L148 340" stroke="#6BA0C8" strokeWidth="1.5" fill="none" />
      <path d="M152 338 L155 342 L158 337 L162 342 L166 337 L170 343 L174 338 L178 342 L182 337 L186 342 L190 337 L195 342 L198 339 L202 340" stroke="#6BA0C8" strokeWidth="1.5" fill="none" />
      <Waistband color="#4878A0" />
      <circle cx="150" cy="288" r="2.5" fill="#C0C0C8" />
      {/* Pockets visible */}
      <path d="M108 290 L105 310 L120 315" stroke="#4878A0" strokeWidth="1.5" fill="none" />
      <path d="M192 290 L195 310 L180 315" stroke="#4878A0" strokeWidth="1.5" fill="none" />
    </ShortsShape>
  );
}

function WaveShorts() {
  return (
    <ShortsShape color="#3A7DC8">
      {/* Wave pattern */}
      {[300, 315, 330].map(y => (
        <path key={y} d={`M100 ${y} Q110 ${y-6} 120 ${y} Q130 ${y+6} 140 ${y} Q150 ${y-6} 160 ${y} Q170 ${y+6} 180 ${y} Q190 ${y-6} 200 ${y}`} stroke="#2060A0" strokeWidth="2" fill="none" opacity="0.5" />
      ))}
      <Waistband color="#2060A0" />
    </ShortsShape>
  );
}

function FlipFlops() {
  return (
    <g>
      {/* Left sole */}
      <ellipse cx="120" cy="395" rx="22" ry="10" fill="#FF6B6B" />
      {/* Left straps */}
      <path d="M108 390 Q120 380 132 390" stroke="#E05050" strokeWidth="3" fill="none" />
      {/* Right sole */}
      <ellipse cx="180" cy="395" rx="22" ry="10" fill="#2ECECE" />
      {/* Right straps */}
      <path d="M168 390 Q180 380 192 390" stroke="#1BA8B8" strokeWidth="3" fill="none" />
    </g>
  );
}

function BeachSandals() {
  return (
    <ShoeShape color="#D4A574" soleColor="#A07850">
      <path d="M110 378 Q120 372 130 378" stroke="#B88A50" strokeWidth="3" fill="none" />
      <path d="M110 390 Q120 384 130 390" stroke="#B88A50" strokeWidth="3" fill="none" />
      <path d="M168 378 Q178 372 188 378" stroke="#B88A50" strokeWidth="3" fill="none" />
      <path d="M168 390 Q178 384 188 390" stroke="#B88A50" strokeWidth="3" fill="none" />
      {/* Small buckle */}
      <rect x="118" y="376" width="5" height="4" fill="#DAA520" rx="1" />
      <rect x="176" y="376" width="5" height="4" fill="#DAA520" rx="1" />
    </ShoeShape>
  );
}

function WaterShoes() {
  return (
    <ShoeShape color="#3A90D0" soleColor="#2060A0">
      {/* Mesh dots */}
      <DotPattern positions={[[112,380],[120,388],[128,380],[136,388],[170,380],[178,388],[186,380],[194,388]]} color="#5AB0E0" r={2} />
      {/* Pull tab */}
      <rect x="135" y="371" width="6" height="4" fill="#2ECECE" rx="1" />
      <rect x="193" y="371" width="6" height="4" fill="#2ECECE" rx="1" />
    </ShoeShape>
  );
}

function StarfishSlippers() {
  return (
    <ShoeShape color="#FFB0A0" soleColor="#E08878">
      {/* Starfish */}
      {[[120,385],[178,385]].map(([x,y],i) => (
        <g key={i}>
          {[0,72,144,216,288].map(a => (
            <ellipse key={a} cx={x} cy={(y as number)-4} rx="2" ry="5" fill="#FF8C70" transform={`rotate(${a} ${x} ${y})`} />
          ))}
          <circle cx={x} cy={y} r="2.5" fill="#FFD0C0" />
        </g>
      ))}
    </ShoeShape>
  );
}

function NauticalBoots() {
  return (
    <BootShape color="#1B3A6B" soleColor="#0A2040">
      <rect x="98" y="352" width="46" height="8" fill="white" rx="3" />
      <rect x="156" y="352" width="46" height="8" fill="white" rx="3" />
      {/* Anchor on each */}
      <g transform="translate(120,378)">
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#DAA520" strokeWidth="1.5" />
        <path d="M-3 4 Q0 7 3 4" stroke="#DAA520" strokeWidth="1.5" fill="none" />
        <line x1="-2" y1="-3" x2="2" y2="-3" stroke="#DAA520" strokeWidth="1" />
      </g>
      <g transform="translate(178,378)">
        <line x1="0" y1="-4" x2="0" y2="4" stroke="#DAA520" strokeWidth="1.5" />
        <path d="M-3 4 Q0 7 3 4" stroke="#DAA520" strokeWidth="1.5" fill="none" />
        <line x1="-2" y1="-3" x2="2" y2="-3" stroke="#DAA520" strokeWidth="1" />
      </g>
    </BootShape>
  );
}

// ═══════════════════════════════════════════════════════
// MAIN EXPORT - Clothing SVG Switch
// ═══════════════════════════════════════════════════════

const CLOTHING_MAP: Record<string, () => React.ReactNode> = {
  // Fall
  "mushroom-beret": MushroomBeret,
  "leaf-crown": LeafCrown,
  "cozy-beanie": CozyBeanie,
  "acorn-cap": AcornCap,
  "pumpkin-hat": PumpkinHat,
  "floral-sweater": FloralSweater,
  "plaid-jacket": PlaidJacket,
  "polka-vest": PolkaVest,
  "cozy-cardigan": CozyCardigan,
  "harvest-poncho": HarvestPoncho,
  "checkered-skirt": CheckeredSkirt,
  "corduroy-pants": CorduroyPants,
  "leaf-shorts": LeafShorts,
  "ruffled-skirt": RuffledSkirt,
  "patchwork-pants": PatchworkPants,
  "rain-boots": RainBoots,
  "fur-boots": FurBoots,
  "flower-shoes": FlowerShoes,
  "acorn-boots": AcornBoots,
  "maple-clogs": MapleClogs,
  // Winter
  "snowflake-beanie": SnowflakeBeanie,
  "earmuff-band": EarmuffBand,
  "santa-hat": SantaHat,
  "icicle-crown": IcicleCrown,
  "pine-beret": PineBeret,
  "puffy-coat": PuffyCoat,
  "fairisle-sweater": FairisleSweater,
  "velvet-cape": VelvetCape,
  "snowflake-hoodie": SnowflakeHoodie,
  "reindeer-vest": ReindeerVest,
  "snow-pants": SnowPants,
  "plaid-wool-skirt": PlaidWoolSkirt,
  "fleece-leggings": FleeceLeggings,
  "candy-overalls": CandyOveralls,
  "velvet-skirt": VelvetSkirt,
  "snow-boots": SnowBoots,
  "ice-skates": IceSkates,
  "cozy-slippers": CozySlippers,
  "candy-cane-boots": CandyCaneBoots,
  "woolly-booties": WoollyBooties,
  // Spring
  "flower-crown-spring": FlowerCrownSpring,
  "bunny-ears": BunnyEars,
  "rain-hat": RainHat,
  "daisy-beret": DaisyBeret,
  "butterfly-bow": ButterflyBow,
  "rainbow-cardigan": RainbowCardigan,
  "floral-blouse": FloralBlouse,
  "denim-jacket": DenimJacket,
  "garden-apron": GardenApron,
  "ladybug-vest": LadybugVest,
  "floral-skirt": FloralSkirt,
  "spring-overalls": SpringOveralls,
  "tulip-shorts": TulipShorts,
  "gingham-skirt": GinghamSkirt,
  "pastel-pants": PastelPants,
  "garden-clogs": GardenClogs,
  "rain-galoshes": RainGaloshes,
  "daisy-sandals": DaisySandals,
  "butterfly-slippers": ButterflySlippers,
  "lace-boots": LaceBoots,
  // Summer
  "sun-hat": SunHat,
  "sailor-cap": SailorCap,
  "tropical-crown": TropicalCrown,
  "beach-visor": BeachVisor,
  "watermelon-cap": WatermelonCap,
  "hawaiian-shirt": HawaiianShirt,
  "striped-tank": StripedTank,
  "seashell-vest": SeashellVest,
  "tiedye-tee": TieDyeTee,
  "sailor-top": SailorTop,
  "beach-shorts": BeachShorts,
  "grass-skirt": GrassSkirt,
  "tropical-skirt": TropicalSkirt,
  "denim-cutoffs": DenimCutoffs,
  "wave-shorts": WaveShorts,
  "flip-flops": FlipFlops,
  "beach-sandals": BeachSandals,
  "water-shoes": WaterShoes,
  "starfish-slippers": StarfishSlippers,
  "nautical-boots": NauticalBoots,
};

export function ClothingSvg({ id }: { id: string }) {
  const Component = CLOTHING_MAP[id];
  if (!Component) return null;
  return <>{Component()}</>;
}

export function ClothingThumbnail({ id }: { id: string }) {
  const viewBoxMap: Record<string, string> = {
    hat: "90 25 120 70",
    top: "55 160 190 170",
    bottom: "80 270 140 130",
    shoes: "90 345 120 65",
  };
  const item = clothingItems.find((c) => c.id === id);
  if (!item) return null;

  return (
    <svg viewBox={viewBoxMap[item.slot]} width="100%" height="100%">
      <ClothingSvg id={id} />
    </svg>
  );
}
