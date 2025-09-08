import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
    // Handle form submission here
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="success-message"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>🎉 Registration Successful!</h2>
        <p>Welcome to HackFest 2025! Check your email for further details.</p>
      </motion.div>
    );
  }

  return (
    <section className="registration-section section-padding">
      <div className="container">
        <motion.div
          className="registration-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Join the Revolution</h1>
          <p className="section-subtitle">
            Register now for HackFest 2025 and be part of the future
          </p>
        </motion.div>

        <motion.div
          className="form-container glass"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            rotateY: 2, 
            rotateX: 2,
            boxShadow: "0 25px 50px rgba(0, 255, 136, 0.2)"
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
            <div className="form-row">
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  {...register("firstName", { required: "First name is required" })}
                  type="text"
                  placeholder="First Name"
                  className={errors.firstName ? 'error' : ''}
                />
                {errors.firstName && (
                  <span className="error-message">{errors.firstName.message}</span>
                )}
              </motion.div>

              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  {...register("lastName", { required: "Last name is required" })}
                  type="text"
                  placeholder="Last Name"
                  className={errors.lastName ? 'error' : ''}
                />
                {errors.lastName && (
                  <span className="error-message">{errors.lastName.message}</span>
                )}
              </motion.div>
            </div>

            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
                type="email"
                placeholder="Email Address"
                className={errors.email ? 'error' : ''}
              />
              {errors.email && (
                <span className="error-message">{errors.email.message}</span>
              )}
            </motion.div>

            <div className="form-row">
              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <select
                  {...register("experience", { required: "Please select your experience" })}
                  className={errors.experience ? 'error' : ''}
                >
                  <option value="">Experience Level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (2-4 years)</option>
                  <option value="advanced">Advanced (5+ years)</option>
                </select>
                {errors.experience && (
                  <span className="error-message">{errors.experience.message}</span>
                )}
              </motion.div>

              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <select
                  {...register("teamSize", { required: "Please select team size" })}
                  className={errors.teamSize ? 'error' : ''}
                >
                  <option value="">Team Size</option>
                  <option value="solo">Solo</option>
                  <option value="2-3">2-3 members</option>
                  <option value="4-5">4-5 members</option>
                </select>
                {errors.teamSize && (
                  <span className="error-message">{errors.teamSize.message}</span>
                )}
              </motion.div>
            </div>

            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <input
                {...register("github")}
                type="url"
                placeholder="GitHub Profile (Optional)"
              />
            </motion.div>

            <motion.div 
              className="form-group"
              whileFocus={{ scale: 1.02 }}
            >
              <textarea
                {...register("motivation")}
                placeholder="What motivates you to participate? (Optional)"
                rows="4"
              />
            </motion.div>

            <div className="checkbox-group">
              <input
                {...register("terms", { required: "Please accept terms and conditions" })}
                type="checkbox"
                id="terms"
              />
              <label htmlFor="terms">
                I agree to the terms and conditions
              </label>
              {errors.terms && (
                <span className="error-message">{errors.terms.message}</span>
              )}
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 40px rgba(0, 255, 136, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Register for HackFest 2025
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
