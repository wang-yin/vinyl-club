import { Product } from "@/app/types/product";
import Image from "next/image";
import { fmtPrice } from "@/utils/format";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex flex-col transition-colors duration-200 bg-king-kong border border-noir hover:bg-twilight-zone">
      {/* 標籤 */}
      {product.badge && (
        <span className=" absolute top-3 left-3 z-2 font-mono text-[0.6rem] uppercase py-1 px-2.5 text-bg font-medium bg-vibrant-amber tracking-widest">
          {product.badge}
        </span>
      )}

      {/* 圖片區 */}
      <div className="aspect-square overflow-hidden bg-bg relative w-full">
        <Image
          src={product.image}
          alt={`${product.title} by ${product.artist}`}
          className="w-100 h-100 object-cover transition-transform duration-500 ease-out scale-100 group-hover:scale-105 brightness-[0.82]"
          fill
        ></Image>
      </div>

      {/* 資訊內容區塊 */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <div className="flex justify-between items-start gap-2">
          <span
            className={`font-mono text-[0.625rem] tracking-widest uppercase shrink-0 ${product.category === "vinyl" ? "text-vibrant-amber" : "text-hurricane"}`}
          >
            {product.category === "vinyl"
              ? `Vinyl · ${product.year}`
              : product.label}
          </span>
          <span className="font-mono text-[0.8125rem] tracking-[0.02em] text-milk">
            {fmtPrice(product.price)}
          </span>
        </div>
        <div>
          <h3 className="text-[1.0625rem] font-medium mb-0.5 leading-[1.2] font-fraunces">
            {product.title}
          </h3>
          <p className="font-sans text-[0.8125rem] text-hurricane">
            {product.artist}
          </p>
        </div>
        <button className="flex items-center gap-2 mt-3 pt-3 bg-transparent font-sans text-[0.8125rem] font-medium tracking-[0.04em] border-t border-t-noir cursor-pointer text-left transition-colors duration-200 group-hover:text-vibrant-amber text-hurricane">
          <span>+</span>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
