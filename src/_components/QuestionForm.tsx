/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useRef } from 'react';
import {
  Plus, FileText, Type, Image as ImageIcon,
  ListOrdered, Upload, Grid3X3, Calendar,
  Clock, Trash2, Grid
} from 'lucide-react';
import { Card, CardContent } from '~/components/ui/card';

type QuestionType = 'short' | 'paragraph' | 'multiple' | 'checkbox' | 'dropdown' |
  'file' | 'linear' | 'grid' | 'date' | 'time';

interface Question {
  id: string;
  title: string;
  type: QuestionType;
  options: string[];
  image?: string;
}

const QuestionForm = () => {
  const [title, setTitle] = useState('Untitled Form');
  const [description, setDescription] = useState('Form Description');
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: '1',
      title: 'Untitled Question',
      type: 'multiple',
      options: ['Option 1']
    }
  ]);
  const [selectedQuestionIdForImage, setSelectedQuestionIdForImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // The list of buttons in the sidebar along with their icons and labels.
  const questionTypes = [
    { icon: Plus, label: 'Add question' },
    { icon: FileText, label: 'Short answer' },
    { icon: Type, label: 'Paragraph' },
    { icon: Grid, label: 'Multiple choice' },
    { icon: ListOrdered, label: 'Checkboxes' },
    { icon: Grid3X3, label: 'Dropdown' },
    { icon: Upload, label: 'File upload' },
    { icon: ListOrdered, label: 'Linear scale' },
    { icon: Grid3X3, label: 'Multiple choice grid' },
    { icon: Grid3X3, label: 'Checkbox grid' },
    { icon: Calendar, label: 'Date' },
    { icon: Clock, label: 'Time' }
  ];

  // Map sidebar labels to question types.
  const typeMapping: Record<string, QuestionType> = {
    'Short answer': 'short',
    'Paragraph': 'paragraph',
    'Multiple choice': 'multiple',
    'Checkboxes': 'checkbox',
    'Dropdown': 'dropdown',
    'File upload': 'file',
    'Linear scale': 'linear',
    'Multiple choice grid': 'grid',
    'Checkbox grid': 'grid',
    'Date': 'date',
    'Time': 'time'
  };

  // Adds a new question with a default option if needed.
  const addQuestion = (type: QuestionType) => {
    const optionsNeeded: QuestionType[] = ['multiple', 'checkbox', 'dropdown', 'grid'];
    const newQuestion: Question = {
      id: String(questions.length + 1),
      title: 'Untitled Question',
      type,
      options: optionsNeeded.includes(type) ? ['Option 1'] : []
    };
    setQuestions([...questions, newQuestion]);
  };

  // Adds an option to a question.
  const addOption = (questionId: string) => {
    setQuestions(prev =>
      prev.map(q => {
        if (q.id === questionId) {
          return {
            ...q,
            options: [...q.options, `Option ${q.options.length + 1}`]
          };
        }
        return q;
      })
    );
  };

  // Updates a given option's text.
  const updateOption = (questionId: string, index: number, value: string) => {
    setQuestions(prev =>
      prev.map(q => {
        if (q.id === questionId) {
          const newOptions = [...q.options];
          newOptions[index] = value;
          return { ...q, options: newOptions };
        }
        return q;
      })
    );
  };

  // Deletes a question.
  const deleteQuestion = (questionId: string) => {
    setQuestions(prev => prev.filter(q => q.id !== questionId));
  };

  // Handles image file selection.
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0] && selectedQuestionIdForImage) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setQuestions(prev =>
        prev.map(q => (q.id === selectedQuestionIdForImage ? { ...q, image: imageUrl } : q))
      );
      setSelectedQuestionIdForImage(null);
    }
  };

  // Renders a preview input for a question based on its type.
  const renderQuestionInput = (question: Question) => {
    switch (question.type) {
      case 'short':
        return (
          <div className="mt-4">
            <input
              type="text"
              disabled
              className="border border-borderPrimary p-2 rounded w-full"
              placeholder="Short answer text"
            />
          </div>
        );
      case 'paragraph':
        return (
          <div className="mt-4">
            <textarea
              disabled
              className="border border-borderPrimary p-2 rounded w-full"
              placeholder="Long answer text"
            />
          </div>
        );
      case 'multiple':
        return (
          <div className="mt-4 space-y-2">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  disabled
                  className="w-4 h-4 border-2 rounded-full"
                />
                <input
                  className="flex-1 bg-card outline-none border-b border-transparent hover:border-gray-300 focus:border-primary pb-1"
                  value={option}
                  onChange={(e) => updateOption(question.id, index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
            <button
              onClick={() => addOption(question.id)}
              className="text-gray-500 hover:text-gray-700 text-sm mt-2"
              type="button"
            >
              Add option or add &quot;Other&quot;
            </button>
          </div>
        );
      case 'checkbox':
        return (
          <div className="mt-4 space-y-2">
            {question.options.map((option, index) => (
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  disabled
                  className="w-4 h-4"
                />
                <input
                  className="flex-1 bg-card outline-none border-b border-transparent hover:border-gray-300 focus:border-primary pb-1"
                  value={option}
                  onChange={(e) => updateOption(question.id, index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
            <button
              onClick={() => addOption(question.id)}
              className="text-gray-500 hover:text-gray-700 text-sm mt-2"
              type="button"
            >
              Add option
            </button>
          </div>
        );
      case 'dropdown':
        return (
          <div className="mt-4">
            <select
              disabled
              className="border border-gray-300 p-2 rounded w-full"
            >
              <option value="">Select an option</option>
              {question.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );
      case 'file':
        return (
          <div className="mt-4">
            <input
              type="file"
              disabled
              className="border bg-card border-borderPrimary p-2 rounded w-full"
            />
          </div>
        );
      case 'linear':
        return (
          <div className="mt-4">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <label key={num} className="flex flex-col items-center">
                  <input type="radio" disabled value={num} className="w-4 h-4 bg-card" />
                  <span>{num}</span>
                </label>
              ))}
            </div>
          </div>
        );
      case 'grid':
        return (
          <div className="mt-4">
            <p className="text-gray-500">Grid question preview</p>
          </div>
        );
      case 'date':
        return (
          <div className="mt-4">
            <input
              type="date"
              disabled
              className="border bg-card border-borderPrimary p-2 rounded w-full"
            />
          </div>
        );
      case 'time':
        return (
          <div className="mt-4">
            <input
              type="time"
              disabled
              className="border bg-card border-borderPrimary p-2 rounded w-full"
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-bgPrimary">
      {/* Hidden file input for image upload */}
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />

      {/* Sidebar */}
      <div className="w-16 bg-bgPrimary shadow-lg flex flex-col items-center py-4 gap-4">
        {questionTypes.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="p-2 hover:bg-gray-100 rounded-full tooltip-container"
            onClick={() => {
              if (label === 'Add question') {
                addQuestion('multiple');
              } else {
                const qType = typeMapping[label];
                if (qType) {
                  addQuestion(qType);
                }
              }
            }}
            type="button"
          >
            <Icon className="w-5 h-5 text-gray-600" />
            <span className="tooltip">{label}</span>
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="max-w-2xl mx-auto space-y-4">
          {/* Form Header */}
          <Card className="border-t-8 border-t-primary">
            <CardContent className="p-6">
              <input
                className="text-3xl bg-card font-normal w-full outline-none border-b border-transparent hover:border-gray-300 focus:border-primary pb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Form title"
              />
              <input
                className="w-full bg-card mt-4 outline-none border-b border-transparent hover:border-gray-300 focus:border-primary pb-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Form description"
              />
            </CardContent>
          </Card>

          {/* Questions */}
          {questions.map((question) => (
            <Card key={question.id} className="relative hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <input
                      className="w-full bg-card outline-none border-b border-transparent hover:border-gray-300 focus:border-primary pb-2"
                      value={question.title}
                      onChange={(e) =>
                        setQuestions((prev) =>
                          prev.map((q) =>
                            q.id === question.id
                              ? { ...q, title: e.target.value }
                              : q
                          )
                        )
                      }
                      placeholder="Question"
                    />
                    {/* Show uploaded image if available */}
                    {question.image && (
                      <img
                        src={question.image}
                        alt="Uploaded"
                        className="mt-2 max-h-60 object-contain"
                      />
                    )}
                    {renderQuestionInput(question)}
                  </div>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedQuestionIdForImage(question.id);
                        imageInputRef.current?.click();
                      }}
                    >
                      <ImageIcon className="w-6 h-6 text-gray-500" />
                    </button>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2">

                  <button
                    className="p-2 text-gray-500 hover:text-gray-700"
                    onClick={() => deleteQuestion(question.id)}
                    type="button"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <style jsx>{`
        .tooltip-container {
          position: relative;
        }
        .tooltip {
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
          margin-left: 8px;
        }
        .tooltip-container:hover .tooltip {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default QuestionForm;
