"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui/components/button";
import { Input } from "@ui/components/input";
import authClient from "auth/client";
import { useForm } from "react-hook-form";
import { FormField } from "../form-field";
import { registerSchema } from "./types";

export function SignUp() {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: "", password: "", fullName: "", passwordRepeat: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    const { error } = await authClient.signUp.email({
      name: data.fullName,
      email: data.email,
      password: data.password,
      callbackURL: "/dashboard",
    });

    if (error) {
      setError("root", { type: "server", message: error.message });
      return;
    }
  });

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <FormField
        control={control}
        label="Nombre completo"
        name="fullName"
        render={(field) => <Input {...field} />}
      />

      <FormField
        control={control}
        label="Correo"
        name="email"
        render={(field) => <Input type="email" {...field} />}
      />

      <FormField
        control={control}
        label="Contraseña"
        name="password"
        render={(field) => <Input placeholder="••••••••" type="password" {...field} />}
      />

      <FormField
        control={control}
        label="Repetir contraseña"
        name="passwordRepeat"
        render={(field) => <Input placeholder="••••••••" type="password" {...field} />}
      />

      {errors.root && <p className="text-red-500 text-sm">{errors.root.message}</p>}

      <Button disabled={isSubmitting} type="submit">
        Crear cuenta
      </Button>
    </form>
  );
}
