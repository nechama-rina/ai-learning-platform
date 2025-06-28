

import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { getCategories } from '../../API/CategoryAPI';
import { getSubCategoriesByCategoryId } from '../../API/SubCategoryAPI';
import './CategoryForm.css';

const CategoryForm = ({ onSubmit = () => {} }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [topic, setTopic] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error('Error loading categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = async (e) => {
    const categoryId = e.value;
    setSelectedCategory(categoryId);
    setSelectedSubCategory(null);
    try {
      const response = await getSubCategoriesByCategoryId(categoryId);
      setSubCategories(response.data);
    } catch (error) {
      console.error('Error loading subcategories:', error);
    }
  };

  const handleSubmit = () => {
    if (!selectedCategory || !selectedSubCategory) {
      alert('Please select a category and subcategory');
      return;
    }
    if (!topic.trim()) {
      alert('Please enter a prompt topic');
      return;
    }
    onSubmit({ categoryId: selectedCategory, subCategoryId: selectedSubCategory, prompt: topic });
  };

  return (
    <div className="category-form-container">
      <Card title="Choose a learning topic" className="category-form-card">
        <div className="p-fluid">
          <div className="field mb-3">
            <label htmlFor="category">Category</label>
            <Dropdown
              inputId="category"
              value={selectedCategory}
              options={categories.map(c => ({ label: c.name, value: c.id }))}
              onChange={handleCategoryChange}
              placeholder="Select a category"
              className="category-dropdown"
            />
          </div>

          {subCategories.length > 0 && (
            <div className="field mb-3">
              <label htmlFor="subcategory">Subcategory</label>
              <Dropdown
                inputId="subcategory"
                value={selectedSubCategory}
                options={subCategories.map(sc => ({ label: sc.name, value: sc.id }))}
                onChange={(e) => setSelectedSubCategory(e.value)}
                placeholder="Select a subcategory"
                className="category-dropdown"
              />
            </div>
          )}

          {}
          <div className="field mb-3">
            <label htmlFor="topic">Prompt Topic</label>
            <InputText
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Example: History of the Six-Day War"
              className="topic-input"
            />
          </div>

          <Button
            label="Get Lesson"
            icon="pi pi-send"
            onClick={handleSubmit}
            disabled={!selectedCategory || !selectedSubCategory || !topic.trim()}
            className="submit-button"
          />
        </div>
      </Card>
    </div>
  );
};

export default CategoryForm;
