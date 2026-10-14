import { useState } from "react";

const rules = {
  name: (v) => (v.trim() ? "" : "Enter your name."),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address."),
  message: (v) => (v.trim().length >= 10 ? "" : "Write at least 10 characters."),
};

// Demo only: validation runs in the browser and nothing is sent.
// To deliver messages, connect a form service or backend and validate again on the server.
export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ ok: false, text: "" });

  const validate = (field) => {
    const msg = rules[field](values[field]);
    setErrors((e) => ({ ...e, [field]: msg }));
    return !msg;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const ok = Object.keys(rules).map(validate).every(Boolean);
    setStatus({ ok, text: ok ? "Looks good. Connect a form service to deliver messages." : "Fix the highlighted fields and try again." });
  };

  const field = (id, label, Tag = "input", extra = {}) => (
    <label>
      {label}
      <Tag id={id} name={id} value={values[id]} aria-invalid={!!errors[id]} {...extra}
        onChange={(e) => setValues({ ...values, [id]: e.target.value })} onBlur={() => validate(id)} />
      <span className="err">{errors[id]}</span>
    </label>
  );

  return (
    <form onSubmit={onSubmit} noValidate>
      {field("name", "Name", "input", { autoComplete: "name" })}
      {field("email", "Email", "input", { type: "email", autoComplete: "email" })}
      {field("message", "Message", "textarea")}
      <button className="btn btn-primary" type="submit">Send message</button>
      <p className={"status-msg" + (status.ok ? " ok" : "")} role="status">{status.text}</p>
    </form>
  );
}
