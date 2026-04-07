interface RKLogoProps {
  iconSize?: number
  showWordmark?: boolean
}

export default function RKLogo({ iconSize = 38, showWordmark = true }: RKLogoProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="10" y="10" width="160" height="160" rx="40" fill="#7858A6" fillOpacity="0.18" />
        <rect x="20" y="20" width="140" height="140" rx="34" fill="#4C3575" stroke="#7858A6" strokeWidth="4" />
        <path
          d="M56 46V134"
          stroke="#FFF7DD"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M56 50H92C107.464 50 120 62.536 120 78C120 93.464 107.464 106 92 106H56"
          stroke="#FFF7DD"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M88 102L120 134"
          stroke="#FFF7DD"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M126 46V134"
          stroke="#7858A6"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M126 90L92 56"
          stroke="#7858A6"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M126 90L92 124"
          stroke="#7858A6"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showWordmark ? (
        <span
          style={{
            fontFamily: "var(--font-syne, Syne, sans-serif)",
            fontSize: "20px",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--foreground)",
            lineHeight: 1,
          }}
        >
          RK
        </span>
      ) : null}
    </span>
  )
}
