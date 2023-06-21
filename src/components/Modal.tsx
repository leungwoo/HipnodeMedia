'use client';

import React, { useState } from 'react';
import ReactModal from 'react-modal';

function ModalProfileForm({ isOpen, closeModal, initialValues, onSubmit }: any) {
  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="flex flex-col justify-center"
    >
      <form onSubmit={handleSubmit} className=" w-full md:w-1/2 mx-auto rounded-lg bg-white shadow-xl dark:bg-dark3 font-bold flex flex-col p-4 ">
        <button type="button" className="flex font-semibold text-darkGray dark:text-lightGray p-2" onClick={closeModal}>X</button>

        <label className="text-darkGray dark:text-light2">
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formValues.name}
            onChange={handleInputChange}
            required
            placeholder="Full Name"
            className="bg-[#F7F7F7] dark:bg-dark4 rounded-lg w-full  px-[20px] md:py-[15px] h-[48px] md:h-[60px] md:text-[26px]"
          />
        </label>
        <label className="text-darkGray dark:text-light2">
          BIO:
          <textarea
            name="about"
            value={formValues.about}
            onChange={handleInputChange}
            required
            maxLength={30}
            placeholder="Describe yourself..."
            className="bg-[#F7F7F7] dark:bg-dark4 rounded-lg w-full  px-[20px] md:py-[15px] h-[48px] md:h-[60px] md:text-[26px]"
          />
        </label>
        <label className="text-darkGray dark:text-light2">
          Tagline:
          <input
            type="text"
            name="tagline"
            value={formValues.tagline}
            onChange={handleInputChange}
            required
            placeholder="Profession/Title"
            className="bg-[#F7F7F7] dark:bg-dark4 rounded-lg w-full  px-[20px] md:py-[15px] h-[48px] md:h-[60px] md:text-[26px]"
          />
        </label>
        <label className="text-darkGray dark:text-light2">
          Website Link:
          <input
            type="url"
            name="userUrl"
            value={formValues.userUrl}
            onChange={handleInputChange}
            placeholder="optional"
            className="bg-[#F7F7F7] dark:bg-dark4 rounded-lg w-full  px-[20px] md:py-[15px] h-[48px] md:h-[60px] md:text-[26px]"
          />
        </label>
        <label className="text-darkGray dark:text-light2">
          Twitter Link:
          <input
            type="url"
            name="twitter"
            value={formValues.twitter}
            onChange={handleInputChange}
            placeholder="optional"
            className="bg-[#F7F7F7] dark:bg-dark4 rounded-lg w-full  px-[20px] md:py-[15px] h-[48px] md:h-[60px] md:text-[26px]"
          />
        </label>
        <label className="text-darkGray dark:text-light2">
          Facebook Link:
          <input
            type="url"
            name="facebook"
            value={formValues.facebook}
            onChange={handleInputChange}
            placeholder="optional"
            className="bg-[#F7F7F7] dark:bg-dark4 rounded-lg w-full  px-[20px] md:py-[15px] h-[48px] md:h-[60px] md:text-[26px]"
          />
        </label>
        <label className="text-darkGray dark:text-light2">
          Instagram Link:
          <input
            type="url"
            name="instagram"
            value={formValues.instagram}
            onChange={handleInputChange}
            placeholder="optional"
            className="bg-[#F7F7F7] dark:bg-dark4 rounded-lg w-full  px-[20px] md:py-[15px] h-[48px] md:h-[60px] md:text-[26px]"
          />
        </label>
        <button type="submit" disabled={!formValues} className="flex justify-center bg-[#347AE2] text-[#EBF2FC] py-[10px] px-[40px] mt-2 rounded md:w-1/2">
          Save
        </button>
      </form>
    </ReactModal>
  );
}

export default ModalProfileForm;
