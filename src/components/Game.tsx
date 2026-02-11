"use client";

import { useState, useCallback, useRef } from "react";
import {
  type CharacterId,
  type ClothingSlot,
  type Season,
  type ClothingItem,
  type Equipped,
  characters,
  clothingItems,
  slotLabels,
  seasonLabels,
  seasonColors,
} from "@/lib/gameData";
import { ClothingSvg, ClothingThumbnail } from "./ClothingSvgs";
import MusicPlayer from "./MusicPlayer";

// ─── Scene Background ───────────────────────────────
function SceneBackground() {
  return (
    <g>
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F0C4D1" />
          <stop offset="50%" stopColor="#F5D6C3" />
          <stop offset="100%" stopColor="#D4A87A" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="300" height="450" fill="url(#sky)" />
      <ellipse cx="150" cy="420" rx="180" ry="50" fill="#8B6914" opacity="0.4" />
      <ellipse cx="150" cy="430" rx="160" ry="35" fill="#6B4226" opacity="0.3" />
      <rect x="-5" y="50" width="35" height="400" fill="#5C3A1E" rx="5" />
      <rect x="0" y="50" width="30" height="400" fill="#7A4E2D" rx="5" />
      <line x1="25" y1="100" x2="70" y2="60" stroke="#5C3A1E" strokeWidth="4" strokeLinecap="round" />
      <line x1="25" y1="150" x2="65" y2="120" stroke="#5C3A1E" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="60" cy="40" rx="8" ry="5" fill="#C7522A" transform="rotate(30 60 40)" />
      <ellipse cx="90" cy="70" rx="6" ry="4" fill="#E8A838" transform="rotate(-20 90 70)" />
      <ellipse cx="240" cy="50" rx="7" ry="4" fill="#C7522A" transform="rotate(45 240 50)" />
      <ellipse cx="200" cy="30" rx="6" ry="4" fill="#D4788C" transform="rotate(-30 200 30)" />
      <ellipse cx="260" cy="90" rx="5" ry="3" fill="#E8A838" transform="rotate(60 260 90)" />
      <g transform="translate(250, 380)">
        <rect x="-3" y="-10" width="6" height="12" fill="#F5E6D3" rx="2" />
        <ellipse cx="0" cy="-12" rx="10" ry="7" fill="#C7522A" />
        <circle cx="-4" cy="-14" r="2" fill="#FFF8EE" opacity="0.8" />
        <circle cx="3" cy="-11" r="1.5" fill="#FFF8EE" opacity="0.8" />
      </g>
      <g transform="translate(40, 395)">
        <rect x="-2" y="-8" width="4" height="10" fill="#F5E6D3" rx="2" />
        <ellipse cx="0" cy="-9" rx="7" ry="5" fill="#E8A838" />
        <circle cx="-2" cy="-10" r="1.5" fill="#FFF8EE" opacity="0.8" />
      </g>
      <g transform="translate(70, 400)">
        <line x1="0" y1="0" x2="0" y2="-15" stroke="#4A7C59" strokeWidth="2" />
        <circle cx="0" cy="-17" r="4" fill="#D4788C" />
        <circle cx="0" cy="-17" r="2" fill="#E8A838" />
      </g>
      <g transform="translate(220, 405)">
        <line x1="0" y1="0" x2="0" y2="-12" stroke="#4A7C59" strokeWidth="2" />
        <circle cx="0" cy="-14" r="3" fill="#7B4F7B" />
        <circle cx="0" cy="-14" r="1.5" fill="#E8A838" />
      </g>
      <g transform="translate(10, 420)" opacity="0.7">
        {[0, 15, 30, 45].map((angle) => (
          <ellipse key={angle} cx="0" cy="0" rx="20" ry="4" fill="#4A7C59" transform={`rotate(${-90 + angle})`} />
        ))}
      </g>
      <g transform="translate(290, 420)" opacity="0.7">
        {[0, -15, -30, -45].map((angle) => (
          <ellipse key={angle} cx="0" cy="0" rx="20" ry="4" fill="#4A7C59" transform={`rotate(${-90 + angle})`} />
        ))}
      </g>
      <g transform="translate(100, 415)">
        <ellipse cx="0" cy="0" rx="4" ry="5" fill="#8B6914" />
        <rect x="-5" y="-6" width="10" height="4" fill="#6B4226" rx="2" />
      </g>
      <g transform="translate(180, 420)">
        <ellipse cx="0" cy="0" rx="3" ry="4" fill="#8B6914" />
        <rect x="-4" y="-5" width="8" height="3" fill="#6B4226" rx="2" />
      </g>
    </g>
  );
}

