import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sparkleData = Array.from({ length: 26 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  size: 4 + Math.random() * 8,
  delay: Math.random() * 4,
  duration: 3 + Math.random() * 5,
}));

const cloudData = [
  { id: 1, top: "12%", width: 180, height: 54, duration: 36, delay: 0 },
  { id: 2, top: "24%", width: 240, height: 68, duration: 44, delay: 4 },
  { id: 3, top: "70%", width: 210, height: 60, duration: 40, delay: 2 },
];

function FloatingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.95),_rgba(225,241,255,0.72)_32%,_rgba(196,224,248,0.9)_68%,_rgba(181,212,240,1)_100%)]" />

      <div className="absolute inset-0">
        {cloudData.map((cloud) => (
          <motion.div
            key={cloud.id}
            className="absolute rounded-full blur-xl opacity-40"
            style={{
              top: cloud.top,
              width: cloud.width,
              height: cloud.height,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9), rgba(230,240,255,0.55), rgba(255,255,255,0.7))",
            }}
            initial={{ x: "-20vw" }}
            animate={{ x: "120vw" }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              ease: "linear",
              delay: cloud.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {sparkleData.map((item) => (
          <motion.div
            key={item.id}
            className="absolute rounded-full"
            style={{
              left: item.left,
              top: item.top,
              width: item.size,
              height: item.size,
              background:
                "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(214,236,255,0.7) 42%, rgba(255,255,255,0) 72%)",
              boxShadow: "0 0 18px rgba(255,255,255,0.55)",
            }}
            animate={{
              opacity: [0.25, 0.85, 0.3],
              scale: [0.8, 1.25, 0.95],
              y: [0, -8, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_18%),radial-gradient(circle_at_78%_30%,rgba(255,255,255,0.18),transparent_20%),radial-gradient(circle_at_50%_76%,rgba(255,255,255,0.18),transparent_18%)] opacity-80" />
    </div>
  );
}

function Confetti({ active }) {
  const items = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: 12 + Math.random() * 76,
        delay: Math.random() * 1.8,
        duration: 3.8 + Math.random() * 2.5,
        width: 2 + Math.random() * 2,
        height: 12 + Math.random() * 14,
        rotate: -35 + Math.random() * 70,
      })),
    []
  );

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className="absolute top-[-10%] rounded-full opacity-80"
          style={{
            left: `${item.left}%`,
            width: item.width,
            height: item.height,
            rotate: `${item.rotate}deg`,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(212,231,248,0.9), rgba(190,214,234,0.8))",
            boxShadow: "0 0 10px rgba(255,255,255,0.4)",
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: [0, 420], opacity: [0, 0.9, 0.75, 0] }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeIn",
          }}
        />
      ))}
    </div>
  );
}

function Balloons({ active }) {
  const balloons = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        left: 18 + i * 12,
        duration: 7 + Math.random() * 4,
        delay: i * 0.45,
        size: 28 + Math.random() * 12,
      })),
    []
  );

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute bottom-[-10%]"
          style={{ left: `${b.left}%` }}
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: -520, opacity: [0, 0.7, 0.7, 0] }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeOut",
          }}
        >
          <div
            className="relative rounded-full backdrop-blur-[1px]"
            style={{
              width: b.size,
              height: b.size * 1.25,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.45), rgba(196,225,248,0.38), rgba(166,203,233,0.32))",
              border: "1px solid rgba(255,255,255,0.55)",
              boxShadow:
                "inset -8px -10px 20px rgba(255,255,255,0.1), 0 10px 30px rgba(144,180,208,0.18)",
            }}
          >
            <div className="absolute left-[18%] top-[14%] h-2.5 w-2.5 rounded-full bg-white/40 blur-[1px]" />
          </div>
          <div className="mx-auto h-10 sm:h-14 w-px bg-gradient-to-b from-white/70 to-transparent" />
        </motion.div>
      ))}
    </div>
  );
}

