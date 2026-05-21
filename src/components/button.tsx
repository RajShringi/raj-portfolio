export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-yellow-500 p-6">
      <div
        style={{
          backgroundImage:
            "repeating-linear-gradient(119deg,color-mix(in srgb,var(--foreground) 20%,transparent) 0px,color-mix(in srgb,var(--foreground) 20%,transparent) 1px,transparent 1px,transparent 5px)",
          isolation: "isolate",
        }}
      >
        {children}
      </div>
    </div>
  );
}