// ─── Character SVGs ─────────────────────────────────

function BadgerBody() {
  return (
    <g>
      <ellipse cx="215" cy="290" rx="20" ry="12" fill="#A0A0A0" transform="rotate(-20 215 290)" />
      <rect x="108" y="305" width="32" height="75" fill="#3D3D3D" rx="14" />
      <rect x="160" y="305" width="32" height="75" fill="#3D3D3D" rx="14" />
      <ellipse cx="122" cy="383" rx="20" ry="12" fill="#2D2D2D" />
      <ellipse cx="178" cy="383" rx="20" ry="12" fill="#2D2D2D" />
      <ellipse cx="150" cy="255" rx="62" ry="75" fill="#D4D4D4" />
      <ellipse cx="150" cy="255" rx="45" ry="60" fill="#E8E8E8" />
      <rect x="72" y="215" width="26" height="60" fill="#A0A0A0" rx="12" />
      <ellipse cx="85" cy="277" rx="14" ry="10" fill="#3D3D3D" />
      <rect x="202" y="215" width="26" height="60" fill="#A0A0A0" rx="12" />
      <ellipse cx="215" cy="277" rx="14" ry="10" fill="#3D3D3D" />
      <ellipse cx="150" cy="115" rx="52" ry="48" fill="#D4D4D4" />
      <ellipse cx="150" cy="120" rx="15" ry="40" fill="white" />
      <ellipse cx="128" cy="115" rx="12" ry="35" fill="#2D2D2D" />
      <ellipse cx="172" cy="115" rx="12" ry="35" fill="#2D2D2D" />
      <ellipse cx="115" cy="78" rx="14" ry="11" fill="#2D2D2D" />
      <ellipse cx="185" cy="78" rx="14" ry="11" fill="#2D2D2D" />
      <ellipse cx="115" cy="78" rx="8" ry="6" fill="#D4788C" />
      <ellipse cx="185" cy="78" rx="8" ry="6" fill="#D4788C" />
      <circle cx="134" cy="108" r="7" fill="#2D2D2D" />
      <circle cx="166" cy="108" r="7" fill="#2D2D2D" />
      <circle cx="136" cy="106" r="2.5" fill="white" />
      <circle cx="168" cy="106" r="2.5" fill="white" />
      <ellipse cx="150" cy="128" rx="7" ry="5" fill="#2D2D2D" />
      <path d="M143 135 Q150 142 157 135" stroke="#2D2D2D" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="125" cy="125" rx="8" ry="5" fill="#D4788C" opacity="0.4" />
      <ellipse cx="175" cy="125" rx="8" ry="5" fill="#D4788C" opacity="0.4" />
    </g>
  );
}

