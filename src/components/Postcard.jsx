import React from "react";
import { appwriteService } from "../../appwrite/config";
import { Link } from "react-router-dom";

const Postcard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full rounded-xl bg-gray-100 p-4">
        <div className="mb-4 w-full justify-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="h-48 w-full rounded-lg object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
    </Link>
  );
};

export default Postcard;
