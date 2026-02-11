"use client";

import { useState, useRef, useCallback, useEffect } from "react";

// ─── Note frequencies ───────────────────────────────
const N: Record<string, number> = {
  C3: 130.81, D3: 146.83, E3: 164.81, F3: 174.61, G3: 196.0, A3: 220.0, B3: 246.94,
  C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.0, A4: 440.0, B4: 493.88,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.0, B5: 987.77,
  C6: 1046.5,
};

type NoteSeq = { note: string; dur: number }[];

// ─── Track 1: Woodland Music Box (original) ─────────
const TRACK1_MELODY: NoteSeq = [
  { note: "E5", dur: 0.4 }, { note: "G5", dur: 0.3 }, { note: "A5", dur: 0.5 },
  { note: "G5", dur: 0.3 }, { note: "E5", dur: 0.6 }, { note: "", dur: 0.2 },
  { note: "D5", dur: 0.3 }, { note: "E5", dur: 0.3 }, { note: "G5", dur: 0.4 },
  { note: "E5", dur: 0.3 }, { note: "D5", dur: 0.5 }, { note: "", dur: 0.3 },
  { note: "G5", dur: 0.3 }, { note: "A5", dur: 0.3 }, { note: "C6", dur: 0.5 },
  { note: "A5", dur: 0.3 }, { note: "G5", dur: 0.4 }, { note: "E5", dur: 0.5 },
  { note: "", dur: 0.2 },
  { note: "C5", dur: 0.3 }, { note: "D5", dur: 0.3 }, { note: "E5", dur: 0.5 },
  { note: "D5", dur: 0.3 }, { note: "C5", dur: 0.8 }, { note: "", dur: 0.4 },
  { note: "A5", dur: 0.25 }, { note: "G5", dur: 0.25 }, { note: "E5", dur: 0.3 },
  { note: "G5", dur: 0.4 }, { note: "E5", dur: 0.3 }, { note: "D5", dur: 0.6 },
  { note: "", dur: 0.3 },
  { note: "E5", dur: 0.3 }, { note: "D5", dur: 0.3 }, { note: "C5", dur: 0.4 },
  { note: "D5", dur: 0.3 }, { note: "E5", dur: 0.8 }, { note: "", dur: 0.5 },
  { note: "G5", dur: 0.2 }, { note: "A5", dur: 0.2 }, { note: "G5", dur: 0.2 },
  { note: "E5", dur: 0.4 }, { note: "D5", dur: 0.3 }, { note: "C5", dur: 0.6 },
  { note: "", dur: 0.3 },
  { note: "D5", dur: 0.3 }, { note: "E5", dur: 0.4 }, { note: "G5", dur: 0.3 },
  { note: "E5", dur: 0.5 }, { note: "C5", dur: 0.9 }, { note: "", dur: 0.6 },
];
const TRACK1_HARMONY: NoteSeq = [
  { note: "C4", dur: 2.0 }, { note: "G4", dur: 2.0 }, { note: "A4", dur: 2.0 }, { note: "E4", dur: 2.0 },
  { note: "C4", dur: 2.0 }, { note: "D4", dur: 2.0 }, { note: "G4", dur: 2.0 }, { note: "C4", dur: 2.0 },
];