function RabbitBody() {
  return (
    <g>
      <circle cx="210" cy="300" r="15" fill="white" />
      <circle cx="215" cy="295" r="8" fill="#F5F0E0" />
      <rect x="108" y="305" width="32" height="75" fill="#D4A574" rx="14" />
      <rect x="160" y="305" width="32" height="75" fill="#D4A574" rx="14" />
      <ellipse cx="120" cy="383" rx="22" ry="14" fill="#C49464" />
      <ellipse cx="180" cy="383" rx="22" ry="14" fill="#C49464" />
      <ellipse cx="150" cy="255" rx="62" ry="75" fill="#D4A574" />
      <ellipse cx="150" cy="265" rx="40" ry="50" fill="#E8D5B8" />
      <rect x="72" y="215" width="26" height="60" fill="#D4A574" rx="12" />
      <ellipse cx="85" cy="277" rx="14" ry="10" fill="#C49464" />
      <rect x="202" y="215" width="26" height="60" fill="#D4A574" rx="12" />
      <ellipse cx="215" cy="277" rx="14" ry="10" fill="#C49464" />
      <ellipse cx="150" cy="118" rx="48" ry="44" fill="#D4A574" />
      <ellipse cx="125" cy="48" rx="14" ry="42" fill="#D4A574" transform="rotate(-10 125 48)" />
      <ellipse cx="125" cy="48" rx="8" ry="32" fill="#E8B0B0" transform="rotate(-10 125 48)" />
      <ellipse cx="175" cy="48" rx="14" ry="42" fill="#D4A574" transform="rotate(10 175 48)" />
      <ellipse cx="175" cy="48" rx="8" ry="32" fill="#E8B0B0" transform="rotate(10 175 48)" />
      <ellipse cx="150" cy="125" rx="25" ry="18" fill="#E8D5B8" />
      <circle cx="134" cy="112" r="7" fill="#4A3020" />
      <circle cx="166" cy="112" r="7" fill="#4A3020" />
      <circle cx="136" cy="110" r="2.5" fill="white" />
      <circle cx="168" cy="110" r="2.5" fill="white" />
      <ellipse cx="150" cy="128" rx="5" ry="4" fill="#E8B0B0" />
      <path d="M145 133 Q150 139 155 133" stroke="#6B4226" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="120" y1="125" x2="100" y2="120" stroke="#6B4226" strokeWidth="1" opacity="0.5" />
      <line x1="120" y1="130" x2="98" y2="132" stroke="#6B4226" strokeWidth="1" opacity="0.5" />
      <line x1="180" y1="125" x2="200" y2="120" stroke="#6B4226" strokeWidth="1" opacity="0.5" />
      <line x1="180" y1="130" x2="202" y2="132" stroke="#6B4226" strokeWidth="1" opacity="0.5" />
      <ellipse cx="125" cy="125" rx="8" ry="5" fill="#E8B0B0" opacity="0.5" />
      <ellipse cx="175" cy="125" rx="8" ry="5" fill="#E8B0B0" opacity="0.5" />
    </g>
  );
}

function FoxBody() {
  return (
    <g>
      <path d="M210 280 Q260 250 270 290 Q275 320 240 330 Q210 335 200 310 Z" fill="#E87D3E" />
      <path d="M240 310 Q250 320 260 310 Q255 325 240 325 Z" fill="white" />
      <rect x="108" y="305" width="32" height="75" fill="#E87D3E" rx="14" />
      <rect x="160" y="305" width="32" height="75" fill="#E87D3E" rx="14" />
      <ellipse cx="122" cy="383" rx="20" ry="12" fill="#3D2D1D" />
      <ellipse cx="178" cy="383" rx="20" ry="12" fill="#3D2D1D" />
      <ellipse cx="150" cy="255" rx="62" ry="75" fill="#E87D3E" />
      <ellipse cx="150" cy="265" rx="38" ry="50" fill="#F5E6D3" />
      <rect x="72" y="215" width="26" height="60" fill="#E87D3E" rx="12" />
      <ellipse cx="85" cy="277" rx="14" ry="10" fill="#3D2D1D" />
      <rect x="202" y="215" width="26" height="60" fill="#E87D3E" rx="12" />
      <ellipse cx="215" cy="277" rx="14" ry="10" fill="#3D2D1D" />
      <ellipse cx="150" cy="115" rx="50" ry="45" fill="#E87D3E" />
      <polygon points="110,85 100,40 130,72" fill="#E87D3E" />
      <polygon points="113,80 107,50 127,73" fill="#F5E6D3" />
      <polygon points="190,85 200,40 170,72" fill="#E87D3E" />
      <polygon points="187,80 193,50 173,73" fill="#F5E6D3" />
      <ellipse cx="150" cy="130" rx="28" ry="22" fill="#F5E6D3" />
      <ellipse cx="132" cy="108" rx="7" ry="8" fill="#3D2D1D" />
      <ellipse cx="168" cy="108" rx="7" ry="8" fill="#3D2D1D" />
      <ellipse cx="134" cy="106" rx="2.5" ry="3" fill="white" />
      <ellipse cx="170" cy="106" rx="2.5" ry="3" fill="white" />
      <ellipse cx="150" cy="125" rx="7" ry="5" fill="#2D2D2D" />
      <path d="M143 132 Q150 139 157 132" stroke="#6B4226" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="122" cy="122" rx="8" ry="5" fill="#D4788C" opacity="0.4" />
      <ellipse cx="178" cy="122" rx="8" ry="5" fill="#D4788C" opacity="0.4" />
    </g>
  );
}

