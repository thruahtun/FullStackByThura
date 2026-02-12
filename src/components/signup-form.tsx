import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Eye, EyeOffIcon } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import React from "react";


const formSchema = z.object({
  password: z
    .string()
    .min(8, "Password must be 8 digits long!")
    .max(8, "Password must be 8 digits long!")
    .regex(/^\d+$/, "Phone number is invalid"),
  confirmPassword: z
    .string()
    .min(8, "Confirm Password must be 8 digits long!")
    .max(8, "Confirm Password must be 8 digits short!")
    .regex(/^\d+$/, "Phone number is invalid"),
});

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {


  const [isPasswordVisible, setIsPasswordVisible] =
    React.useState<boolean>(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    React.useState<boolean>(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          password: "",
          confirmPassword: "",
        },
      });
    
      function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data);
      }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Confirm Password</CardTitle>
          <CardDescription>
            The Password must match exactly and must be 8 digits long.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form id="sign-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-input-username">
                      Password
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="form-rhf-input-username"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                        type={isPasswordVisible ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputGroupAddon
                        align="inline-end"
                        onClick={() => setIsPasswordVisible((prev) => !prev)}
                      >
                        {isPasswordVisible ? (
                          <EyeOffIcon className="cursor-pointer" />
                        ) : (
                          <Eye className="cursor-pointer" />
                        )}
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="confirmPassword"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="form-rhf-input-username">
                      Confirm Password
                    </FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        {...field}
                        id="form-rhf-input-username"
                        aria-invalid={fieldState.invalid}
                        autoComplete="off"
                        type={isConfirmPasswordVisible ? "text" : "password"}
                        placeholder="Enter password"
                      />
                      <InputGroupAddon
                        align="inline-end"
                        onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
                      >
                        {isConfirmPasswordVisible ? (
                          <EyeOffIcon className="cursor-pointer" />
                        ) : (
                          <Eye className="cursor-pointer" />
                        )}
                      </InputGroupAddon>
                    </InputGroup>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field>
                <Button type="submit">Submit</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
