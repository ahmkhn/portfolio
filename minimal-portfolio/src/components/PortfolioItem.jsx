import React from 'react';
import Title from './Title';
function PortfolioItem({ itemKey, title , imgUrl , stack , link }){
    return(
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <a href={link}><img src={imgUrl} alt="portfolio-pic" className="w-full h-36 md:h-48 object cover cursor-pointer"></img></a>
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs mid:text-sm">{stack.map(item=>(
                    <span key={itemKey} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">{item}</span>
                ))}</p>
            </div>
        </div>
    );
}
export default PortfolioItem;