function BearBody() {
  return (
    <g>
      <circle cx="212" cy="295" r="10" fill="#7A5530" />
      <rect x="105" y="305" width="35" height="75" fill="#8B6914" rx="16" />
      <rect x="160" y="305" width="35" height="75" fill="#8B6914" rx="16" />
      <ellipse cx="122" cy="385" rx="22" ry="14" fill="#6B4226" />
      <ellipse cx="114" cy="380" rx="4" ry="3" fill="#5C3A1E" />
      <ellipse cx="122" cy="377" rx="4" ry="3" fill="#5C3A1E" />
      <ellipse cx="130" cy="380" rx="4" ry="3" fill="#5C3A1E" />
      <ellipse cx="178" cy="385" rx="22" ry="14" fill="#6B4226" />
      <ellipse cx="170" cy="380" rx="4" ry="3" fill="#5C3A1E" />
      <ellipse cx="178" cy="377" rx="4" ry="3" fill="#5C3A1E" />
      <ellipse cx="186" cy="380" rx="4" ry="3" fill="#5C3A1E" />
      <ellipse cx="150" cy="255" rx="65" ry="78" fill="#8B6914" />
      <ellipse cx="150" cy="268" rx="42" ry="48" fill="#B88A3D" />
      <rect x="68" y="212" width="28" height="65" fill="#8B6914" rx="13" />
      <ellipse cx="82" cy="279" rx="15" ry="11" fill="#6B4226" />
      <rect x="204" y="212" width="28" height="65" fill="#8B6914" rx="13" />
      <ellipse cx="218" cy="279" rx="15" ry="11" fill="#6B4226" />
      <circle cx="150" cy="115" r="52" fill="#8B6914" />
      <circle cx="110" cy="74" r="18" fill="#8B6914" />
      <circle cx="110" cy="74" r="10" fill="#B88A3D" />
      <circle cx="190" cy="74" r="18" fill="#8B6914" />
      <circle cx="190" cy="74" r="10" fill="#B88A3D" />
      <ellipse cx="150" cy="130" rx="25" ry="20" fill="#B88A3D" />
      <circle cx="132" cy="108" r="7" fill="#2D1B0E" />
      <circle cx="168" cy="108" r="7" fill="#2D1B0E" />
      <circle cx="134" cy="106" r="2.5" fill="white" />
      <circle cx="170" cy="106" r="2.5" fill="white" />
      <ellipse cx="150" cy="125" rx="8" ry="6" fill="#2D1B0E" />
      <path d="M142 134 Q150 142 158 134" stroke="#4A3020" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="122" cy="125" rx="9" ry="5" fill="#D4788C" opacity="0.35" />
      <ellipse cx="178" cy="125" rx="9" ry="5" fill="#D4788C" opacity="0.35" />
    </g>
  );
}

function CharacterBody({ id }: { id: CharacterId }) {
  switch (id) {
    case "badger": return <BadgerBody />;
    case "rabbit": return <RabbitBody />;
    case "fox": return <FoxBody />;
    case "bear": return <BearBody />;
  }
}

function CharacterThumbnail({ id }: { id: CharacterId }) {
  return (
    <svg viewBox="90 60 120 110" width="100%" height="100%">
      <CharacterBody id={id} />
    </svg>
  );
}

