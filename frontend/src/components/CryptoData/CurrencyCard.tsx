import { CurrencyData } from "@/redux/slices/cryptoSlice";

export default function CurrencyCard({
  currencyData,
}: {
  currencyData: CurrencyData;
}) {
  return (
    <div className="__crypto_card p-3 rounded-xl border bg-gradient-to-br from-orange-500 to-orange-700 text-white">
      <div className="flex gap-1 text-2xl font-bold">
        <p dangerouslySetInnerHTML={{ __html: currencyData.symbol }} />
        {currencyData.rate} ({currencyData.code})
      </div>
      <p>{currencyData.description}</p>
      <div className="flex gap-1">
        Decimal Rate:{" "}
        <span dangerouslySetInnerHTML={{ __html: currencyData.symbol }} />
        <p className="font-semibold">{currencyData.rate_float}</p>
      </div>
    </div>
  );
}
