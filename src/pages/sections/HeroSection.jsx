import { Button } from "@/components/ui/button";

export const HeroSection = ({ scrollToContact }) => (
  <div className="relative h-[70vh] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="absolute inset-0 flex items-center justify-start container mx-auto px-4">
      <div className="max-w-2xl text-white">
        <h1 className="text-5xl font-bold mb-4">じぶん史上、最高の年へ</h1>
        <p className="text-xl mb-6">業界最安値の費用</p>
        <Button size="lg" className="mr-4 bg-black text-white" onClick={scrollToContact}>無料相談を予約</Button>
      </div>
    </div>
  </div>
);

export default HeroSection;