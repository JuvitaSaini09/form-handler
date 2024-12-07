import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
export default function CreateForm() {
  return (
    <main className="w-[640px] mx-auto h-screen flex flex-col overflow-hidden">
      <Header />
      <Form />
      <Footer />
    </main>
  );
}
