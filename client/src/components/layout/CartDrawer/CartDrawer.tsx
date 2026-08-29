"use client";

import { useCartStore } from "@/app/hooks/useCartStore";
import Image from "next/image";
import { fmtPrice } from "@/utils/format";
import { FaAngleRight, FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } =
    useCartStore();
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);

  const [editingId, setEditingId] = useState<string | number | null>(null);

  const toggleEdit = (id: string | number) => {
    setEditingId((prev) => (prev === id ? null : id));
  };

  const handleRemove = (id: number) => {
    if (removeFromCart) {
      removeFromCart(id);
    }
    setEditingId(null);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.72)] z-49"
        onClick={closeCart}
      ></div>
      <div className="fixed top-0 right-0 bottom-0 w-105 max-w-[92vw] z-50 flex flex-col border-l bg-king-kong border-noir">
        <div className="py-6 px-7 border-b border-noir flex items-center justify-between shrink-0">
          <h2 className="font-fraunces text-[1.125rem] font-medium flex items-baseline gap-2.5">
            Your Cart
            <span className="font-mono text-[0.7rem] text-hurricane"></span>
          </h2>
          <button
            className="bg-none border-none text-[1.5rem] cursor-pointer leading-none p-1 transition-colors duration-200 text-hurricane hover:text-milk"
            onClick={closeCart}
          >
            ×
          </button>
        </div>
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-8 py-12 gap-6">
            <p className=" font-fraunces text-[1.125rem] italic text-hurricane">
              Your cart is empty.
            </p>
            <button
              className="px-7 py-3 bg-vibrant-amber text-bg border-none font-sans font-semibold text-[0.875rem] tracking-[0.04em] cursor-pointer"
              onClick={closeCart}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {cart.map((item) => {
                const isEditing = editingId === item.product.id;
                return (
                  <div
                    key={item.product.id}
                    className="relative overflow-hidden border-b border-noir"
                  >
                    <div
                      className={` relative z-10 px-7 py-5 flex gap-4 transition-transform duration-300 ease-in-out bg-king-kong ${
                        isEditing ? "-translate-x-20" : "translate-x-0"
                      }`}
                    >
                      <div className="w-17 h-17 shrink-0 overflow-hidden bg-bg">
                        <Image
                          src={item.product.image}
                          alt={item.product.title}
                          className="object-cover brightness-[0.85]"
                          width={68}
                          height={68}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex justify-between">
                          <p className=" font-fraunces text-[0.9375rem] font-medium mb-0.5 truncate">
                            {item.product.title}
                          </p>
                          <button
                            className="flex items-center cursor-pointer"
                            onClick={() => toggleEdit(item.product.id)}
                          >
                            <FaAngleRight
                              className={`transition-transform duration-300 ${
                                isEditing ? "rotate-180" : ""
                              }`}
                            />
                            {isEditing ? "done" : "edit"}
                          </button>
                        </div>
                        <p className="font-sans text-[0.75rem] mb-3 text-hurricane">
                          {item.product.artist}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-noir">
                            <button
                              className="w-7 h-7 bg-none border-none text-milk cursor-pointer text-[1rem] flex items-center justify-center"
                              onClick={() =>
                                updateQuantity(item.product.id, -1)
                              }
                            >
                              -
                            </button>
                            <span className="font-mono text-[0.75rem] py-0 px-3 text-milk border-solid border-l border-noir">
                              {item.quantity}
                            </span>
                            <button
                              className="w-7 h-7 bg-none border-none text-milk cursor-pointer text-[1rem] flex items-center justify-center"
                              onClick={() => updateQuantity(item.product.id, 1)}
                            >
                              +
                            </button>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-mono text-[0.875rem] text-milk">
                              {fmtPrice(item.product.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className="absolute top-0 right-0 bottom-0 w-20 bg-red-600 text-white flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-red-700 transition-colors z-0"
                      onClick={() => handleRemove(item.product.id)}
                    >
                      <FaTrashAlt size={16} />
                      <span className="text-[0.75rem] font-medium">Delete</span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="p-7 border-t border-solid border-noir shrink-0">
              <div className="flex justify-between items-center mb-6">
                <span className="font-sans text-[0.875rem] text-hurricane">
                  Subtotal
                </span>
                <span className="font-mono text-[1.25rem] text-milk">
                  {fmtPrice(getTotalPrice())}
                </span>
              </div>
              <button className="w-full p-4.25 bg-vibrant-amber text-bg border-none font-sans font-bold text-[0.9375rem] cursor-pointer tracking-wider transition-colors duration-200 uppercase hover:bg-yakitori">
                Proceed to Checkout
              </button>
              <p className="font-sans text-[0.75rem] text-center mt-3.5 text-whiskey-and-wine">
                Free shipping on orders over $200
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
