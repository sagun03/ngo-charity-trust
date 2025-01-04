import MiainSection from "@/components/MainSection";

export default function Home() {

  return (
    <>
    <MiainSection />
    <div className="container mx-auto w-96">
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="w-1/3">
          <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nib 
          </p>
        </div>
        <div className="w-1/3">
          <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nib 
          </p>
        </div>
        <div className="w-1/3">
          <h2 className="text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
            Nulla quis sem at nib 
          </p>
        </div>
      </div>
      </div>
    </>
  )
}
