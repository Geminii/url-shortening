import BaseButton from "./BaseButton";

export default function UrlShortener() {
  return (
    <div className="url-shortener">
      <input 
        className="grow bg-white rounded-lg text-gray p-4 w-full"
        type="text"
        placeholder="Shorten a link here..." 
      />

      <BaseButton value="Shorten It!" styleName="w-full md:w-auto md:shrink-0" theme="secondary" />
    </div>
  );
}
