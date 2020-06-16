import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default function MenuForm({ addMenu }) {
  const [menu, setMenu] = useState("");

  function handleSubmit(e) {
    //e.preventDefault()
    addMenu(menu);
    setMenu("");
  }
  function handleChange(e) {
    setMenu(e.target.value);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label={"Menu Name"}
        placeholder={"enter menu name"}
        required
        value={menu}
        onChange={handleChange}
      />
      <Form.Button>add</Form.Button>
    </Form>
  );
}