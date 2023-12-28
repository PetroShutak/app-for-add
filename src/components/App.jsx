import FormAddProduct from "./FormAddProduct/FormAddProduct";

export const App = () => {
  return (
    <div style={{
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}>
      <FormAddProduct />
    </div>
  );
};
