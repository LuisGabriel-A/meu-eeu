import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    removeFromCart,
    updateQuantity,
    subtotal,
    clearCart
  } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 250;
  const missingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'FINEART10') {
      setDiscount(subtotal * 0.10);
      setCouponApplied(true);
    } else {
      alert('Cupom inválido. Tente usar "FINEART10" para 10% de desconto.');
    }
  };

  const finalTotal = Math.max(0, subtotal - discount);

  const handleCheckoutWhatsApp = () => {
    let message = ` Olá Maria (@meu.eeu)! Gostaria de finalizar o seguinte pedido pelo site:\n\n`;

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   • Tamanho/Material: ${item.sizeName || item.sizeId} (${item.material})\n`;
      message += `   • Qtd: ${item.quantity}x | Valor: R$ ${(item.unitPrice * item.quantity).toFixed(2)}\n`;
      if (item.isCommission) {
        message += `   • Tipo: Encomenda Personalizada (${item.commissionType})\n`;
      }
      message += `\n`;
    });

    message += `*Subtotal:* R$ ${subtotal.toFixed(2)}\n`;
    if (discount > 0) {
      message += `*Desconto (10%):* -R$ ${discount.toFixed(2)}\n`;
    }
    message += `*Total Final:* R$ ${finalTotal.toFixed(2)}\n\n`;
    message += `Por favor, me informe as opções de pagamento (Pix / Cartão) e prazo de envio. Obrigado!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5551999999999?text=${encoded}`, '_blank');
    setCheckoutSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] border-l border-[#E2DDD8] shadow-2xl flex flex-col justify-between">

          {/* Header */}
          <div className="p-6 border-b border-[#EAE6E1] flex items-center justify-between bg-white">
            <div>
              <h2 className="font-serif text-2xl font-light text-[#1A1A1A]">Sua Sacola de Arte</h2>
              <p className="text-[11px] uppercase tracking-wider text-stone-600 mt-0.5">
                {cartItems.length} {cartItems.length === 1 ? 'item selecionado' : 'itens selecionados'}
              </p>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-stone-500 hover:text-black rounded-full hover:bg-stone-100 transition-colors"
              aria-label="Fechar carrinho"
            >
              <X size={20} />
            </button>
          </div>

          {/* Free shipping banner */}
          <div className="bg-[#F3EFEA] px-6 py-3 border-b border-[#EAE6E1]">
            <div className="flex items-center justify-between text-xs text-stone-700 font-medium mb-1.5">
              <span>{missingForFreeShipping === 0 ? '✨ Você ganhou Frete Grátis!' : `Faltam R$ ${missingForFreeShipping.toFixed(2)} para Frete Grátis`}</span>
              <span>{shippingPercent.toFixed(0)}%</span>
            </div>
            <div className="w-full bg-stone-300 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-[#1A1A1A] h-full rounded-full transition-all duration-500"
                style={{ width: `${shippingPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-5">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#F3EFEA] flex items-center justify-center text-stone-400">
                  <Sparkles size={28} />
                </div>
                <h3 className="font-serif text-xl text-stone-800 font-light">Sua sacola está vazia</h3>
                <p className="text-xs text-stone-500 max-w-xs mx-auto">
                  Explore os prints fine art e pinturas originais na galeria e leve um pedaço de arte para o seu espaço.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 inline-block bg-[#1A1A1A] text-white text-xs uppercase tracking-widest px-6 py-3 rounded-none hover:bg-stone-800 transition-colors font-medium"
                >
                  Explorar Obras
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={`${item.artworkId}-${item.sizeId}-${index}`} className="flex gap-4 pb-5 border-b border-[#EAE6E1] group">
                  <div className="w-20 h-24 bg-[#EAE6E1] overflow-hidden flex-shrink-0 border border-stone-200">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-serif text-base font-normal text-stone-900 leading-snug">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(index)}
                          className="text-stone-400 hover:text-red-600 transition-colors p-1"
                          title="Remover"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>

                      <p className="text-[11px] text-[#6B4E8C] font-medium mt-0.5">
                        {item.sizeName || item.sizeId} • {item.material}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#D5CBC0] bg-white">
                        <button
                          onClick={() => updateQuantity(index, -1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2.5 text-xs font-medium text-stone-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(index, 1)}
                          className="px-2 py-1 text-stone-600 hover:bg-stone-100 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="font-medium text-sm text-stone-900">
                        R$ {(item.unitPrice * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with totals and checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EAE6E1] space-y-4">
              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Cupom de desconto (ex: FINEART10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 bg-[#FAF8F5] border border-[#D5CBC0] px-3 py-2 text-xs uppercase tracking-wider outline-none focus:border-black"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-stone-200 hover:bg-stone-300 text-stone-800 text-xs uppercase tracking-wider transition-colors font-medium"
                >
                  Aplicar
                </button>
              </form>

              {couponApplied && (
                <div className="flex justify-between items-center text-xs text-emerald-700 font-medium bg-emerald-50 p-2 rounded">
                  <span>Desconto cupom FINEART10 (10%)</span>
                  <span>- R$ {discount.toFixed(2)}</span>
                </div>
              )}

              {/* Subtotals */}
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">R$ {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Envio</span>
                  <span className="font-medium text-stone-900">
                    {missingForFreeShipping === 0 ? (
                      <span className="text-emerald-700 font-bold uppercase tracking-wider text-[11px]">Grátis</span>
                    ) : (
                      'Calculado no checkout'
                    )}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-stone-200 text-sm font-semibold text-stone-900">
                  <span className="font-serif text-base">Total Previsto</span>
                  <span className="text-base text-[#1A1A1A]">R$ {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full bg-[#1A1A1A] hover:bg-[#2D2D2D] text-white py-3.5 px-4 flex items-center justify-center gap-2 text-xs uppercase tracking-[0.18em] font-medium transition-all shadow-md group"
                >
                  <MessageSquare size={16} />
                  <span>Finalizar via WhatsApp / Pix</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[10px] text-center text-stone-600 flex items-center justify-center gap-1.5 pt-1">
                  <ShieldCheck size={13} className="text-emerald-600" />
                  <span>Embalagem rígida protegida & Certificado assinado</span>
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
