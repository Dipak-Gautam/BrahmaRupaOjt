import React, { useState } from "react";

const UploadImageButton = () => {
  const [loading, setLoading] = useState();
  const handleFileChange = (e) => {
    const image = e.target.files[0];
    if (!image) return;
    setLoading(true);
    const formData = new FormData();
  };
  return (
    <div>
      <input
        type="file"
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor="file-upload"
        className="bg-green-500 text-white font-semibold text-sm  py-1 px-3 w-fit rounded-md hover:bg-green-600 shadow-sm shadow-green-500/50 cursor-pointer"
      >
        {loading ? "Uploading" : " Upload Image"}
      </label>
    </div>
  );
};

export default UploadImageButton;
