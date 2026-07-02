import RegisterForm from "../components/register-form";

export default function RegisterPage() {
  return (
    <div className="gap-8 min-h-screen flex justify-center items-center flex-col">
      <div className="flex flex-col items-center">
        <img src="" className="w-5 h-5" alt="Basketball_icon"></img>
        <h1 className="text-[48px] font-bold text-white">Basketball Ranking</h1>
        <p className="text-gray-300 text-[15px] font-bold">Basketball Ranking</p>
      </div>
      {/* Registration form elements */}
      <div>
        <RegisterForm />
      </div>
    </div>
    // <div className="bg-red-500 p-10">
    //   <div>One</div>
    //   <div>Two</div>
    //   <div>Three</div>
    // </div>
  );
}