function Petals({ active }) {
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: 15 + Math.random() * 70,
        delay: Math.random() * 2,
        duration: 7 + Math.random() * 3,
        size: 8 + Math.random() * 8,
      })),
    []
  );

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-10%] rounded-[999px_999px_999px_999px/70%_70%_100%_100%]"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.3,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.88), rgba(223,238,250,0.9), rgba(187,215,237,0.8))",
            boxShadow: "0 0 12px rgba(255,255,255,0.35)",
          }}
          animate={{
            y: [0, 520],
            x: [0, 18, -16, 12],
            rotate: [0, 40, -35, 15],
            opacity: [0, 0.92, 0.85, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Ribbons({ active }) {
  const ribbons = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: 20 + Math.random() * 60,
        delay: Math.random() * 2,
        duration: 6 + Math.random() * 2,
      })),
    []
  );

  if (!active) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {ribbons.map((r) => (
        <motion.div
          key={r.id}
          className="absolute bottom-[20%] w-[2px] origin-top rounded-full"
          style={{
            left: `${r.left}%`,
            height: 100,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(205,229,247,0.7), transparent)",
            boxShadow: "0 0 12px rgba(255,255,255,0.28)",
          }}
          animate={{
            y: [0, -140],
            x: [0, 14, -10, 8],
            rotate: [0, 8, -10, 5],
            opacity: [0, 0.75, 0.6, 0],
          }}
          transition={{
            duration: r.duration,
            repeat: Infinity,
            delay: r.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function Fireworks({ active }) {
  const bursts = useMemo(
    () => [
      { id: 1, left: "26%", top: "26%", delay: 0.2 },
      { id: 2, left: "74%", top: "30%", delay: 1.2 },
      { id: 3, left: "68%", top: "68%", delay: 2.1 },
    ],
    []
  );

  if (!active) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      {bursts.map((burst) => (
        <motion.div
          key={burst.id}
          className="absolute"
          style={{ left: burst.left, top: burst.top }}
          initial={{ scale: 0.4, opacity: 0 }}
          animate={{ scale: [0.4, 1.2, 1.55], opacity: [0, 0.55, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: burst.delay,
            ease: "easeOut",
          }}
        >
          <div className="relative h-20 w-20 sm:h-28 sm:w-28 -translate-x-1/2 -translate-y-1/2">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="absolute left-1/2 top-1/2 block origin-bottom"
                style={{
                  width: 2,
                  height: 30,
                  transform: `translate(-50%, -100%) rotate(${i * 30}deg)`,
                  background:
                    "linear-gradient(to top, rgba(255,255,255,0.95), rgba(208,231,249,0.7), transparent)",
                  borderRadius: 999,
                  boxShadow: "0 0 10px rgba(255,255,255,0.35)",
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function SealButton({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.98 }}
      className="absolute left-1/2 top-1/2 z-30 h-16 w-16 sm:h-20 sm:w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 shadow-[0_12px_40px_rgba(168,196,220,0.35)] outline-none"
      style={{
        background:
          "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.96), rgba(226,239,249,0.95) 42%, rgba(186,210,230,0.96) 72%, rgba(164,191,213,0.98) 100%)",
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0px rgba(255,255,255,0.0)",
            "0 0 22px rgba(255,255,255,0.45)",
            "0 0 8px rgba(255,255,255,0.15)",
          ],
        }}
        transition={{ duration: 2.2, repeat: Infinity }}
      />
      <div className="absolute inset-[8px] rounded-full border border-white/55 bg-white/20 backdrop-blur-sm" />
      <div className="relative z-10 flex h-full w-full items-center justify-center text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.28em] sm:tracking-[0.32em] text-slate-600">
        Open
      </div>
    </motion.button>
  );
}

export default function App() {
  const [opened, setOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-[100svh] w-full overflow-hidden bg-[#dfefff] text-slate-700">
      <FloatingBackground />

      <motion.div
        className="absolute left-1/2 top-[8%] sm:top-[11%] z-20 -translate-x-1/2 text-center px-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <p className="text-[10px] sm:text-[13px] uppercase tracking-[0.24em] sm:tracking-[0.38em] text-slate-500/80">
          A little birthday card for you
        </p>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm italic text-slate-500/75">
          Tap the seal to open
        </p>
      </motion.div>

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-3 sm:px-6">
        <div className="relative h-[78svh] max-h-[540px] w-full max-w-[860px] [perspective:1800px]">
          <Confetti active={opened} />
          <Balloons active={opened} />
          <Petals active={opened} />
          <Ribbons active={opened} />
          <Fireworks active={opened} />

          <AnimatePresence>
            {opened && (
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[58vw] w-[58vw] max-h-[360px] max-w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(217,236,250,0.55) 34%, rgba(200,225,245,0.22) 58%, rgba(255,255,255,0) 74%)",
                  filter: "blur(8px)",
                }}
              />
            )}
          </AnimatePresence>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative h-[clamp(260px,42vw,380px)] w-[min(92vw,720px)]"
              animate={opened ? { y: -6 } : { y: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 rounded-[24px] sm:rounded-[36px] border border-white/45 bg-white/30 shadow-[0_30px_80px_rgba(148,180,208,0.22)] backdrop-blur-[2px]" />
              <div className="absolute inset-[8px] sm:inset-[12px] rounded-[20px] sm:rounded-[30px] border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.5),rgba(225,238,248,0.22))]" />

              <div className="absolute inset-[16px] sm:inset-[24px] overflow-hidden rounded-[18px] sm:rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                <div className="absolute inset-0 rounded-[18px] sm:rounded-[28px] bg-[linear-gradient(135deg,rgba(244,250,255,0.98),rgba(221,236,248,0.96)_52%,rgba(200,222,239,0.96))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.75),transparent_18%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.5),transparent_12%),radial-gradient(circle_at_50%_100%,rgba(198,225,245,0.35),transparent_28%)] opacity-40" />

                <div className="absolute inset-0">
                  <motion.div
                    className="absolute left-0 top-0 h-full w-1/2 origin-left rounded-l-[18px] sm:rounded-l-[28px] border-r border-white/55"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(248,252,255,0.98), rgba(228,239,249,0.97) 52%, rgba(201,221,238,0.98))",
                      boxShadow: "inset -24px 0 40px rgba(148,180,206,0.12)",
                    }}
                    animate={opened ? { rotateY: -165 } : { rotateY: 0 }}
                    transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute inset-[10px] sm:inset-[16px] rounded-[14px] sm:rounded-[22px] border border-white/60" />
                    <div className="absolute inset-[18px] sm:inset-[28px] rounded-[12px] sm:rounded-[18px] border border-slate-200/55" />
                  </motion.div>

                  <motion.div
                    className="absolute right-0 top-0 h-full w-1/2 origin-right rounded-r-[18px] sm:rounded-r-[28px] border-l border-white/55"
                    style={{
                      background:
                        "linear-gradient(225deg, rgba(248,252,255,0.98), rgba(228,239,249,0.97) 52%, rgba(201,221,238,0.98))",
                      boxShadow: "inset 24px 0 40px rgba(148,180,206,0.12)",
                    }}
                    animate={opened ? { rotateY: 165 } : { rotateY: 0 }}
                    transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute inset-[10px] sm:inset-[16px] rounded-[14px] sm:rounded-[22px] border border-white/60" />
                    <div className="absolute inset-[18px] sm:inset-[28px] rounded-[12px] sm:rounded-[18px] border border-slate-200/55" />
                  </motion.div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center px-3">
                  <motion.div
                    initial={false}
                    animate={
                      opened
                        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
                        : { opacity: 0.04, scale: 0.96, filter: "blur(18px)" }
                    }
                    transition={{ duration: 1.1, delay: opened ? 0.55 : 0 }}
                    className="pointer-events-none relative mx-auto flex h-[clamp(150px,30vw,230px)] w-[min(78vw,420px)] flex-col items-center justify-center rounded-[18px] sm:rounded-[28px] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.82),rgba(236,246,253,0.76))] px-4 sm:px-10 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.75),0_20px_50px_rgba(161,190,214,0.14)] backdrop-blur-sm"
                  >
                    <div className="absolute inset-[8px] sm:inset-[12px] rounded-[14px] sm:rounded-[22px] border border-slate-200/55" />
                    <p className="text-[9px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.35em] text-slate-500/80">
                      Happy Birthday
                    </p>
                    <div className="my-3 sm:my-5 h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-slate-300/80 to-transparent" />
                    <p className="relative z-10 text-[13px] leading-[1.7] sm:text-[24px] md:text-[28px] text-slate-600">
                      ☀️ Chúc ngày sinh nhật của bạn bắt đầu dịu dàng,
                      <br />
                      kết thúc bằng những niềm vui nhé 🎂.
                      <br />
                    
                    </p>
                    <p className="mt-3 sm:mt-6 text-[10px] sm:text-sm italic text-slate-500/80">
                    
                    </p>
                  </motion.div>
                </div>
              </div>

              {!opened && <SealButton onClick={() => setOpened(true)} />}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-5 sm:bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.22em] text-slate-500/70 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 1 : 0 }}
        transition={{ duration: 1.4, delay: 0.6 }}
      >
        dreamy elegant • soft blue • subtle celebration
      </motion.div>
    </div>
  );
}