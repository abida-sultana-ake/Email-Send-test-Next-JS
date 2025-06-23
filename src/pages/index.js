import EmailForm from "@/component/EmailForm";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-6">Gmail Test Sender</h1>
      <EmailForm />
    </div>
  );
}