// ─── Track 2: Sunny Village (Animal Crossing-style cheerful) ─
const TRACK2_MELODY: NoteSeq = [
  // Bouncy, cheerful theme
  { note: "C5", dur: 0.25 }, { note: "E5", dur: 0.25 }, { note: "G5", dur: 0.35 },
  { note: "E5", dur: 0.2 }, { note: "C5", dur: 0.35 }, { note: "", dur: 0.15 },
  { note: "D5", dur: 0.2 }, { note: "F5", dur: 0.25 }, { note: "A5", dur: 0.35 },
  { note: "G5", dur: 0.25 }, { note: "E5", dur: 0.4 }, { note: "", dur: 0.2 },
  // Little hop
  { note: "G5", dur: 0.15 }, { note: "A5", dur: 0.15 }, { note: "G5", dur: 0.15 },
  { note: "F5", dur: 0.25 }, { note: "E5", dur: 0.25 }, { note: "D5", dur: 0.35 },
  { note: "", dur: 0.2 },
  { note: "C5", dur: 0.3 }, { note: "D5", dur: 0.2 }, { note: "E5", dur: 0.3 },
  { note: "G5", dur: 0.4 }, { note: "C6", dur: 0.5 }, { note: "", dur: 0.3 },
  // Playful response
  { note: "B5", dur: 0.2 }, { note: "A5", dur: 0.2 }, { note: "G5", dur: 0.3 },
  { note: "E5", dur: 0.25 }, { note: "D5", dur: 0.25 }, { note: "C5", dur: 0.4 },
  { note: "", dur: 0.2 },
  { note: "E5", dur: 0.2 }, { note: "F5", dur: 0.2 }, { note: "G5", dur: 0.3 },
  { note: "A5", dur: 0.25 }, { note: "G5", dur: 0.25 }, { note: "F5", dur: 0.2 },
  { note: "E5", dur: 0.5 }, { note: "", dur: 0.25 },
  // Ending phrase
  { note: "D5", dur: 0.2 }, { note: "E5", dur: 0.2 }, { note: "G5", dur: 0.25 },
  { note: "E5", dur: 0.2 }, { note: "D5", dur: 0.25 }, { note: "C5", dur: 0.6 },
  { note: "", dur: 0.3 },
  { note: "G5", dur: 0.2 }, { note: "E5", dur: 0.2 }, { note: "C5", dur: 0.3 },
  { note: "D5", dur: 0.25 }, { note: "E5", dur: 0.4 }, { note: "C5", dur: 0.7 },
  { note: "", dur: 0.5 },
];
const TRACK2_HARMONY: NoteSeq = [
  { note: "C4", dur: 1.5 }, { note: "F4", dur: 1.5 }, { note: "G4", dur: 1.5 }, { note: "C4", dur: 1.5 },
  { note: "F4", dur: 1.5 }, { note: "G4", dur: 1.5 }, { note: "A4", dur: 1.5 }, { note: "G4", dur: 1.5 },
  { note: "C4", dur: 1.5 }, { note: "E4", dur: 1.5 },
];

// ─── Track 3: Rainy Afternoon (gentle, dreamy) ──────
const TRACK3_MELODY: NoteSeq = [
  // Slow, gentle, raindrop-like
  { note: "E5", dur: 0.6 }, { note: "", dur: 0.3 }, { note: "B4", dur: 0.5 },
  { note: "C5", dur: 0.7 }, { note: "", dur: 0.4 },
  { note: "A4", dur: 0.5 }, { note: "B4", dur: 0.4 }, { note: "E5", dur: 0.8 },
  { note: "", dur: 0.5 },
  { note: "D5", dur: 0.5 }, { note: "C5", dur: 0.4 }, { note: "B4", dur: 0.6 },
  { note: "", dur: 0.3 }, { note: "A4", dur: 0.7 }, { note: "", dur: 0.4 },
  // Gentle drops
  { note: "E5", dur: 0.3 }, { note: "", dur: 0.5 }, { note: "G5", dur: 0.4 },
  { note: "", dur: 0.3 }, { note: "E5", dur: 0.5 }, { note: "D5", dur: 0.6 },
  { note: "", dur: 0.4 },
  { note: "C5", dur: 0.5 }, { note: "B4", dur: 0.3 }, { note: "A4", dur: 0.5 },
  { note: "B4", dur: 0.4 }, { note: "C5", dur: 0.8 }, { note: "", dur: 0.5 },
  // Dreamy resolve
  { note: "G5", dur: 0.4 }, { note: "E5", dur: 0.4 }, { note: "D5", dur: 0.5 },
  { note: "", dur: 0.3 },
  { note: "C5", dur: 0.4 }, { note: "E5", dur: 0.5 }, { note: "D5", dur: 0.4 },
  { note: "B4", dur: 0.6 }, { note: "", dur: 0.4 },
  { note: "A4", dur: 0.5 }, { note: "C5", dur: 0.5 }, { note: "B4", dur: 0.4 },
  { note: "A4", dur: 1.0 }, { note: "", dur: 0.8 },
];
const TRACK3_HARMONY: NoteSeq = [
  { note: "A3", dur: 2.5 }, { note: "E4", dur: 2.5 }, { note: "A3", dur: 2.5 }, { note: "G3", dur: 2.5 },
  { note: "C4", dur: 2.5 }, { note: "E4", dur: 2.5 }, { note: "A3", dur: 2.5 }, { note: "E4", dur: 2.5 },
];

