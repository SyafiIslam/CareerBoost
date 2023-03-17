export const toRupiah= (currency) => {
  return currency.toLocaleString("id-ID", {style: "currency",currency: "IDR",});
}