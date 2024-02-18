import React from 'react';
import portfolio from '../data/portfolio.js';
import PortfolioItem from './PortfolioItem';
function Portfolio(){
    return(
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((portfolio)=>(
                    <PortfolioItem
                        itemKey={portfolio.id}
                        title={portfolio.title}
                        imgUrl={portfolio.imgUrl}
                        stack={portfolio.stack}
                        link={portfolio.link}
                    />
                ))}
            </div>
        </div>
    );
}
export default Portfolio;