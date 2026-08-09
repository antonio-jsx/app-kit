import Link from "next/link";
import { SignUp } from "@/components/auth/sign-up";

export default function Registro() {
  return (
    <section className="w-full md:max-w-xs">
      <h1 className="mb-4 font-bold text-2xl">Crea tu cuenta</h1>

      <SignUp />

      <p className="mt-4 text-center">
        ¿Ya tienes cuenta?{" "}
        <Link className="font-bold" href="/login">
          Accede
        </Link>
      </p>
    </section>
  );
}
