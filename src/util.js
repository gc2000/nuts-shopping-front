export default function formatCurrency(num){
  return "S$" + Number(num.toFixed(1)).toLocaleString() + " ";
}