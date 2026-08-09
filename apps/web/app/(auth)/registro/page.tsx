import Link from "next/link";
import { SignUp } from "@/components/auth/sign-up";

export default function Registro() {
  return (
    <section className="md:max-w-xs w-full">
      <h1 className="mb-4 text-2xl font-bold">Crea tu cuenta</h1>

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
