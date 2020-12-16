import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "./ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const userImageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...userImageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      userImageUris.filter((userImageUri) => userImageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        userImageUris={userImageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
