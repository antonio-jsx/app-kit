import Link from "next/link";
import { SignIn } from "@/components/auth/sign-in";

export default function Login() {
  return (
    <section className="w-full md:max-w-xs">
      <p>Bienvenido de nuevo</p>
      <h1 className="mb-4 font-bold text-2xl">Accede a tu cuenta</h1>

      <SignIn />

      <p className="mt-4 text-center">
        ¿Aún no tienes cuenta?{" "}
        <Link className="font-bold" href="/registro">
          Regístrate
        </Link>
      </p>
    </section>
  );
}
