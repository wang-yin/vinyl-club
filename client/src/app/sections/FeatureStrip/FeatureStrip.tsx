export default function FeatureStrip() {
  const features = [
    {
      num: "01",
      title: "Audiophile Pressing",
      body: "Every vinyl is sourced from original pressings or verified audiophile reissues. No low-fidelity reproductions — ever.",
    },
    {
      num: "02",
      title: "Expert Curation",
      body: "Our team of engineers and collectors handpick every turntable and amplifier. We only stock hardware we would own ourselves.",
    },
    {
      num: "03",
      title: "White-Glove Delivery",
      body: "Records ship flat in reinforced mailers. Hardware arrives double-boxed with anti-static protection and full insurance.",
    },
  ];

  return (
    <section className="border-t border-b border-noir">
      <div className="max-w-7xl mx-auto grid grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.num}
            className={`py-16 px-10 ${i < 2 ? "border-r border-noir" : "none"}`}
          >
            <p className="font-mono text-[0.65rem] mb-7 tracking-[0.25em] text-vibrant-amber">
              {f.num}
            </p>
            <h3 className="font-fraunces text-[1.375rem] font-medium mb-3.5 tracking-tight text-milk">
              {f.title}
            </h3>
            <p className="font-sans text-[0.875rem] leading-[1.75] text-hurricane">
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