function CharacterDisplay({ characterId, equipped, svgRef }: { characterId: CharacterId; equipped: Equipped; svgRef?: React.RefObject<SVGSVGElement | null> }) {
  return (
    <svg ref={svgRef} viewBox="0 0 300 450" className="w-full h-full" style={{ maxHeight: "500px" }}>
      <SceneBackground />
      <CharacterBody id={characterId} />
      {equipped.shoes && <ClothingSvg id={equipped.shoes} />}
      {equipped.bottom && <ClothingSvg id={equipped.bottom} />}
      {equipped.top && <ClothingSvg id={equipped.top} />}
      {equipped.hat && <ClothingSvg id={equipped.hat} />}
    </svg>
  );
}

// ─── SVG to PNG Capture ─────────────────────────────
function svgToPngBlob(svgEl: SVGSVGElement, scale = 2): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const svgData = new XMLSerializer().serializeToString(svgEl);
    const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 300 * scale;
      canvas.height = 450 * scale;
      const ctx = canvas.getContext("2d");
      if (!ctx) { reject(new Error("No canvas context")); return; }
      ctx.fillStyle = "#F0C4D1";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);
      canvas.toBlob((blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Failed to create blob"));
      }, "image/png");
    };
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("Failed to load SVG")); };
    img.src = url;
  });
}

// ─── Share Icons ─────────────────────────────────────
function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function PinterestIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  );
}

