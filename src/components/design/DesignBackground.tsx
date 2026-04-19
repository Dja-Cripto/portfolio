// DesignBackground: Provides the persistent warm editorial atmosphere for the Design mode.
// The hero itself handles its own gradient overlay, this handles the rest of the page.
export default function DesignBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Base warm off-white */}
      <div className="absolute inset-0 bg-[#fdfaf7]" />
      {/* Large ambient blobs for sub-sections */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-30 blur-[150px]"
        style={{ background: 'radial-gradient(circle, #fcd5b4 0%, #f9a8d4 60%, transparent 80%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full opacity-25 blur-[150px]"
        style={{ background: 'radial-gradient(circle, #ddd6fe 0%, #c7d2fe 60%, transparent 80%)' }}
      />
      {/* Subtle dot grid for editorial texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: 'radial-gradient(circle, #c9b8b0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  );
}
