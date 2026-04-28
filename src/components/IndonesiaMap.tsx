export default function IndonesiaMap() {
  return (
    <svg viewBox="0 0 1000 320" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      {/* === Sumatra === */}
      <path d="M 55,60 C 80,30 135,28 162,52 C 188,72 205,115 198,160 C 192,198 170,228 142,238 C 112,248 78,232 58,205 C 33,172 30,138 36,100 C 42,75 45,68 55,60 Z"
        fill="rgba(148,163,184,0.35)" stroke="rgba(148,163,184,0.5)" strokeWidth="1" />

      {/* === Java === */}
      <path d="M 195,238 C 225,232 272,230 325,234 C 368,238 398,244 415,250 C 398,260 355,262 308,260 C 258,258 215,252 195,248 Z"
        fill="rgba(148,163,184,0.35)" stroke="rgba(148,163,184,0.5)" strokeWidth="1" />

      {/* === Bali + Lombok + Sumbawa + Flores + Timor (small islands) === */}
      <ellipse cx="428" cy="254" rx="13" ry="9" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="448" cy="257" rx="10" ry="8" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="466" cy="259" rx="13" ry="8" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="492" cy="262" rx="18" ry="9" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="520" cy="266" rx="14" ry="8" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="555" cy="270" rx="20" ry="9" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="592" cy="272" rx="22" ry="9" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="632" cy="274" rx="18" ry="9" fill="rgba(148,163,184,0.35)" />

      {/* === Kalimantan === */}
      <path d="M 258,38 C 300,16 385,18 438,48 C 472,68 492,105 488,150 C 483,190 460,220 430,232 C 398,245 358,245 318,234 C 278,222 252,194 238,162 C 224,130 225,92 240,65 C 248,50 255,42 258,38 Z"
        fill="rgba(148,163,184,0.35)" stroke="rgba(148,163,184,0.5)" strokeWidth="1" />

      {/* === Sulawesi - HIGHLIGHTED (K/orchid shape) === */}
      <path d="M 548,108
        C 555,92 570,78 582,72
        C 596,68 608,76 606,92
        C 603,108 585,118 568,124
        C 584,130 614,142 638,160
        C 650,170 646,184 632,188
        C 616,192 596,178 578,166
        C 585,178 600,202 605,224
        C 610,242 602,256 588,258
        C 572,260 558,248 554,232
        C 548,248 538,263 524,265
        C 510,267 499,255 500,240
        C 501,225 512,212 524,206
        C 516,198 509,182 510,165
        C 511,148 520,133 532,124
        C 526,115 520,102 524,88
        C 528,74 542,68 554,74
        C 548,88 548,100 548,108 Z"
        fill="#ff8a00" stroke="#e07000" strokeWidth="1.5" opacity="0.92" />

      {/* Sulawesi pulsing dot (Gorontalo) */}
      <circle cx="548" cy="148" r="18" fill="#ff8a00" opacity="0.15" />
      <circle cx="548" cy="148" r="10" fill="#ff8a00" opacity="0.3" />
      <circle cx="548" cy="148" r="5" fill="#ffffff" opacity="0.9" />

      {/* === Maluku islands === */}
      <ellipse cx="685" cy="168" rx="10" ry="18" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="702" cy="152" rx="7" ry="14" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="718" cy="192" rx="9" ry="12" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="700" cy="218" rx="11" ry="9" fill="rgba(148,163,184,0.35)" />
      <ellipse cx="720" cy="165" rx="7" ry="12" fill="rgba(148,163,184,0.35)" />

      {/* === Papua === */}
      <path d="M 748,95 C 790,78 858,82 908,110 C 942,130 958,162 952,198 C 946,228 924,250 888,256 C 856,262 818,252 784,234 C 750,216 730,188 728,158 C 726,128 735,108 748,95 Z"
        fill="rgba(148,163,184,0.35)" stroke="rgba(148,163,184,0.5)" strokeWidth="1" />

      {/* Sulawesi Label */}
      <text x="620" y="105" fontSize="11" fontWeight="700" fill="#ff8a00" fontFamily="sans-serif" letterSpacing="1">SULAWESI</text>
      <line x1="610" y1="108" x2="575" y2="130" stroke="#ff8a00" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.7" />
    </svg>
  );
}