// ─── Main Game Component ────────────────────────────
export default function Game() {
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterId>("badger");
  const [equipped, setEquipped] = useState<Record<CharacterId, Equipped>>({
    badger: { hat: null, top: null, bottom: null, shoes: null },
    rabbit: { hat: null, top: null, bottom: null, shoes: null },
    fox: { hat: null, top: null, bottom: null, shoes: null },
    bear: { hat: null, top: null, bottom: null, shoes: null },
  });
  const [activeSlot, setActiveSlot] = useState<ClothingSlot>("hat");
  const [activeSeason, setActiveSeason] = useState<Season>("fall");
  const [animKey, setAnimKey] = useState(0);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const currentEquipped = equipped[selectedCharacter];

  const toggleClothing = useCallback(
    (item: ClothingItem) => {
      setEquipped((prev) => {
        const charEquip = prev[selectedCharacter];
        const isEquipped = charEquip[item.slot] === item.id;
        return {
          ...prev,
          [selectedCharacter]: {
            ...charEquip,
            [item.slot]: isEquipped ? null : item.id,
          },
        };
      });
      setAnimKey((k) => k + 1);
    },
    [selectedCharacter]
  );

  const clearAll = useCallback(() => {
    setEquipped((prev) => ({
      ...prev,
      [selectedCharacter]: { hat: null, top: null, bottom: null, shoes: null },
    }));
  }, [selectedCharacter]);

  const charInfo = characters.find((c) => c.id === selectedCharacter);
  const charLabel = `${charInfo?.name} the ${charInfo?.label}`;

  const saveImage = useCallback(async () => {
    if (!svgRef.current) return;
    try {
      setSaveStatus("Saving...");
      const blob = await svgToPngBlob(svgRef.current, 3);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `woodland-dressup-${selectedCharacter}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      setSaveStatus("Saved!");
      setTimeout(() => setSaveStatus(null), 2000);
    } catch {
      setSaveStatus("Error");
      setTimeout(() => setSaveStatus(null), 2000);
    }
  }, [selectedCharacter]);

  const shareNative = useCallback(async () => {
    if (!svgRef.current) return;
    try {
      const blob = await svgToPngBlob(svgRef.current, 2);
      const file = new File([blob], `woodland-dressup-${selectedCharacter}.png`, { type: "image/png" });
      const shareData: ShareData = {
        title: "Woodland Dress Up",
        text: `Check out ${charLabel} in their outfit! Made with Woodland Dress Up`,
        files: [file],
      };
      if (navigator.canShare?.(shareData)) {
        await navigator.share(shareData);
        return true;
      }
    } catch {
      // User cancelled or not supported
    }
    return false;
  }, [selectedCharacter, charLabel]);

  const shareToTwitter = useCallback(() => {
    const text = encodeURIComponent(`Check out ${charLabel} in their woodland outfit! Made with Woodland Dress Up`);
    window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank", "width=550,height=420");
    setShowShareMenu(false);
  }, [charLabel]);

  const shareToPinterest = useCallback(async () => {
    if (!svgRef.current) return;
    try {
      const blob = await svgToPngBlob(svgRef.current, 2);
      const url = URL.createObjectURL(blob);
      const desc = encodeURIComponent(`${charLabel} dressed up for the season! Made with Woodland Dress Up`);
      window.open(`https://pinterest.com/pin/create/button/?description=${desc}&media=${url}`, "_blank", "width=750,height=550");
    } catch {
      // fallback
    }
    setShowShareMenu(false);
  }, [charLabel]);

  const shareToFacebook = useCallback(() => {
    const text = encodeURIComponent(`Check out my woodland friend ${charLabel}!`);
    window.open(`https://www.facebook.com/sharer/sharer.php?quote=${text}`, "_blank", "width=550,height=420");
    setShowShareMenu(false);
  }, [charLabel]);

  const handleShare = useCallback(async () => {
    // Try native share first (mobile)
    const shared = await shareNative();
    if (!shared) {
      setShowShareMenu((v) => !v);
    }
  }, [shareNative]);

  const filteredClothing = clothingItems.filter(
    (c) => c.slot === activeSlot && c.season === activeSeason
  );

  const sc = seasonColors[activeSeason];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ background: "linear-gradient(135deg, #FDF6EC 0%, #F5E6D3 50%, #E8D5B8 100%)" }}>
      <MusicPlayer />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2" style={{ color: "#6B4226" }}>
        Woodland Dress Up
      </h1>

      {/* Season Selector */}
      <div className="flex gap-2 mb-4 flex-wrap justify-center">
        {(["spring", "summer", "fall", "winter"] as Season[]).map((season) => {
          const colors = seasonColors[season];
          const isActive = activeSeason === season;
          return (
            <button
              key={season}
              onClick={() => setActiveSeason(season)}
              className="px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: isActive ? colors.active : colors.bg,
                color: isActive ? "white" : colors.active,
                border: `2px solid ${isActive ? colors.border : "transparent"}`,
                boxShadow: isActive ? `0 2px 8px ${colors.active}40` : "none",
              }}
            >
              {seasonLabels[season]}
            </button>
          );
        })}
      </div>

      {/* Main game container */}
      <div className="tin-box w-full max-w-4xl">
        <div className="tin-inner">
          <div className="flex flex-col md:flex-row">
            {/* LEFT: Character Display */}
            <div className="md:w-1/2 p-3">
              <div className="scene-bg rounded-lg overflow-hidden relative" style={{ border: "2px solid #DAA520" }}>
                <div key={animKey} className="equip-anim">
                  <CharacterDisplay characterId={selectedCharacter} equipped={currentEquipped} svgRef={svgRef} />
                </div>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold" style={{ background: "rgba(255,248,238,0.9)", color: "#6B4226", border: "2px solid #DAA520" }}>
                  {charLabel}
                </div>
              </div>

              {/* Save & Share Buttons */}
              <div className="flex gap-2 mt-2 justify-center relative">
                <button
                  onClick={saveImage}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #4A7C59 0%, #2D5F4A 100%)",
                    color: "#FFF8EE",
                    border: "2px solid #DAA520",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  <DownloadIcon />
                  {saveStatus || "Save"}
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #7B4F7B 0%, #5C2F5C 100%)",
                    color: "#FFF8EE",
                    border: "2px solid #DAA520",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                  }}
                >
                  <ShareIcon />
                  Share
                </button>

                {/* Share dropdown */}
                {showShareMenu && (
                  <div
                    className="absolute top-full mt-2 right-0 rounded-xl overflow-hidden shadow-lg z-40"
                    style={{ background: "#FFF8EE", border: "2px solid #DAA520", minWidth: "180px" }}
                  >
                    <div className="px-3 py-2 text-xs font-bold" style={{ color: "#6B4226", borderBottom: "1px solid #EEE0C0" }}>
                      Share to:
                    </div>
                    <button
                      onClick={shareToTwitter}
                      className="w-full text-left px-3 py-2.5 text-sm font-semibold flex items-center gap-2.5 transition-colors hover:bg-amber-50"
                      style={{ color: "#1A1A1A" }}
                    >
                      <TwitterIcon /> X / Twitter
                    </button>
                    <button
                      onClick={shareToFacebook}
                      className="w-full text-left px-3 py-2.5 text-sm font-semibold flex items-center gap-2.5 transition-colors hover:bg-amber-50"
                      style={{ color: "#1877F2" }}
                    >
                      <FacebookIcon /> Facebook
                    </button>
                    <button
                      onClick={shareToPinterest}
                      className="w-full text-left px-3 py-2.5 text-sm font-semibold flex items-center gap-2.5 transition-colors hover:bg-amber-50"
                      style={{ color: "#E60023" }}
                    >
                      <PinterestIcon /> Pinterest
                    </button>
                    <button
                      onClick={saveImage}
                      className="w-full text-left px-3 py-2.5 text-sm font-semibold flex items-center gap-2.5 transition-colors hover:bg-amber-50"
                      style={{ color: "#4A7C59", borderTop: "1px solid #EEE0C0" }}
                    >
                      <DownloadIcon /> Save Image
                    </button>
                  </div>
                )}
              </div>

              {/* Character Selector */}
              <div className="mt-3">
                <p className="text-xs font-semibold mb-2 text-center" style={{ color: "#8B6914" }}>Choose your character:</p>
                <div className="flex justify-center gap-2">
                  {characters.map((char) => (
                    <button
                      key={char.id}
                      className={`char-btn w-16 h-16 md:w-20 md:h-20 p-1 ${selectedCharacter === char.id ? "active" : ""}`}
                      onClick={() => setSelectedCharacter(char.id)}
                      title={`${char.name} the ${char.label}`}
                    >
                      <CharacterThumbnail id={char.id} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: Clothing Wardrobe */}
            <div className="md:w-1/2 p-3 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold" style={{ color: "#6B4226" }}>
                  {seasonLabels[activeSeason]} Wardrobe
                </h2>
                <button className="clear-btn" onClick={clearAll}>
                  Clear All
                </button>
              </div>

              {/* Category Tabs */}
              <div className="flex gap-2 mb-3 flex-wrap">
                {(["hat", "top", "bottom", "shoes"] as ClothingSlot[]).map((slot) => (
                  <button
                    key={slot}
                    className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200"
                    style={{
                      background: activeSlot === slot ? sc.active : "#FFF8EE",
                      color: activeSlot === slot ? "white" : "#6B4226",
                      border: `2px solid ${activeSlot === slot ? sc.border : "transparent"}`,
                    }}
                    onClick={() => setActiveSlot(slot)}
                  >
                    {slotLabels[slot]}
                  </button>
                ))}
              </div>

              {/* Clothing Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 wardrobe-scroll flex-1 overflow-y-auto" style={{ maxHeight: "400px" }}>
                {filteredClothing.map((item) => {
                  const isEquipped = currentEquipped[item.slot] === item.id;
                  return (
                    <button
                      key={item.id}
                      className={`clothing-card p-2 flex flex-col items-center ${isEquipped ? "equipped" : ""}`}
                      onClick={() => toggleClothing(item)}
                    >
                      <div className="w-full aspect-square flex items-center justify-center">
                        <ClothingThumbnail id={item.id} />
                      </div>
                      <span className="text-xs font-semibold mt-1 text-center leading-tight" style={{ color: "#6B4226" }}>
                        {item.name}
                      </span>
                      {isEquipped && (
                        <span className="text-xs mt-0.5 font-bold" style={{ color: sc.active }}>
                          Wearing
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs mt-4 text-center" style={{ color: "#B88A3D" }}>
        Click clothing to equip. Click again to remove. Mix seasons freely!
      </p>
    </div>
  );
}
