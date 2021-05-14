import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  password: string;
}

export const Forms = () => {
  const { form, onChange } = useForm<FormData>({
    email: "",
    password: "",
  });

  return (
    <>
      <h3>Formularios</h3>

      <input
        type="text"
        name=""
        id=""
        className="form-control mb-2"
        placeholder="Email"
        value={form.email}
        onChange={({ target }) => {
          onChange(target.value, "email");
        }}
      />
      <input
        type="password"
        name=""
        id=""
        className="form-control mb-2"
        placeholder="Password"
        value={form.password}
        onChange={({ target }) => {
          onChange(target.value, "password");
        }}
      />

      <code>
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </code>
    </>
  );
};
