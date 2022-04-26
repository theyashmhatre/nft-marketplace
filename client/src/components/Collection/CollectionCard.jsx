import React from 'react'
import { Link } from 'react-router-dom';

export default function CollectionCard({ collection }) {

    const internationalNumberFormat = new Intl.NumberFormat('en-US');
    const collectionId = parseInt(collection.collectionId._hex, 16);

    return (
        <Link className='max-h-[52px]' to={`/collection/${collectionId}`}>
            <div className="flex">
                <img
                    className="rounded-full w-12 h-12"
                    src={collection.imageURL}
                ></img>
                <div>
                    <h1 className="text-lg text-white font-bold  pl-2">
                        {collection.name}
                    </h1>
                    <p className="pl-2 text-gray-400">${internationalNumberFormat.format(Math.floor(Math.random() * (1000000 - 1000 + 1)) + 1000)}</p>
                </div>
            </div>
        </Link>
    )
}
