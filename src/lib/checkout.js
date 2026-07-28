// Edite estes links com as URLs reais do seu checkout.
// Enquanto estiverem vazias, o botão rola suavemente até a seção de planos.
export const CHECKOUT_LINKS = {
  mensal: "https://recargascarudo.pay.yampi.com.br/r/W8J63EVI5O",
  trimestral: "https://recargascarudo.pay.yampi.com.br/r/BAHEYFV2DF",
  anual: "https://recargascarudo.pay.yampi.com.br/r/91IZI3VYCO",
};

export function handleBuy(planId) {
  const url = CHECKOUT_LINKS[planId];
  if (url && /^https?:\/\//.test(url)) {
    window.location.href = url;
    return;
  }
  const el = document.getElementById("planos");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}