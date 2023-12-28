import React, { useEffect } from 'react';
import {
  FormContainer,
  Form,
  FormTitle,
  FormLabel,
  FormInput,
  FormButton,
  FormInputDescription,
} from './FormAddProduct.styled';
import { getProducts, createProduct } from 'fetch/post';


const FormAddProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [formData, setFormData] = React.useState({
    name: '',
    brand: '',
    model: '',
    category: '',
    subcategory: '',
    price: '',
    description: '',
    raiting: '',
    country: '',
    photo: '',
  });

  useEffect(() => {
    getProducts().then(data => {
      setProducts(data);
    });
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    createProduct(formData).then(data => {
      setProducts(prev => [...prev, data]);
    });
    alert('Продукт додано!');
  };

  return (
    <div>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Додати продукт</FormTitle>
          <FormLabel>Назва продукту</FormLabel>
          <FormInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <FormLabel>Бренд</FormLabel>
          <FormInput
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required
          />
          <FormLabel>Модель</FormLabel>
          <FormInput
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
          <FormLabel>Категорія</FormLabel>
          <FormInput
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
          <FormLabel>Підкатегорія</FormLabel>
          <FormInput
            type="text"
            name="subcategory"
            value={formData.subcategory}
            onChange={handleChange}
            required
          />
          <FormLabel>Ціна</FormLabel>
          <FormInput
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            placeholder="грн"
          />
          <FormLabel>Опис</FormLabel>
          <FormInputDescription
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <FormLabel>Рейтинг</FormLabel>
          <FormInput
            type="number"
            name="raiting"
            value={formData.raiting}
            onChange={handleChange}
            required
            placeholder="1-5"
          />
          <FormLabel>Країна-виробник</FormLabel>
          <FormInput
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
          <FormLabel>Фотографія</FormLabel>
          <FormInput
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="URL до зображення"
          />
          <FormButton type="submit">Відправити в базу</FormButton>
        </Form>
      </FormContainer>
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormAddProduct;
