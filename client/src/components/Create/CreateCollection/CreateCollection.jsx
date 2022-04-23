import React, { useContext, useState } from 'react'
import { FcAddImage } from 'react-icons/fc';
import { Buffer } from 'buffer';
import { MarketplaceContext } from '../../../context/MarketplaceContext';

export default function CreateCollection() {

    const { createCollection } = useContext(MarketplaceContext);
    
    const [collectionDetails, setCollectionDetails] = useState({
        name: "",
        description: "",
        image: { preview: "", raw: "", visible: false, file: '' }
    });

    function handleChange(e) {
        const value = e.target.value;
        setCollectionDetails({
            ...collectionDetails,
            [e.target.name]: value,
        });
    }

    //executes once the file is selected or changed.
    const handleFileChange = async (e) => {
        if (e.target.files[0]) {
            const data = e.target.files[0];
            const reader = new window.FileReader();
            reader.readAsArrayBuffer(data);
            reader.onloadend = () => {
                setCollectionDetails({
                    ...collectionDetails,
                    ["image"]: {
                        preview: URL.createObjectURL(e.target.files[0]), //Offline preview url
                        raw: e.target.files[0],
                        visible: true,
                        file: Buffer(reader.result)
                    }
                });
            };

        }
        else {
            console.log("Not supported");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        createCollection(collectionDetails);
    };

  return (
      <div className='gradient-bg-welcome'>
          <div className='flex flex-col sm:w-2/3 m-auto w-full justify-center h-full'>

              <form className='mt-10'>
                  <label className='text-2xl sm:text-5xl font-bold py-1 text-white'>Create New Collection</label>

                  <label for="name" className="block text-sm text-white font-bold mb-2">Name</label>
                  <input onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Collection Name" />

                  <label for="description" className="block mb-2 text-sm text-white font-bold mt-5">Description</label>
                  <textarea name="description" onChange={handleChange} id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Provide a detailed description of your collection."></textarea>

                  {collectionDetails.image.preview ?
                      <img src={collectionDetails.image.preview} alt="dummy" className='rounded-lg w-96 h-96 object-cover mt-10 mb-5' />
                      :
                      <div className="w-1/2 h-64 mt-5 mb-10 flex justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md ">
                          <div className="space-y-1 text-center">
                              <FcAddImage className="mx-auto h-12 w-12 mb-5 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true" />

                              <div className="flex text-sm text-gray-600">
                                  <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                      <span onChange={handleFileChange}>Upload a file</span>
                                      <input id="file-upload" onChange={handleFileChange} name="file-upload" type="file" className="sr-only" />
                                  </label>
                                  <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                          </div>
                      </div>

                  }
                  
                  <button onClick={onSubmit} type="button" className="text-white mb-10 mt-7 block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-7 py-2.5 text-center mr-2">Create</button>
              </form>


          </div>
      </div>
  )
}
