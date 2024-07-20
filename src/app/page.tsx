import Image from "next/image";

export default function Home() {
  let response = 'hello';
  return <>
    <div className="flex flex-col p-2 gap-2 border-r-2 border-r-slate-50">
      <label htmlFor="promp">Recipe that you want or ingredients</label>
      <textarea id="promp" className="p-2 resize-none fs-content"></textarea>
    </div>
    <div className="p-2">
      {response}
    </div>
    {/* <div>
      <Image
        src="/images/ia-recipe-book.jpg"
        alt="IA Recipe Book"
        width={1920}
        height={1080}
      />
    </div> */}
  </>;
}