interface Track {
  name: string;
  melody: NoteSeq;
  harmony: NoteSeq;
  melodyGain: number;
  harmonyGain: number;
  waveform: OscillatorType;
  tempo: number; // multiplier
}

const TRACKS: Track[] = [
  { name: "Woodland Music Box", melody: TRACK1_MELODY, harmony: TRACK1_HARMONY, melodyGain: 0.12, harmonyGain: 0.04, waveform: "triangle", tempo: 1 },
  { name: "Sunny Village", melody: TRACK2_MELODY, harmony: TRACK2_HARMONY, melodyGain: 0.10, harmonyGain: 0.035, waveform: "triangle", tempo: 1.05 },
  { name: "Rainy Afternoon", melody: TRACK3_MELODY, harmony: TRACK3_HARMONY, melodyGain: 0.10, harmonyGain: 0.05, waveform: "sine", tempo: 0.85 },
];

// ─── Audio Engine ────────────────────────────────────

function playNote(
  ctx: AudioContext,
  freq: number,
  startTime: number,
  duration: number,
  gain: number,
  waveform: OscillatorType,
  destination: AudioNode,
  isHarmony: boolean,
) {
  const osc = ctx.createOscillator();
  osc.type = waveform;
  osc.frequency.value = freq;

  const osc2 = ctx.createOscillator();
  osc2.type = "sine";
  osc2.frequency.value = isHarmony ? freq * 1.002 : freq * 2;

  const gainNode = ctx.createGain();
  const gain2 = ctx.createGain();

  if (isHarmony) {
    // Pad: slow envelope
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(gain, startTime + duration * 0.3);
    gainNode.gain.linearRampToValueAtTime(gain * 0.8, startTime + duration * 0.7);
    gainNode.gain.linearRampToValueAtTime(0, startTime + duration);
    gain2.gain.setValueAtTime(0, startTime);
    gain2.gain.linearRampToValueAtTime(gain * 0.5, startTime + duration * 0.3);
    gain2.gain.linearRampToValueAtTime(0, startTime + duration);
  } else {
    // Melody: music box envelope
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(gain, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(gain * 0.4, startTime + duration * 0.3);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    gain2.gain.setValueAtTime(0, startTime);
    gain2.gain.linearRampToValueAtTime(gain * 0.15, startTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration * 0.6);
  }

  osc.connect(gainNode);
  osc2.connect(gain2);
  gainNode.connect(destination);
  gain2.connect(destination);

  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
  osc2.start(startTime);
  osc2.stop(startTime + duration + 0.05);
}

function scheduleMelody(ctx: AudioContext, startTime: number, track: Track, destination: AudioNode) {
  let t = startTime;
  for (const { note, dur } of track.melody) {
    const d = dur / track.tempo;
    if (note && N[note]) {
      playNote(ctx, N[note], t, d * 1.2, track.melodyGain, track.waveform, destination, false);
    }
    t += d;
  }
  return t;
}

function scheduleHarmony(ctx: AudioContext, startTime: number, totalDuration: number, track: Track, destination: AudioNode) {
  let t = startTime;
  let i = 0;
  while (t < startTime + totalDuration) {
    const { note, dur } = track.harmony[i % track.harmony.length];
    const d = dur / track.tempo;
    if (N[note]) {
      playNote(ctx, N[note], t, d, track.harmonyGain, "sine", destination, true);
      playNote(ctx, N[note] * 1.5, t, d, track.harmonyGain * 0.5, "sine", destination, true);
    }
    t += d;
    i++;
  }
}

// ─── Component ───────────────────────────────────────

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [trackIdx, setTrackIdx] = useState(0);
  const [showPicker, setShowPicker] = useState(false);
  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stoppedRef = useRef(false);
  const trackRef = useRef(0);

  const scheduleLoop = useCallback(() => {
    const ctx = ctxRef.current;
    const masterGain = masterGainRef.current;
    if (!ctx || !masterGain || stoppedRef.current) return;

    const track = TRACKS[trackRef.current];
    const startTime = ctx.currentTime + 0.1;
    const end = scheduleMelody(ctx, startTime, track, masterGain);
    scheduleHarmony(ctx, startTime, end - startTime, track, masterGain);

    const loopDuration = end - startTime;
    timerRef.current = setTimeout(() => {
      if (!stoppedRef.current) scheduleLoop();
    }, (loopDuration - 0.5) * 1000);
  }, []);

  const stopAudio = useCallback(() => {
    stoppedRef.current = true;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    const ctx = ctxRef.current;
    const masterGain = masterGainRef.current;
    if (ctx && masterGain) {
      masterGain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
      setTimeout(() => {
        ctx.close();
        ctxRef.current = null;
        masterGainRef.current = null;
      }, 600);
    }
    setPlaying(false);
  }, []);

  const startAudio = useCallback(() => {
    stoppedRef.current = false;
    const ctx = new AudioContext();
    ctxRef.current = ctx;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0;
    masterGain.gain.linearRampToValueAtTime(0.8, ctx.currentTime + 1.0);

    const delay = ctx.createDelay(0.5);
    delay.delayTime.value = 0.2;
    const delayGain = ctx.createGain();
    delayGain.gain.value = 0.15;

    masterGain.connect(ctx.destination);
    masterGain.connect(delay);
    delay.connect(delayGain);
    delayGain.connect(ctx.destination);

    masterGainRef.current = masterGain;
    setPlaying(true);
    scheduleLoop();
  }, [scheduleLoop]);

  const togglePlay = useCallback(() => {
    if (playing) {
      stopAudio();
    } else {
      startAudio();
    }
  }, [playing, startAudio, stopAudio]);

  const switchTrack = useCallback((idx: number) => {
    trackRef.current = idx;
    setTrackIdx(idx);
    setShowPicker(false);
    if (playing) {
      stopAudio();
      setTimeout(() => {
        startAudio();
      }, 700);
    }
  }, [playing, stopAudio, startAudio]);

  useEffect(() => {
    return () => {
      stoppedRef.current = true;
      if (timerRef.current) clearTimeout(timerRef.current);
      ctxRef.current?.close();
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col items-end gap-2">
      {/* Track picker dropdown */}
      {showPicker && (
        <div
          className="rounded-xl overflow-hidden shadow-lg"
          style={{ background: "#FFF8EE", border: "2px solid #DAA520", minWidth: "200px" }}
        >
          <div className="px-3 py-2 text-xs font-bold" style={{ color: "#6B4226", borderBottom: "1px solid #DAA520" }}>
            Choose a song:
          </div>
          {TRACKS.map((track, i) => (
            <button
              key={i}
              onClick={() => switchTrack(i)}
              className="w-full text-left px-3 py-2 text-sm font-semibold transition-colors hover:bg-amber-50 flex items-center gap-2"
              style={{
                color: i === trackIdx ? "#C7522A" : "#6B4226",
                background: i === trackIdx ? "#FFF0E0" : "transparent",
              }}
            >
              <span className="w-4 text-center">{i === trackIdx ? ">" : ""}</span>
              {track.name}
            </button>
          ))}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center gap-1.5">
        {/* Track name / picker toggle */}
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="px-3 py-2 rounded-full text-xs font-semibold transition-all duration-200 hover:scale-105"
          style={{
            background: "#FFF8EE",
            color: "#6B4226",
            border: "2px solid #DAA520",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
          title="Choose song"
        >
          {TRACKS[trackIdx].name}
          <span className="ml-1 text-xs opacity-60">{showPicker ? "^" : "v"}</span>
        </button>

        {/* Play/Pause button */}
        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:scale-105"
          style={{
            background: playing
              ? "linear-gradient(135deg, #C7522A 0%, #D4623A 100%)"
              : "linear-gradient(135deg, #4A7C59 0%, #2D5F4A 100%)",
            color: "#FFF8EE",
            border: "2px solid #DAA520",
            boxShadow: playing
              ? "0 0 12px rgba(199,82,42,0.4), 0 2px 8px rgba(0,0,0,0.2)"
              : "0 2px 8px rgba(0,0,0,0.2)",
          }}
          title={playing ? "Stop music" : "Play music"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <rect x="3" y="2" width="4" height="12" rx="1" />
              <rect x="9" y="2" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M3 1.5v13l11-6.5z" />
            </svg>
          )}
          {playing && (
            <span className="relative w-4 h-4">
              <span style={{ animation: "float-note 2s ease-in-out infinite", fontSize: "12px", position: "absolute", left: 0, top: 0 }}>&#9834;</span>
              <span style={{ animation: "float-note 2s ease-in-out infinite 0.7s", fontSize: "10px", position: "absolute", left: "6px", top: "-2px" }}>&#9835;</span>
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
