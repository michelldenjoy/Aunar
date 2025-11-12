import { VillaProvider } from "../Context/VillaContext";
import HeaderVilla from "../components/Villas/HeaderVilla";
import VillasRoutes from "../Routes/VillasRoutes";
import NavBar from "../components/NavBar";

export default function VillasPage() {
  const handleBack = () => window.history.back();

  return (
    <VillaProvider>
      <div className="min-h-screen bg-white">
        <HeaderVilla onBack={handleBack} />
        <main className="max-w-6xl mx-auto px-6 py-10">
          <VillasRoutes />
        </main>
      </div>
    </VillaProvider>
  );
}
