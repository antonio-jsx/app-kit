import { Field, FieldError, FieldLabel } from "@ui/components/field";
import { cn } from "@ui/lib/utils";
import {
  type Control,
  Controller,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

type FieldWithId<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = ControllerRenderProps<TFieldValues, TName> & {
  id: string;
};

interface FieldProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> {
  className?: string;
  control: Control<TFieldValues>;
  label?: string;
  name: TName;
  render: (field: FieldWithId<TFieldValues, TName>) => React.ReactNode;
}

export function FormField<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  label,
  render,
  className,
}: FieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field className={cn(className)} data-invalid={fieldState.invalid}>
          {label && <FieldLabel htmlFor={field.name}>{label}</FieldLabel>}

          {render({
            ...field,
            id: field.name,
          })}

          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
}
